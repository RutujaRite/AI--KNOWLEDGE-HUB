import { Brush, AlertCircle } from "lucide-react";

function DataCleaning() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Data Cleaning</h1>
          <p>Identify and resolve recruitment data quality issues.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="section-heading">
          <Brush size={23} />
          <h3>Data Quality Analysis</h3>
        </div>

        <p>
          Upload a dataset to detect missing values, duplicate records,
          invalid values, and inconsistent formats.
        </p>

        <div className="empty-state">
          <AlertCircle size={35} />

          <h3>No Dataset Selected</h3>

          <p>
            Upload a recruitment dataset before starting the cleaning process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataCleaning;