import React from "react";
import TableHeaderColumn from "./Column";
import Checkbox from "../../Checkbox";

function TableHeader({
  showCheckboxes = false,
  headers = [],
  selectAllCheckBox = false,
  onSelectAllChecboxClick = () => {},
}) {
  return (
    <thead>
      <tr>
        {showCheckboxes && (
          <th>
            <Checkbox
              checked={selectAllCheckBox}
              onChange={(e) => onSelectAllChecboxClick(e.target.checked)}
            />
          </th>
        )}
        {(headers || []).map((header) => {
          const { id } = header || {};
          return <TableHeaderColumn key={id} header={header} />;
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
