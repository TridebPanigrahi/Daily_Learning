import DashboardLayout from "../components/DashboardLayout";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">Total Users <span>128</span></div>
        <div className="stat-card">Tasks In Progress <span>12</span></div>
        <div className="stat-card">Pending Tasks <span>8</span></div>
        <div className="stat-card">Completed Tasks <span>34</span></div>
      </div>
    </DashboardLayout>
  );
}
