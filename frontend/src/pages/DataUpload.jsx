import { UploadCloud, FileSpreadsheet } from "lucide-react";

function DataUpload() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Data Upload</h1>
          <p>Upload your recruitment datasets.</p>
        </div>
      </div>

      <div className="upload-card">
        <UploadCloud size={48} />

        <h2>Upload Recruitment Dataset</h2>

        <p>
          Select a CSV or Excel file to import your recruitment data.
        </p>

        <label className="upload-button">
          <FileSpreadsheet size={18} />
          Choose File

          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            hidden
            onChange={(event) => {
              console.log(event.target.files[0]);
            }}
          />
        </label>

        <span className="upload-info">
          Supported formats: CSV, XLSX, XLS
        </span>
      </div>
    </div>
  );
}

export default DataUpload;