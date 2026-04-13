import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Capabilities",
    path: "/capabilities",
    children: [
      { label: "Machining", path: "/capabilities/machining" },
      { label: "Gear Cutting", path: "/capabilities/gear-cutting" },
      { label: "Assembly", path: "/capabilities/assembly" },
    ],
  },
  { label: "Technologies", path: "/technologies" },
  { label: "What We Make", path: "/what-we-make" },
  { label: "Our Approach", path: "/our-approach" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Heritage", path: "/about/heritage" },
      { label: "Leadership", path: "/about/leadership" },
    ],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Pentagon Machines and Services" className="h-8 lg:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[180px]">
                    <div className="bg-background border border-border rounded-md shadow-lg py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
