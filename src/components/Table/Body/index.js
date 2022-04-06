import React from "react";
import TableRow from "./Row";

function TableBody({
  rowsData = [],
  showCheckboxes = false,
  columns = [],
  onCheckBoxSelect = () => {},
}) {
  return (
    <tbody>
      {Object.values(rowsData || []).map((row) => {
        const { id } = row;
        return (
          <TableRow
            key={id}
            rowData={row}
            columns={columns}
            showCheckboxes={showCheckboxes}
            onCheckBoxSelect={onCheckBoxSelect}
          />
        );
      })}
    </tbody>
  );
}

export default TableBody;
