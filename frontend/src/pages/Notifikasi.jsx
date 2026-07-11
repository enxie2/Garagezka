import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ConfirmModal from "../components/ConfirmModal";
import {
  Bell,
  CheckCircle2,
  Trash2,
  MailOpen,
  CalendarDays,
} from "lucide-react";
import { toast } from "react-toastify";
import notificationService from "../services/notificationService";

function Notifikasi() {
  const [notifications, setNotifications] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loadingAction, setLoadingAction] = useState(null);

  const [confirmModal, setConfirmModal] = useState({
    open: false,
    title: "",
    message: "",
    confirmText: "",
    action: null,
  });

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await notificationService.getAll();
      setNotifications(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRead = async (id) => {
    try {
      setLoadingAction(`read-${id}`);
      await notificationService.markAsRead(id);
      toast.success("Notifikasi berhasil ditandai sebagai dibaca.");
      await loadNotifications();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message ?? "Gagal menandai notifikasi.");
    } finally {
      setLoadingAction(null);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoadingAction(`delete-${id}`);
      await notificationService.delete(id);
      toast.success("Notifikasi berhasil dihapus.");
      await loadNotifications();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message ?? "Gagal menghapus notifikasi.");
    } finally {
      setLoadingAction(null);
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    const matchFilter =
      selectedFilter === "all" ||
      (selectedFilter === "unread" && !notification.is_read) ||
      (selectedFilter === "read" && notification.is_read);

    const keyword = search.toLowerCase();
    const matchSearch =
      notification.title?.toLowerCase().includes(keyword) ||
      notification.message?.toLowerCase().includes(keyword);

    return matchFilter && matchSearch;
  });

  const notificationCounts = {
    all: notifications.length,
    unread: notifications.filter((n) => !n.is_read).length,
    read: notifications.filter((n) => n.is_read).length,
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Notifikasi</h1>
        <p className="text-gray-400 mt-2">
          Semua informasi terbaru aktivitas akun Anda.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <button onClick={() => setSelectedFilter("all")} className={`px-4 py-2 rounded-xl ${selectedFilter==="all"?"bg-red-500 text-white":"bg-[#1B1B1B] text-gray-300"}`}>Semua ({notificationCounts.all})</button>
          <button onClick={() => setSelectedFilter("unread")} className={`px-4 py-2 rounded-xl ${selectedFilter==="unread"?"bg-blue-500 text-white":"bg-[#1B1B1B] text-gray-300"}`}>Belum Dibaca ({notificationCounts.unread})</button>
          <button onClick={() => setSelectedFilter("read")} className={`px-4 py-2 rounded-xl ${selectedFilter==="read"?"bg-gray-500 text-white":"bg-[#1B1B1B] text-gray-300"}`}>Sudah Dibaca ({notificationCounts.read})</button>
        </div>

        <div className="mt-5">
          <input
            type="text"
            placeholder="Cari judul atau isi notifikasi..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full lg:w-96 bg-[#151515] border border-[#2A2A2A] rounded-2xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      <div className="space-y-5">
        {filteredNotifications.length>0 ? filteredNotifications.map((notification)=>(
          <div key={notification.id} className="bg-[#151515] border border-[#2A2A2A] rounded-3xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${notification.is_read?"bg-gray-500/20":"bg-red-500/20"}`}>
                <CheckCircle2 className={notification.is_read?"text-gray-400":"text-red-500"} size={26}/>
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold">{notification.title}</h2>
                <p className="text-gray-500 mt-2 leading-relaxed">{notification.message}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <CalendarDays size={16}/>
                    {new Date(notification.created_at).toLocaleString("id-ID")}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${notification.is_read?"bg-gray-500/20 text-gray-400":"bg-blue-500/20 text-blue-400"}`}>
                    {notification.is_read?"Sudah Dibaca":"Belum Dibaca"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              {!notification.is_read && (
                <button
                  onClick={()=>handleRead(notification.id)}
                  disabled={loadingAction===`read-${notification.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <MailOpen size={18}/>
                  {loadingAction===`read-${notification.id}`?"Menandai...":"Dibaca"}
                </button>
              )}
              <button
                onClick={()=>setConfirmModal({open:true,title:"Hapus Notifikasi",message:"Apakah Anda yakin ingin menghapus notifikasi ini?",confirmText:"Hapus",action:()=>handleDelete(notification.id)})}
                disabled={loadingAction===`delete-${notification.id}`}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <Trash2 size={18}/>
                {loadingAction===`delete-${notification.id}`?"Menghapus...":"Hapus"}
              </button>
            </div>
          </div>
        )):(
          <div className="bg-[#151515] border border-dashed border-[#2A2A2A] rounded-3xl p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#1B1B1B] flex items-center justify-center"><Bell className="text-gray-500" size={32}/></div>
            <h2 className="text-white text-2xl font-semibold mt-6">Belum Ada Notifikasi</h2>
            <p className="text-gray-500 mt-3">Semua notifikasi akan muncul di halaman ini.</p>
          </div>
        )}
      </div>

      <ConfirmModal
        open={confirmModal.open}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmText={confirmModal.confirmText}
        cancelText="Batal"
        loading={loadingAction!==null}
        onConfirm={async()=>{if(confirmModal.action) await confirmModal.action(); setConfirmModal({open:false,title:"",message:"",confirmText:"",action:null});}}
        onCancel={()=>{if(loadingAction) return; setConfirmModal({open:false,title:"",message:"",confirmText:"",action:null});}}
      />
    </DashboardLayout>
  );
}

export default Notifikasi;
