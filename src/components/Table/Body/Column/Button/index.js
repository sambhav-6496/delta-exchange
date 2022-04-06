import react from "react";
import Button from "../../../../Button";

function TableColumnButton({ label = "", onClick = () => {}, rowData = {} }) {
  return (
    <td>
      <Button onClick={() => onClick(rowData)}>{label}</Button>
    </td>
  );
}

export default TableColumnButton;
