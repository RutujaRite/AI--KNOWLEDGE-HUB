import { Database, FileCheck, AlertTriangle, Files } from "lucide-react";

function Dashboard() {
  const statistics = [
    {
      title: "Total Datasets",
      value: "0",
      icon: Database,
    },
    {
      title: "Total Records",
      value: "0",
      icon: Files,
    },
    {
      title: "Cleaned Records",
      value: "0",
      icon: FileCheck,
    },
    {
      title: "Data Quality Issues",
      value: "0",
      icon: AlertTriangle,
    },
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of your recruitment data management system.</p>
        </div>
      </div>

      <div className="stats-grid">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.title}>
              <div className="stat-icon">
                <Icon size={23} />
              </div>

              <p>{item.title}</p>
              <h2>{item.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="content-card">
        <h3>Welcome to RecruitIQ</h3>
        <p>
          Upload recruitment datasets, identify data quality
          problems, clean records, and manage your dataset history.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;