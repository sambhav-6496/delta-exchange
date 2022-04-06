import React from "react";
import { TABLE_COLUMN_TYPE } from "../../../../constants";
import TableColumnButton from "./Button";
import TableColumnDisplay from "./Display";

function TableColumn({ type = TABLE_COLUMN_TYPE.DISPLAY, ...restProps }) {
  debugger;
  function renderColumn() {
    switch (type) {
      case TABLE_COLUMN_TYPE.DISPLAY:
        return <TableColumnDisplay {...restProps} />;
      case TABLE_COLUMN_TYPE.BUTTON:
        return <TableColumnButton {...restProps} />;
    }
  }
  return <>{renderColumn()}</>;
}

export default TableColumn;
