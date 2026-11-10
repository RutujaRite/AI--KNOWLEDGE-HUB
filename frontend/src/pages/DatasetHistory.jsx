import { History, Database } from "lucide-react";

function DatasetHistory() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Dataset History</h1>
          <p>View previously uploaded and processed datasets.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="section-heading">
          <History size={23} />
          <h3>Upload History</h3>
        </div>

        <div className="empty-state">
          <Database size={35} />

          <h3>No Datasets Available</h3>

          <p>
            Your uploaded dataset history will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DatasetHistory;