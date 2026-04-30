import { NavLink, useLocation } from "react-router-dom";

const versions = [
  { path: "/about/heritage-v1", label: "v1" },
  { path: "/about/heritage-v2", label: "v2" },
  { path: "/about/heritage-v3", label: "v3" },
  { path: "/about/heritage-v4", label: "v4" },
];

export default function HeritageVersionSwitcher() {
  const { pathname } = useLocation();
  // Treat the canonical /about/heritage route as v1.
  const activePath =
    pathname === "/about/heritage" ? "/about/heritage-v1" : pathname;

  return (
    <div className="border-b border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm flex-wrap">
        <span className="text-muted-foreground mr-2">Heritage version:</span>
        {versions.map((v) => {
          const isActive = activePath === v.path;
          return (
            <NavLink
              key={v.path}
              to={v.path}
              className={`px-3 py-1.5 rounded-md border transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/50"
              }`}
            >
              {v.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
