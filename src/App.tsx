import { DataGrid } from "@mui/x-data-grid";
import { parse } from "papaparse";
import { useEffect, useRef, useState } from "react";
import DetailModal from "./components/DetailModal";
import { Record, usingColumns } from "./constants";
import moment from "moment";

const csvUrl = `${window.location.origin}/records.csv`;

export default function App() {
  const recordsRef = useRef<Record[]>([]);
  const [records, setRecords] = useState<Record[]>();
  const [currentRecord, setCurrentRecord] = useState<Record>();
  
  useEffect(() => {
    parse<Record>(csvUrl, {
      header: true,
      download: true,
      skipEmptyLines: true,
      step: function (row) {
        recordsRef.current.push({
          ...row.data,
          created_dt: row.data.created_dt ? moment(row.data.created_dt, "YYYY-MM-DD HH:mm:ssZ") : "",
          data_source_modified_dt: row.data.data_source_modified_dt ? moment(row.data.data_source_modified_dt, "YYYY-MM-DD HH:mm:ssZ") : "",
          power_units: Number(row.data.power_units),
          mcs_150_form_date: row.data.mcs_150_form_date ? moment(row.data.mcs_150_form_date, "YYYY-MM-DD HH:mm:ssZ") : "",
          out_of_service_date: row.data.out_of_service_date ? moment(row.data.out_of_service_date, "MM/DD/YYYY"): "",
          drivers: Number(row.data.drivers),
        });
      },
      complete: function () {
        setRecords(recordsRef.current);
      }
    });
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <h1 className="text-center">FMSCA Viewer</h1>
        <DataGrid
          rows={records}
          columns={usingColumns}
          loading={!records}
          style={{ flex: 1 }}
          onRowClick={params => setCurrentRecord(params.row)}
        />
      </div>
      <DetailModal currentRecord={currentRecord} onClose={() => setCurrentRecord(undefined)} />
    </>
  );
}
