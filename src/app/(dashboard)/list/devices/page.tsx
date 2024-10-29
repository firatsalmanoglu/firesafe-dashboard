import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, devicesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type Device = {
    id: number;
    deviceId: string;
    serialNumber: string;
    ownerId: string;
    ownerName: string;
    address: string;
    deviceType: string;
    feature: string;
    respPersonId: string;
    respPerson: string;
    manufactureDate: string;
    expiryDate: string;
    lastInspectionDate: string;
    location: string;
    statuss: string;
    photo: string;
    details: string;
  };

const columns =[
    {
        header:"Bilgi", 
        accessor:"info",
    },
    // {
    //     header:"Cihaz ID", 
    //     accessor:"deviceId",
    //     className: "hidden md:table-cell"
    // },
    // {
    //     header:"Adres", 
    //     accessor:"address",
    //     className: "hidden md:table-cell"
    // },
    
    {
        header:"Özelliği", 
        accessor:"feature",
        className: "hidden md:table-cell",
    },
    {
        header:"Sorumlu Personel", 
        accessor:"respPerson",
        className: "hidden md:table-cell",
    },
    {
      header:"Üret.Tar.", 
      accessor:"manufactureDate",
      className: "hidden md:table-cell",
    },
    {
        header:"Son Kul.Tar.", 
        accessor:"expiryDate",
        className: "hidden md:table-cell",
    },
    {
        header:"Son Kont.Tar.", 
        accessor:"lastInspectionDate",
        className: "hidden md:table-cell",
    },
    {
        header:"Konum", 
        accessor:"location",
        className: "hidden md:table-cell",
    },
    {
        header:"Durumu", 
        accessor:"statuss",
        className: "hidden md:table-cell",
    },
    {
      header:"Detaylar", 
      accessor:"details",
      className: "hidden md:table-cell",
    },
    {
      header:"Eylemler", 
      accessor:"action",
      className: "hidden md:table-cell",
    },
    
];

const DeviceListPage = () => {

    const renderRow = (item: Device) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex items-center gap-4 p-4">
            <Image
              src={item.photo}
              alt=""
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.deviceType}</h3>
              <p className="text-xs text-gray-500">{item.serialNumber}</p>
              <p className="text-xs text-gray-500">{item.ownerName}</p>
              <td className="hidden md:table-cell">{item.address}</td>

            </div>
          </td>
          {/* <td className="hidden md:table-cell">{item.deviceId}</td> */}
          <td className="hidden md:table-cell">{item.feature}</td>
          <td className="hidden md:table-cell">{item.respPerson}</td>
          <td className="hidden md:table-cell">{item.manufactureDate}</td>
          <td className="hidden md:table-cell">{item.expiryDate}</td>
          <td className="hidden md:table-cell">{item.lastInspectionDate}</td>
          <td className="hidden md:table-cell">{item.location}</td>
          <td className="hidden md:table-cell">{item.statuss}</td>
          <td className="hidden md:table-cell">{item.details}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/devices/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <Image src="/view.png" alt="" width={16} height={16} />
                </button>
              </Link>
              {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                //   <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="device" type="delete" id={item.id}/>
              )}
            </div>
          </td>
        </tr>
      );

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Cihazlar</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                        {role === "admin" && (
                        // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                        //     <Image src="/plus.png" alt="" width={14} height={14}/>
                        // </button>
                        <FormModal table="device" type="create" />
                        )}
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={devicesData}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default DeviceListPage
