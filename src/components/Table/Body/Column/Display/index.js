import react from "react";

function TableColumnDisplay({ dataKey = "", rowData = {} }) {
  const value = rowData[dataKey] || "NA";
  return <td>{value}</td>;
}

export default TableColumnDisplay;
