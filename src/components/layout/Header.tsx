import { Link, NavLink } from "react-router";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b bg-white text-black mb-2">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Jaga
        </Link>

        {/* Nav / Actions */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm hover:opacity-70 ${
                isActive ? "font-medium underline" : ""
              }`
            }
          >
            <User size={18} />
            Account
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center hover:opacity-70 ${
                isActive ? "font-medium underline" : ""
              }`
            }
          >
            <ShoppingCart size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
