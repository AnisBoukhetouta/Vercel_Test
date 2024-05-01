import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

const PwnIQDashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
PwnIQDashboard.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default PwnIQDashboard;
