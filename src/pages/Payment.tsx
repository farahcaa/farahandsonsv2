import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  LinkAuthenticationElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";

type CreateIntentResponse = { clientSecret: string };

export default function Payment() {
  const [clientSecret, setClientSecret] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // 2) Fetch a clientSecret from your backend
  React.useEffect(() => {
    let active = true;
    (async () => {
      try {
        // Send cart/order info as needed. For now, a simple POST.
        const res = await fetch("/api/payments/create-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // TODO: include items, amounts, currency, customer id/email, etc.
          }),
        });
        if (!res.ok)
          throw new Error(`Failed to create PaymentIntent (${res.status})`);
        const data: CreateIntentResponse = await res.json();
        if (active) setClientSecret(data.clientSecret);
      } catch (e: any) {
        if (active) setError(e.message || "Failed to initialize payment.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-screen-md mx-auto px-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Payment</h1>
        <div className="rounded-2xl border bg-white p-6">
          Loading payment form…
        </div>
      </div>
    );
  }

  if (error || !clientSecret) {
    return (
      <div className="w-full max-w-screen-md mx-auto px-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Payment</h1>
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm text-red-600">
            {error || "Missing client secret from server."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Payment</h1>

      <div className="md:grid md:grid-cols-12 md:gap-6">
        {/* Left: embedded Stripe form */}
        <div className="md:col-span-8">
          <div className="rounded-2xl border bg-white p-4 md:p-6">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>

        {/* Right: summary placeholder (optional) */}
        <aside className="md:col-span-4 md:sticky md:top-20 mt-6 md:mt-0">
          <div className="rounded-2xl border bg-white p-4 md:p-5">
            <h2 className="text-base md:text-lg font-semibold mb-3">
              Order summary
            </h2>
            <div className="space-y-2 text-sm">
              <Row label="Subtotal" value="$0.00" />
              <Row label="Shipping" value="Calculated at payment" />
              <Row label="Estimated tax" value="—" />
              <div className="border-t my-2" />
              <Row
                label={<span className="font-medium">Total</span>}
                value={<span className="font-semibold">$0.00</span>}
              />
            </div>
            <p className="text-xs text-gray-500 mt-3">
              You’ll review your total before confirming payment.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState<string | null>(null);
  const [processing, setProcessing] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!stripe || !elements) return;

    setProcessing(true);

    // 4) Confirm the payment with Stripe
    const { error } = await stripe.confirmPayment({
      elements,
      // You can also use return_url to redirect externally.
      // Here we handle the result inline for a smoother SPA feel.
      confirmParams: {
        receipt_email: email || undefined,
        // return_url: `${window.location.origin}/payment/success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message ?? "Payment failed. Please try again.");
      setProcessing(false);
      return;
    }

    // If no error and no redirect was required, the PaymentIntent is likely succeeded or requires next action
    // You can retrieve status from elements or query your backend. For demo, navigate to success-ish.
    navigate("/account"); // or a dedicated success page
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Optional: capture email to attach as receipt email */}
      <div className="grid gap-1">
        <label className="text-sm">Email for receipt</label>
        <LinkAuthenticationElement
          onChange={(e) => setEmail(e.value.email ?? "")}
          options={{ defaultValues: { email } }}
        />
      </div>

      {/* Stripe Payment Element */}
      <div className="grid gap-1">
        <label className="text-sm">Payment details</label>
        <div className="rounded-xl border p-3">
          <PaymentElement />
        </div>
      </div>

      {message && <p className="text-sm text-red-600">{message}</p>}

      <button
        type="submit"
        disabled={!stripe || !elements || processing}
        className="rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60"
      >
        {processing ? "Processing…" : "Pay now"}
      </button>

      <p className="text-xs text-gray-500">
        By confirming your payment, you agree to Jaga’s terms and refund policy.
      </p>
    </form>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-700">{label}</span>
      <span>{value}</span>
    </div>
  );
}
