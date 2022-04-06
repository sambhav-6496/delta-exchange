import react from "react";

function TableHeaderColumn({ header }) {
  const { name } = header || {};
  return <th style={{ fontWeight: 600, width: "100px" }}>{name}</th>;
}

export default TableHeaderColumn;
