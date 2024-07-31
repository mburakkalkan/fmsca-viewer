import { GridColDef } from "@mui/x-data-grid";
import { Moment } from "moment";

export interface Record {
  created_dt?: Moment|string;
  data_source_modified_dt?: Moment|string;
  entity_type?: string;
  operating_status?: string;
  legal_name?: string;
  dba_name?: string;
  physical_address?: string;
  p_street?: string;
  p_city?: string;
  p_state?: string;
  p_zip_code?: string;
  phone?: string;
  mailing_address?: string;
  m_street?: string;
  m_city?: string;
  m_state?: string;
  m_zip_code?: string;
  usdot_number?: string;
  mc_mx_ff_number?: string;
  power_units?: string|number;
  mcs_150_form_date?: Moment|string;
  out_of_service_date?: Moment|string;
  state_carrier_id_number?: string;
  duns_number?: string;
  drivers?: string|number;
  mcs_150_mileage_year?: string;
  id?: string;
  credit_score?: string;
  record_status?: string;
}

export const columnLabels: { [key: string]: string } = {
  created_dt: "Created Date",
  data_source_modified_dt: "Modified Date",
  entity_type: "Entity Type",
  operating_status: "Operating Status",
  legal_name: "Legal Name",
  dba_name: "DBA Name",
  physical_address: "Physical Address",
  p_street: "Street",
  p_city: "City",
  p_state: "State",
  p_zip_code: "Zip Code",
  phone: "Phone",
  mailing_address: "Mailing Address",
  m_street: "Mailing Street",
  m_city: "Mailing City",
  m_state: "Mailing State",
  m_zip_code: "Mailing Zip Code",
  usdot_number: "USDOT Number",
  mc_mx_ff_number: "MC/MX/FF Number",
  power_units: "Power Units",
  mcs_150_form_date: "MCS-150 Form Date",
  out_of_service_date: "Out of Service Date",
  state_carrier_id_number: "State Carrier ID Number",
  duns_number: "DUNS Number",
  drivers: "Drivers",
  mcs_150_mileage_year: "MCS-150 Mileage Year",
  id: "ID",
  credit_score: "Credit Score",
  record_status: "Record Status"
};

export const usingColumns: GridColDef<Record>[] = [
  {
    field: "created_dt",
    headerName: columnLabels["created_dt"],
    flex: 1,
    valueFormatter: (value: Moment|string) => value === "" ? "" : (value as Moment).format("MM/DD/YYYY HH:mm:ss"),
    sortComparator: (a, b) => a.diff?.(b) ?? 0
  },
  {
    field: "data_source_modified_dt",
    headerName: columnLabels["data_source_modified_dt"],
    flex: 1,
    valueFormatter: (value: Moment|string) => value === "" ? "" : (value as Moment).format("MM/DD/YYYY HH:mm:ss"),
    sortComparator: (a, b) => a.diff?.(b) ?? 0
  },
  {
    field: "entity_type",
    headerName: columnLabels["entity_type"],
    flex: 1
  },
  {
    field: "operating_status",
    headerName: columnLabels["operating_status"],
    flex: 1
  },
  {
    field: "legal_name",
    headerName: columnLabels["legal_name"],
    flex: 1
  },
  {
    field: "dba_name",
    headerName: columnLabels["dba_name"],
    flex: 1
  },
  {
    field: "physical_address",
    headerName: columnLabels["physical_address"],
    flex: 1
  },
  {
    field: "phone",
    headerName: columnLabels["phone"],
    flex: 1
  },
  {
    field: "usdot_number",
    headerName: columnLabels["usdot_number"],
    flex: 1
  },
  {
    field: "mc_mx_ff_number",
    headerName: columnLabels["mc_mx_ff_number"],
    flex: 1
  },
  {
    field: "power_units",
    headerName: columnLabels["power_units"],
    flex: 1
  },
  {
    field: "out_of_service_date",
    headerName: columnLabels["out_of_service_date"],
    flex: 1,
    valueFormatter: (value: Moment|string) => value === "" ? "" : (value as Moment).format("MM/DD/YYYY"),
    sortComparator: (a, b) => a.diff?.(b) ?? 0
  }
];