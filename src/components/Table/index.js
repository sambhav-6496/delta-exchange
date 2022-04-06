import React, { useEffect, useState } from "react";
import TableBody from "./Body";
import TableHeader from "./Header";

const Table = ({ table }) => {
  const {
    columns = [],
    headers = [],
    rowsData = [],
    showCheckboxes = false,
  } = table || {};
  const [tableRows, setTableRows] = useState(null);
  const [selectAllCheckBox, setSelectAllCheckbox] = useState(false);
  useEffect(() => {
    if (rowsData) {
      const rowsDataObj = {};
      rowsData.forEach((row) => {
        const { id } = row || {};
        rowsDataObj[id] = { ...row, isChecked: false };
      });
      setTableRows(rowsDataObj);
    }
  }, [rowsData]);

  function onCheckBoxSelect(id, value) {
    setTableRows((state) => {
      return {
        ...state,
        [id]: {
          ...state[id],
          isChecked: value,
        },
      };
    });
  }

  function onSelectAllChecboxClick(value) {
    setSelectAllCheckbox(value);
    setTableRows((state) => {
      const rows = { ...state };
      Object.values(rows || []).forEach((row) => {
        row.isChecked = value;
      });
      return rows;
    });
  }

  return (
    <table>
      <TableHeader
        headers={headers}
        showCheckboxes={showCheckboxes}
        selectAllCheckBox={selectAllCheckBox}
        onSelectAllChecboxClick={onSelectAllChecboxClick}
      />
      <TableBody
        columns={columns}
        rowsData={tableRows}
        showCheckboxes={showCheckboxes}
        onCheckBoxSelect={onCheckBoxSelect}
      />
    </table>
  );
};

export default Table;
