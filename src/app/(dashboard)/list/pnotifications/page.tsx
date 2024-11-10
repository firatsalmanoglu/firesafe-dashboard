import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, notificationsData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import {  PInstitutions, 
          PNotifications, 
          Providers, 
          NotificationTypes, 
          Prisma,
          Users } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";


type PNotificationList = PNotifications & 
                        {creator: Users} & 
                        {recipient: Providers} & 
                        {recipientInst: PInstitutions} & 
                        {type: NotificationTypes}  ;

const columns =[
    {
        header:"Bildirim ID", 
        accessor:"id",
        className: "hidden md:table-cell"
    },
    

    {
        header:"Oluşturan Kullanıcı", 
        accessor:"info",
    },

    {
        header:"Bildirim Tarihi", 
        accessor:"notificationDate",
        className: "hidden md:table-cell",
    },

    {
        header:"İlgili Kullanıcı", 
        accessor:"info1",
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

const renderRow = (item: PNotificationList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="hidden md:table-cell">{item.id}</td>
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.creator.firstName}</h3>
        <h3 className="font-semibold">{item.creator.lastName}</h3>
        <p className="text-xs text-gray-500">{item.creator.id}</p>
      </div>
    </td>

    <td className="hidden md:table-cell">{item.notificationDate.toLocaleDateString()}</td>


    <td className="flex items-center gap-4 p-4">
      {/* <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      /> */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.recipient.firstName}</h3>
        <h3 className="font-semibold">{item.recipient.lastName}</h3>
        <p className="text-xs text-gray-500">{item.recipientInst.name}</p>
      </div>
    </td>
    {/* <td className="hidden md:table-cell">{item.deviceSerialNumber}</td>  */}
    {/* <td className="hidden md:table-cell">{item.deviceOwner}</td> */}
    {/* <td className="hidden md:table-cell">{item.message}</td> */}
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

const PNotificationListPage = async ({
  searchParams,
}: {
  searchParams: { [key:string] : string | undefined };
}) => {
  const {page, ...queryParams} = searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION
 
  const query: Prisma.PNotificationsWhereInput = {}; // Prisma için boş bir query nesnesi oluşturuluyor.

    if (queryParams) {
      for (const [key, value] of Object.entries(queryParams)) {
        if (value !== undefined) {
          switch (key) {
            case "id":
              const id = parseInt(value); // value'yu tam sayıya çeviriyoruz.
              if (!isNaN(id)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                query.id = id; 
              }
              break;
            // Diğer case'ler eklenebilir. Örneğin, daha fazla filtrasyon yapılmak istenirse.
            case "search":
              query.content = {contains:value, mode: "insensitive"}
              break;
          }
        }
      }
    }

  const [data,count] = await prisma.$transaction([

    prisma.pNotifications.findMany ({
      where:query,

      include: {
        creator:true,
        recipient: true,
        recipientInst: true,
        type: true
        
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
                <h1 className="hidden md:block text-lg font-semibold">Tüm Hizmet Sağlayıcı Bildirimleri</h1>
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
                <Table columns={columns} renderRow={renderRow} data={data}/>
            </div>

            {/* PAGINATION */}
                <Pagination page={p} count={count} />
        </div>
    )
}

export default PNotificationListPage
