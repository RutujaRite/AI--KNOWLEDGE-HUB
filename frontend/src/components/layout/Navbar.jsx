import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search datasets..."
        />
      </div>

      <div className="navbar-actions">
        <button className="notification-button">
          <Bell size={20} />
        </button>

        <div className="profile">
          <UserCircle size={30} />
          <div>
            <strong>Admin</strong>
            <span>Recruitment Analyst</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;