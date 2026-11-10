import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  Brush,
  History,
  Database,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Data Upload",
      path: "/upload",
      icon: Upload,
    },
    {
      name: "Data Cleaning",
      path: "/cleaning",
      icon: Brush,
    },
    {
      name: "Dataset History",
      path: "/history",
      icon: History,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Database size={27} />
        <h2>RecruitIQ</h2>
      </div>

      <p className="menu-heading">WORKSPACE</p>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p>AI Recruitment Analytics</p>
        <span>Module 1 · Data Management</span>
      </div>
    </aside>
  );
}

export default Sidebar;