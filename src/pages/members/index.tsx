import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/AuthContext";

function Members() {
  const { userProfile } = useAuth();

  return (
    <Layout title={"مشاهده همه کاربران"}>
      <div>{userProfile?.mobile} همراه:</div>
    </Layout>
  );
}

export default Members;
