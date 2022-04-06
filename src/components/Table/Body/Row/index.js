import react from "react";

import Checkbox from "../../../Checkbox";
import TableColumn from "../Column";

function TableRow({
  rowData = {},
  columns = [],
  showCheckboxes = false,
  onCheckBoxSelect = () => {},
}) {
  const { id, isChecked = false } = rowData || {};
  function onCheckBoxClick(event) {
    const value = event.target.checked;
    onCheckBoxSelect(id, value);
  }
  return (
    <tr>
      {showCheckboxes && (
        <td>
          <Checkbox onChange={onCheckBoxClick} checked={isChecked} />
        </td>
      )}
      {columns.map((column, index) => {
        const { id, ...restProps } = column || {};
        return <TableColumn key={id} rowData={rowData} {...restProps} />;
      })}
    </tr>
  );
}

export default TableRow;
