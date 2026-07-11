import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#0B0B0B] h-screen overflow-hidden">

      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">

        <Navbar />

        {children}

      </div>

    </div>
  )
}

export default DashboardLayout