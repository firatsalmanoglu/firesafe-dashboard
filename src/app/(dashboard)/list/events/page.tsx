import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, calendarEvents } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Event = {
    id: number;
    eventId: string;
    creatorId: string;
    creatorName: string;
    creatorOrganization: string;
    respPersonId: string;
    respPersonName: string;
    respPersonOrg: string;
    title: string;
    message: string;
    start: string;
    end: string;
    create: string;
    allDay: string;

  };


const columns =[
    {
        header:"Etkinlik ID", 
        accessor:"eventId",
        className: "hidden md:table-cell"
    },
    {
        header:"Oluşturan Kullanıcı", 
        accessor:"info",
    },
    {
        header:"Etkinlik Başlığı", 
        accessor:"title",
        className: "hidden md:table-cell"
    },
    {
        header:"İlgili Kullanıcı", 
        accessor:"info",
    },
    
    {
        header:"Açıklama", 
        accessor:"message",
        className: "hidden md:table-cell",
    },
    {
        header:"Başlangıç Tarihi", 
        accessor:"start",
        className: "hidden md:table-cell",
    },
    {
        header:"Bitiş Tarihi", 
        accessor:"end",
        className: "hidden md:table-cell",
    },
    {
        header:"Oluşturma Tarihi", 
        accessor:"create",
        className: "hidden md:table-cell",
    },
    {
        header:"Tüm GÜn mü?", 
        accessor:"allDay",
        className: "hidden md:table-cell",
    },
    
];

const EventListPage = () => {

    const renderRow = (item: Event) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="hidden md:table-cell">{item.eventId}</td>
          <td className="flex items-center gap-4 p-4">
            {/* <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.creatorName}</h3>
              <p className="text-xs text-gray-500">{item.creatorId}</p>
              <p className="text-xs text-gray-500">{item.creatorOrganization}</p>
            </div>
          </td>

          

          <td className="hidden md:table-cell">{item.title}</td>
          <td className="flex items-center gap-4 p-4">
            {/* <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.respPersonName}</h3>
              <p className="text-xs text-gray-500">{item.respPersonId}</p>
              <p className="text-xs text-gray-500">{item.respPersonOrg}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.message}</td>
          <td className="hidden md:table-cell">{item.start}</td>
          <td className="hidden md:table-cell">{item.end}</td>
          <td className="hidden md:table-cell">{item.create}</td>
          <td className="hidden md:table-cell">{item.allDay}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/events/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <Image src="/view.png" alt="" width={16} height={16} />
                </button>
              </Link>
              {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                //   <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="event" type="delete" id={item.id}/>
              )}
            </div>
          </td>
        </tr>
      );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Randevular</h1>
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
                        <FormModal table="event" type="create" />
                        )}
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={calendarEvents}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default EventListPage
