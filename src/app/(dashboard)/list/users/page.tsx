import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, usersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Devices, Institutions, Prisma, Roles, Users } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import {ITEM_PER_PAGE} from "@/lib/settings"

type UserList = Users & { institution: Institutions } & { role: Roles } & { devices: Devices[] };


const columns =[
    {
        header:"Kullanıcı ID", 
        accessor:"id",
        className: "hidden md:table-cell"
    },
    {
        header:"Bilgi", 
        accessor:"info",
    },
   
    {
        header:"Rolü", 
        accessor:"roleId",
        className: "hidden md:table-cell",
    },
    
     {
       header:"Üyelik Tarihi", 
       accessor:"registrationDate",
       className: "hidden md:table-cell",
     },
    {
        header:"Tel No", 
        accessor:"phone",
        className: "hidden md:table-cell",
    },
    {
      header:"E-mail", 
      accessor:"email",
      className: "hidden md:table-cell",
    },
   
    {
      header:"Eylemler", 
      accessor:"action",
      className: "hidden md:table-cell",
  },
];



const renderRow = (item: UserList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="hidden md:table-cell">{item.id}</td>
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.photo || "/noAvatar.png"}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.firstName}</h3>
        <h3 className="font-semibold">{item.lastName}</h3>
        <p className="text-xs text-gray-500">{item.institution.name}</p>
      </div>
    </td>
    {/* <td className="hidden md:table-cell">{item.userName}</td> */}
    <td className="hidden md:table-cell">{item.role.name}</td>
    {/* <td className="hidden md:table-cell">{item.sex}</td> */}
    {/* <td className="hidden md:table-cell">{item.birthday}</td> */}
    {/* <td className="hidden md:table-cell">{item.bloodType}</td> */}
    {/* <td className="hidden md:table-cell">{item.registrationDate}</td> */}

    <td className="hidden md:table-cell">
        {item.registrationDate.toLocaleDateString()}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.email}</td>
    {/* <td className="hidden md:table-cell">{item.address}</td> */}
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/users/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image src="/view.png" alt="" width={24} height={24} />
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

const UserListPage = async ({
  searchParams,
}: {
  searchParams: { [key:string] : string | undefined };
}) => {
  const {page, ...queryParams} = searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION
 
  const query: Prisma.UsersWhereInput = {}; // Prisma için boş bir query nesnesi oluşturuluyor.

    if (queryParams) {
      for (const [key, value] of Object.entries(queryParams)) {
        if (value !== undefined) {
          switch (key) {
            case "roleId":
              const roleId = parseInt(value); // value'yu tam sayıya çeviriyoruz.
              if (!isNaN(roleId)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                query.roleId = roleId; 
              }
              break;
            // Diğer case'ler eklenebilir. Örneğin, daha fazla filtrasyon yapılmak istenirse.
            case "search":
              query.firstName = {contains:value, mode: "insensitive"}
              break;
          }
        }
      }
    }

  const [data,count] = await prisma.$transaction([

    prisma.users.findMany ({
      where:query,

      include: {
        institution:true,
        role: true,
      },

      take:ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p-1),
    }),
    prisma.users.count()
  ]);

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Kullanıcılar</h1>
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
                        <FormModal table="user" type="create" />
                        )}
                    </div>
                </div>
            </div>

            {/* LIST */}
            <div className=''>
                <Table columns={columns} renderRow={renderRow} data={data}/>
            </div>

            {/* PAGINATION */}
            <Pagination page={p} count={count} />
        </div>
    )
}

export default UserListPage
