import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, notificationsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Notification = {
    id: number;
    //notificationId: string;
    content: string;
    creatorId: string;
    recipientId: string;
    notificationDate: string;
    isRead: string;
    typeId: string;

  };

    // id: 1,
    // //notificationId: "889",
    // content: "xxxx nolu cihazın bakım tarihi yaklaşıyor...",
    // creatorId: "007",
    // recipientId: "445689",
    // notificationDate: "24/10/2024",
    // isRead: "Okundu",
    // notificationType: "Hatırlatma",


const columns =[
    {
        header:"Bildirim ID", 
        accessor:"id",
        className: "hidden md:table-cell"
    },
    {
        header:"İlgili Kullanıcı", 
        accessor:"info",
    },
    // {
    //     header:"Cihaz Seri No", 
    //     accessor:"deviceSerialNumber",
    //     className: "hidden md:table-cell"
    // },
    // {
    //     header:"Cihaz Sahibi", 
    //     accessor:"deviceOwner",
    //     className: "hidden md:table-cell"
    // },
    
    // {
    //     header:"Bildirim", 
    //     accessor:"message",
    //     className: "hidden md:table-cell",
    // },
    {
        header:"Bildirim Tarihi", 
        accessor:"notificationDate",
        className: "hidden md:table-cell",
    },
    {
        header:"Durumu", 
        accessor:"isRead",
        className: "hidden md:table-cell",
    },
    // {
    //     header:"Bildirim Türü", 
    //     accessor:"notificationType",
    //     className: "hidden md:table-cell",
    // },
    {
      header:"Eylemler", 
      accessor:"action",
      className: "hidden md:table-cell",
    },
    
];

const NotificationListPage = () => {

    const renderRow = (item: Notification) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="hidden md:table-cell">{item.id}</td>
          <td className="flex items-center gap-4 p-4">
            {/* <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="flex flex-col">
              {/* <h3 className="font-semibold">{item.userName}</h3> recipientId ile ilişkili userName gelecek */}
              <p className="text-xs text-gray-500">{item.recipientId}</p>
              {/* <p className="text-xs text-gray-500">{item.deviceOwner}</p> recipientId ile ilişkili Kurum Adı gelecek */}
            </div>
          </td>
          {/* <td className="hidden md:table-cell">{item.deviceSerialNumber}</td>  */}
          {/* <td className="hidden md:table-cell">{item.deviceOwner}</td> */}
          {/* <td className="hidden md:table-cell">{item.message}</td> */}
          <td className="hidden md:table-cell">{item.notificationDate}</td>
          <td className="hidden md:table-cell">{item.isRead}</td>
          {/* <td className="hidden md:table-cell">{item.notificationType}</td> */}
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/notifications/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                  <Image src="/view.png" alt="" width={24} height={24}/>
                </button>
              </Link>
              {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                //   <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="notification" type="delete" id={item.id}/>
              )}
            </div>
          </td>
        </tr>
      );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Bildirimler</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                        {role === "admin" && (
                        // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                        //     <Image src="/plus.png" alt="" width={14} height={14}/>
                        // </button>
                        <FormModal table="notification" type="create" />
                        )}
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={notificationsData}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default NotificationListPage
