import * as React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useNavigate, Link } from "react-router";

type Address = {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  region: string; // state/province
  postalCode: string;
  country: string;
  phone?: string;
};

type CheckoutForm = {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  shipping: Address;
  billingSameAsShipping: boolean;
  billing: Address;
  notes?: string;
};

export default function Checkout() {
  const navigate = useNavigate();

  const methods = useForm<CheckoutForm>({
    mode: "onSubmit",
    defaultValues: {
      customer: { firstName: "", lastName: "", email: "", phone: "" },
      shipping: {
        name: "",
        line1: "",
        line2: "",
        city: "",
        region: "",
        postalCode: "",
        country: "US",
        phone: "",
      },
      billingSameAsShipping: true,
      billing: {
        name: "",
        line1: "",
        line2: "",
        city: "",
        region: "",
        postalCode: "",
        country: "US",
        phone: "",
      },
      notes: "",
    },
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const same = watch("billingSameAsShipping");

  // keep billing in sync when toggled on
  React.useEffect(() => {
    if (same) {
      const ship = methods.getValues("shipping");
      setValue("billing", ship, { shouldValidate: true });
    }
  }, [same, methods, setValue]);

  const onSubmit = async (data: CheckoutForm) => {
    // Normally: POST to your backend to create order + addresses
    console.log("checkout submit", data);
    navigate("/payment");
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-screen-lg mx-auto px-4"
        noValidate
      >
        <header className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-semibold">Checkout</h1>
          <p className="text-sm text-gray-600 mt-1">
            Enter your details to complete your order.
          </p>
        </header>

        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Left: form */}
          <div className="md:col-span-8 space-y-6">
            <Card title="Customer information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input name="customer.firstName" label="First name" required />
                <Input name="customer.lastName" label="Last name" required />
                <Input
                  name="customer.email"
                  label="Email"
                  type="email"
                  required
                  className="sm:col-span-2"
                />
                <Input
                  name="customer.phone"
                  label="Phone (optional)"
                  type="tel"
                  className="sm:col-span-2"
                />
              </div>
            </Card>

            <Card title="Shipping address">
              <AddressFields baseName="shipping" />
            </Card>

            <Card title="Billing address">
              <div className="mb-3">
                <Checkbox
                  name="billingSameAsShipping"
                  label="Billing same as shipping"
                />
              </div>
              <div className={same ? "pointer-events-none opacity-50" : ""}>
                <AddressFields baseName="billing" />
              </div>
            </Card>

            <Card title="Order notes (optional)">
              <Textarea
                name="notes"
                placeholder="Any delivery notes for the courier..."
              />
            </Card>

            <div className="flex items-center justify-between">
              <Link to="/cart" className="text-sm underline hover:opacity-80">
                Back to cart
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                Continue to payment
              </button>
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
                You’ll be able to review before paying.
              </p>
            </div>
          </aside>
        </div>
      </form>
    </FormProvider>
  );
}

/* -------------------- Reusable UI -------------------- */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-white text-black p-4 md:p-6">
      <h2 className="text-base md:text-lg font-semibold mb-4">{title}</h2>
      {children}
    </section>
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

/* -------------------- Form bits -------------------- */

function Input({
  name,
  label,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const { register, formState } = useFormContext();
  const error = formState.errors as any;
  const message = error?.[name]?.message;

  return (
    <div className={`grid gap-1 ${className}`}>
      <label className="text-sm">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
        {...register(name, {
          required: required ? "Required" : false,
          ...(type === "email"
            ? {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }
            : {}),
        })}
      />
      {message && <p className="text-xs text-red-600">{String(message)}</p>}
    </div>
  );
}

function Textarea({
  name,
  placeholder,
}: {
  name: string;
  placeholder?: string;
}) {
  const { register } = useFormContext();
  return (
    <textarea
      rows={3}
      placeholder={placeholder}
      className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
      {...register(name)}
    />
  );
}

function Checkbox({ name, label }: { name: string; label: string }) {
  const { register } = useFormContext();
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <input type="checkbox" className="h-4 w-4" {...register(name)} />
      <span>{label}</span>
    </label>
  );
}

function AddressFields({ baseName }: { baseName: "shipping" | "billing" }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Input name={`${baseName}.name`} label="Full name" required />

      <Input name={`${baseName}.phone`} label="Phone (optional)" type="tel" />

      <Input
        name={`${baseName}.line1`}
        label="Address line 1"
        required
        className="sm:col-span-2"
      />
      <Input
        name={`${baseName}.line2`}
        label="Address line 2 (optional)"
        className="sm:col-span-2"
      />

      <Input name={`${baseName}.city`} label="City" required />
      <Input name={`${baseName}.region`} label="State / Province" required />
      <Input name={`${baseName}.postalCode`} label="Postal code" required />

      {/* Simple country input; swap for a real selector later */}
      <Input
        name={`${baseName}.country`}
        label="Country code"
        placeholder="US"
        required
      />
    </div>
  );
}
