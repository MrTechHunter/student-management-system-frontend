import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const { userProfile } = useAuth();

  return (
    <Layout title={"داشبورد"}>
      <div>{userProfile?.mobile} همراه:</div>
    </Layout>
  );
}

export default Dashboard;
