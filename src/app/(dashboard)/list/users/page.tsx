//import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, usersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type User = {
    id: number;
    userId: string;
    role: string;
    name: string;
    email?: string;
    photo: string;
    phoneNumber: string;
    registrationDate: string;
    //subjects: string[];
    //classes: string[];
    address: string;
  };

const columns =[
    {
        header:"Bilgi", 
        accessor:"info",
    },
    {
        header:"Kullanıcı ID", 
        accessor:"userId",
        className: "hidden md:table-cell"
    },
    {
        header:"Rolü", 
        accessor:"role",
        className: "hidden md:table-cell",
    },
    {
        header:"Tel No", 
        accessor:"phoneNumber",
        className: "hidden md:table-cell",
    },
    {
        header:"Üyelik Tarihi", 
        accessor:"registrationDate",
        className: "hidden md:table-cell",
    },
    {
        header:"Kurum", 
        accessor:"Name",
        className: "hidden md:table-cell",
    },
    {
        header:"Adres", 
        accessor:"address",
        className: "hidden md:table-cell",
    },
];

const UserListPage = () => {

    const renderRow = (item: User) => (
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
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.userId}</td>
          <td className="hidden md:table-cell">{item.role}</td>
          <td className="hidden md:table-cell">{item.phoneNumber}</td>
          <td className="hidden md:table-cell">{item.registrationDate}</td>
          <td className="hidden md:table-cell">{item.name}</td>
          <td className="hidden md:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/teachers/${item.id}`}>
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
                <h1 className="hidden md:block text-lg font-semibold">Tüm Kullanıcılar</h1>
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
                <Table columns={columns} renderRow={renderRow} data={usersData}/>
            </div>

            {/* PAGINATION */}
                <Pagination />
        </div>
    )
}

export default UserListPage
