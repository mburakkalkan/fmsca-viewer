import { DataGrid } from "@mui/x-data-grid";
import { parse } from "papaparse";
import { useEffect, useRef, useState } from "react";
import DetailModal from "./components/DetailModal";
import { columns, Record, visibleColumns } from "./constants";

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
      worker: true,
      step: function (row) {
        recordsRef.current.push(row.data);
        /*recordsRef.current.push({
          ...row.data,
          created_dt: moment(row.data.created_dt),
          data_source_modified_dt: moment(row.data.created_dt),
          entity_type: "",
          operating_status: "",
          legal_name: "",
          dba_name: "",
          physical_address: "",
          p_street: "",
          p_city: "",
          p_state: "",
          p_zip_code: "",
          phone: "",
          mailing_address: "",
          m_street: "",
          m_city: "",
          m_state: "",
          m_zip_code: "",
          usdot_number: "",
          mc_mx_ff_number: "",
          power_units: Number(row.data.power_units),
          mcs_150_form_date: moment(row.data.mcs_150_form_date),
          out_of_service_date: moment(row.data.out_of_service_date),
          state_carrier_id_number: "",
          duns_number: "",
          drivers: Number(row.data.drivers ?? 0),
          mcs_150_mileage_year: "",
          id: "",
          credit_score: "",
          record_status: ""
        });*/
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
          columns={columns.filter(c => visibleColumns.includes(c.field))}
          loading={!records}
          style={{ flex: 1 }}
          onRowClick={params => setCurrentRecord(params.row)}
        />
      </div>
      <DetailModal currentRecord={currentRecord} onClose={() => setCurrentRecord(undefined)} />
    </>
  );
}
