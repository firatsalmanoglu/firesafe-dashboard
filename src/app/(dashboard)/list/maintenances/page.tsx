//import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, maintenancesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Offer = {
    id: number;
    recordID: string;
    deviceSerialNumber: string;
    performedByID: string;
    performedByName: string;
    instPerformed: string;
    instServed: string;
    maintenanceDate: string;
    maintenanceType: string;
    details: string;
    nexyMaintenanceDate: string;
    status: string;
}

const columns =[
    {
        header:"Kayıt No", 
        accessor:"recordID",
    },
    {
        header:"Cihaz Seri No", 
        accessor:"deviceSerialNumber",
        className: "hidden md:table-cell"
    },
    {
        header:"Hizmet Sağlayıcı", 
        accessor:"info",
        className: "hidden md:table-cell",
    },
    {
        header:"Müşteri", 
        accessor:"instServed",
        className: "hidden md:table-cell",
    },
    {
        header:"Bakım Tarihi", 
        accessor:"maintenanceDate",
        className: "hidden md:table-cell",
    },
    {
        header:"Bakım Türü", 
        accessor:"maintenanceType",
        className: "hidden md:table-cell",
    },
    {
        header:"Detay", 
        accessor:"details",
        className: "hidden md:table-cell",
    },
    {
        header:"Sonraki Bakım Tarihi", 
        accessor:"nexyMaintenanceDate",
        className: "hidden md:table-cell",
    },
    
    {
        header:"Durumu", 
        accessor:"status",
        className: "hidden md:table-cell",
    },
    
];

const MaintenanceListPage = () => {

    const renderRow = (item: Offer) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="hidden md:table-cell">{item.recordID}</td>
          <td className="hidden md:table-cell">{item.deviceSerialNumber}</td>
          <td className="flex items-center gap-4 p-4">
            {/* <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            /> */}
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.instPerformed}</h3>
              <p className="text-xs text-gray-500">{item.performedByName}</p>
              <p className="text-xs text-gray-500">{item.performedByID}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.instServed}</td>
          <td className="hidden md:table-cell">{item.maintenanceDate}</td>
          <td className="hidden md:table-cell">{item.maintenanceType}</td>
          <td className="hidden md:table-cell">{item.details}</td>
          <td className="hidden md:table-cell">{item.nexyMaintenanceDate}</td>
          <td className="hidden md:table-cell">{item.status}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/offers/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <Image src="/view.png" alt="" width={16} height={16} />
                </button>
              </Link>
              {/* {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                //   <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="teacher" type="delete" id={item.id}/>
              )} */}
            </div>
          </td>
        </tr>
      );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Bakımlar</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                            <Image src="/plus.png" alt="" width={14} height={14}/>
                        </button>
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={maintenancesData}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default MaintenanceListPage
