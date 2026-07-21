import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-secondary w-full navbar rounded-2xl shadow-lg ">
      <div className="navbar-start text-secondary-content">
        Portfolio Alexandre Tomasi
      </div>
      <div className="navbar-end">
        <NavLink to="/" className="btn btn-ghost text-secondary-content">
          Home
        </NavLink>
        <NavLink to="/cv" className="btn btn-ghost">
          CV
        </NavLink>
        <NavLink to="/projects" className="btn btn-ghost">
          Projects
        </NavLink>
        <NavLink to="/settings" className="btn btn-ghost">
          Settings
        </NavLink>
      </div>
    </div>
  );
}
