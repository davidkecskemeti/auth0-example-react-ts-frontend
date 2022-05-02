import AuthContainer from "./AuthContainer";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <AuthContainer />
    </div>
  );
};

export default Dashboard;
