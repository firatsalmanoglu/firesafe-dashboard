import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, usersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


type User = {

    id: number,
    userId: string,
    userName: string,
    firstName: string,
    lastName: string,
    bloodType: string,
    birthday: string,
    sex: string,
    organizationId: string,
    organizationName: string,
    address: string,
    role: string,
    photo: string,
    email: string,
    phoneNumber: string,
    registrationDate: string,

    // id: number;
    // userId: string;
    // userName: string;
    // organizationName: string;
    // role: string;
    // email?: string;
    // photo: string;
    // phoneNumber: string;
    // registrationDate: string;
    // //subjects: string[];
    // //classes: string[];
    // address: string;
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
      header:"Kullanıcı Adı", 
      accessor:"userName",
      className: "hidden md:table-cell"
    },
    {
        header:"Rolü", 
        accessor:"role",
        className: "hidden md:table-cell",
    },
    {
      header:"Cinsiyet", 
      accessor:"sex",
      className: "hidden md:table-cell",
    },
    {
      header:"Doğum Tarihi", 
      accessor:"birthday",
      className: "hidden md:table-cell",
    },
    {
      header:"Kan Grubu", 
      accessor:"bloodType",
      className: "hidden md:table-cell",
    },
    {
      header:"Üyelik Tarihi", 
      accessor:"registrationDate",
      className: "hidden md:table-cell",
    },
    {
        header:"Tel No", 
        accessor:"phoneNumber",
        className: "hidden md:table-cell",
    },
    {
      header:"E-mail", 
      accessor:"email",
      className: "hidden md:table-cell",
    },
    {
        header:"Adres", 
        accessor:"address",
        className: "hidden md:table-cell",
    },
    {
      header:"Eylemler", 
      accessor:"action",
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
              <h3 className="font-semibold">{item.firstName}</h3>
              <h3 className="font-semibold">{item.lastName}</h3>
              <p className="text-xs text-gray-500">{item.organizationName}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.userId}</td>
          <td className="hidden md:table-cell">{item.userName}</td>
          <td className="hidden md:table-cell">{item.role}</td>
          <td className="hidden md:table-cell">{item.sex}</td>
          <td className="hidden md:table-cell">{item.birthday}</td>
          <td className="hidden md:table-cell">{item.bloodType}</td>
          <td className="hidden md:table-cell">{item.registrationDate}</td>
          <td className="hidden md:table-cell">{item.phoneNumber}</td>
          <td className="hidden md:table-cell">{item.email}</td>
          <td className="hidden md:table-cell">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/users/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                  <Image src="/view.png" alt="" width={16} height={16} />
                </button>
              </Link>
               {role === "admin" && (
                 //<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                   //<Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="user" type="delete" id={item.id}/>
              )} 
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
                        {role === "admin" && (
                        // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-firelightorange">
                        //     <Image src="/plus.png" alt="" width={14} height={14}/>
                        // </button>
                        <FormModal table="user" type="create" />
                        )}
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
