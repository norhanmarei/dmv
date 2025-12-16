import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/", end: true },
  { label: "Services", to: "/services" },
  { label: "People", to: "/people" },
  { label: "Drivers", to: "/drivers" },
  { label: "Settings", to: "/settings" },
  { label: "Reports", to: "/reports" },
];

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "var(--bg)", borderBottom: `1px solid var(--border)` }}>
      <div style={{
        maxWidth: "1120px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1rem"
      }}>
        <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--text)" }}>DMV</h1>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  //textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "var(--accent)" : "var(--muted-fg)",
                  cursor: "pointer"
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
