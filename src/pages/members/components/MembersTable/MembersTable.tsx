import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableColumn<T> {
  label: string;
  key: keyof T;
  render?: (data: T[keyof T]) => React.ReactNode;
}

interface BaseTableProps<T> {
  rows: T[];
  columns: TableColumn<T>[];
  onViewClick: (rowData: T) => void;
  showViewButton?: boolean;
}

const MembersTable = <T extends object>({
  rows,
  columns,
  onViewClick,
  showViewButton = true,
}: BaseTableProps<T>) => {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: "690px",
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
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {column.label}
              </TableCell>
            ))}
            {showViewButton && (
              <TableCell
                sx={{ textAlign: "center", fontWeight: "700", height: "50px" }}
              >
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
                  sx={{ textAlign: "center", fontSize: "14px", height: "70px" }}
                >
                  {column.key === "dietStatus" ? (
                    row[column.key] === true ? (
                      <span className="w-[103px] h-[22px] bg-[#ECFDF3] rounded-[20px] pr-[7px] pl-[30px]">
                        <span className="w-[7px] h-[7px] bg-[#12B76A] rounded-full inline-block ml-4"></span>
                        تکمیل
                      </span>
                    ) : (
                      <span className="w-[103px] h-[22px] bg-[#FEF3F2] rounded-[20px] pr-[7px] pl-[30px]">
                        <span className="w-[7px] h-[7px] bg-[#F04438] rounded-full inline-block ml-4"></span>
                        ناتمام
                      </span>
                    )
                  ) : (
                    String(row[column.key])
                  )}
                </TableCell>
              ))}
              {showViewButton && (
                <TableCell sx={{ textAlign: "center" }}>
                  <div
                    className="text-[#3366CC] underline cursor-pointer"
                    onClick={() => onViewClick(row)}
                  >
                    مشاهده
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembersTable;
