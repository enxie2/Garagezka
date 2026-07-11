import { useAuth } from "../context/AuthContext";

import DashboardUser from "./DashboardUser";
import DashboardAdmin from "./DashboardAdmin";

function Dashboard() {

    const { user } = useAuth();

    if (user?.role === "admin") {
        return <DashboardAdmin />;
    }

    return <DashboardUser />;

}

export default Dashboard;