import Sidebar from "./Sidebar";
import "../styles/dashboard.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content glass">
          {children}
        </main>
      </div>
    </div>
  );
}
