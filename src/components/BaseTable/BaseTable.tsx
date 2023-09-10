import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import ViewButton from "./ViewButton";

interface BaseTableProps<T> {
  rows: T[];
  columns: { label: string; key: keyof T }[];
  onViewClick: (rowData: T) => void;
  showViewButton?: boolean;
}

const BaseTable = <T extends object>({
  rows,
  columns,
  onViewClick,
  showViewButton = true,
}: BaseTableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          border: "1px solid #EAECF0",
          borderRadius: "15px",
        }}
        aria-label="table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.key.toString()}
                sx={{ textAlign: "center", fontWeight: "700" }}
              >
                {column.label}
              </TableCell>
            ))}
            {showViewButton && (
              <TableCell sx={{ textAlign: "center", fontWeight: "700" }}>
                ویرایش و مشاهده اطلاعات
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                backgroundColor: rowIndex % 2 === 0 ? "#F9FAFB" : "inherit",
              }}
            >
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  sx={{ textAlign: "center", fontSize: "14px" }}
                >
                  {String(row[column.key])}
                </TableCell>
              ))}
              {showViewButton && (
                <TableCell sx={{ textAlign: "center" }}>
                  <ViewButton onClick={() => onViewClick(row)} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
