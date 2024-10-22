import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div>
      <Header />
      {/* outlet will access dashboard child*/}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Dashboard;