import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, logsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Log = {
    id: number;
    logId: string;
    date: string;
    userId: string;
    action: string;
    tableName: string;
    prevValue: string;
    actualValue: string;
    IP: string;
  };


const columns =[
    {
        header:"Log ID", 
        accessor:"logId",
        className: "hidden md:table-cell"
    },

    {
        header:"Log Tarihi", 
        accessor:"date",
        className: "hidden md:table-cell",
    },
    
    {
        header:"Kullanıcı ID", 
        accessor:"userId",
        className: "hidden md:table-cell"
    },
    
    {
        header:"İşlem", 
        accessor:"action",
        className: "hidden md:table-cell",
    },
   
    {
      header:"Tablo Adı", 
      accessor:"tableName",
      className: "hidden md:table-cell",
    },
    {
        header:"Önceki Değer", 
        accessor:"prevValue",
        className: "hidden md:table-cell"
    },
    
    {
        header:"Güncel Değer", 
        accessor:"actualValue",
        className: "hidden md:table-cell",
    },
   
    {
      header:"IP", 
      accessor:"IP",
      className: "hidden md:table-cell",
    },
    
];

const LogListPage = () => {

    const renderRow = (item: Log) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
          <td className="hidden md:table-cell">{item.logId}</td>
          
          <td className="hidden md:table-cell">{item.date}</td>
          {/* <td className="hidden md:table-cell">{item.deviceOwner}</td> */}
          {/* <td className="hidden md:table-cell">{item.message}</td> */}
          <td className="hidden md:table-cell">{item.userId}</td>
          <td className="hidden md:table-cell">{item.action}</td>
          <td className="hidden md:table-cell">{item.tableName}</td>
          <td className="hidden md:table-cell">{item.prevValue}</td>
          <td className="hidden md:table-cell">{item.actualValue}</td>
          <td className="hidden md:table-cell">{item.IP}</td>
          
        </tr>
      );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Loglar</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                        {/* {role === "admin" && (
                        // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                        //     <Image src="/plus.png" alt="" width={14} height={14}/>
                        // </button>
                        <FormModal table="log" type="create" />
                        )} */}
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={logsData}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default LogListPage
