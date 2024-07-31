import { GridColDef } from "@mui/x-data-grid";

export interface Record {
  created_dt?: string;
  data_source_modified_dt?: string;
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
  power_units?: string;
  mcs_150_form_date?: string;
  out_of_service_date?: string;
  state_carrier_id_number?: string;
  duns_number?: string;
  drivers?: string;
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

export const columns: GridColDef[] = Object.keys(columnLabels).map(c => ({
  field: c,
  headerName: columnLabels[c],
  flex: 1
}));

export const visibleColumns = [
  "created_dt",
  "data_source_modified_dt",
  "entity_type",
  "operating_status",
  "legal_name",
  "dba_name",
  "physical_address",
  "phone",
  "usdot_number",
  "mc_mx_ff_number",
  "power_units",
  "out_of_service_date"
];
