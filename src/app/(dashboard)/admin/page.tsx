import UserCard from "@/components/UserCard"
import CountChart from "@/components/CountChart";
import OfferChart from "@/components/OfferChart";
import LogChart from "@/components/LogChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";


const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <div className='w-full lg:w-2/3'>
            {/* USER CARDS */}
            <div className='flex gap-4 justify-between flex-wrap'>
                <UserCard type="Teklifler" />
                <UserCard type="Bakım/Onarımlar" />
                <UserCard type="Sisteme Kayıtlı Cihaz Sayısı" />
                <UserCard type="XXXXX" />
            </div>
            {/* MIDDLE CHARTS */}
            <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* COUNT CHART */}
                <div className='w-full lg:w-1/3 h-[450px]'>
                <CountChart />
                </div>
                    {/* OFFER CHART */}
                <div className='w-full lg:w-2/3 h-[450px]'>
                <OfferChart />
                </div>

            </div>

            {/* BOTTOM CHARTS */}
            <div className='w-full h-[500px]'>
                <LogChart />
            </div>

            </div>
            {/* RİGHT */}
            <div className='w-full lg:w-1/3 flex flex-col gap-8'>
            <EventCalendar />
            <Announcements />
            </div>
        </div>

    )
}

export default AdminPage
