import { ReactNode, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Layout from "../../components/Layout";
import { useUsersList } from "../../contexts/UsersListContext";
import MembersTable from "./components/MembersTable/MembersTable";

interface MyData {
  name: string;
  start_date: string;
  gender: string;
  birth_year: string;
  status: boolean;
}

interface TableColumn<T> {
  label: string;
  key: keyof T;
  render?: (data: ReactNode) => React.ReactNode;
}

function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

const Members: React.FC = () => {
  const { usersListData, fetchUsersList } = useUsersList();

  useEffect(() => {
    fetchUsersList();
  }, []);

  const columns: TableColumn<MyData>[] = [
    { label: "نام و نام خانوادگی", key: "name" },
    { label: "تاریخ ثبت رژیم", key: "start_date" },
    { label: "جنسیت", key: "gender" },
    { label: "سن", key: "birth_year" },
    {
      label: "تکمیل بودن رژیم",
      key: "status",
      render: (data: ReactNode) => {
        if (isBoolean(data)) {
          return data ? <div>Completed</div> : <div>Not Completed</div>;
        }
        return null;
      },
    },
  ];

  const handleViewClick = (rowData: MyData) => {
    console.log("View button clicked for:", rowData.name);
  };

  console.log("usersListData: ", usersListData);

  return (
    <Layout title={"مشاهده همه کاربران"} width={"1150px"}>
      <div className="flex justify-between items-center h-[100px] bg-[#F9FAFB] mb-[25px] rounded-[15px] p-5">
        <div>
          <TextField
            placeholder="جستوجو برای کاربر"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button variant="outlined" startIcon={<TuneIcon />}>
            فیلترها
          </Button>
        </div>
      </div>
      <MembersTable
        rows={usersListData || []}
        columns={columns}
        onViewClick={handleViewClick}
      />
    </Layout>
  );
};

export default Members;
