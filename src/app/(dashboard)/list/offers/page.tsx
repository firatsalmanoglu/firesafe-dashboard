import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, offersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import {  PaymentTermTypes,
          Services,
          Users,
          Institutions,
          OfferCards, 
          Prisma 
        } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";


type OfferList = OfferCards & 
                { paymentTerm: PaymentTermTypes } & 
                { service: Services } & 
                { creator: Users } & 
                { creatorIns: Institutions } & 
                { recipient: Users } &
                { recipientIns: Institutions }

const columns =[
    {
        header:"Teklif ID", 
        accessor:"id",
        className: "hidden md:table-cell",
    },
    {
        header:"Teklif Veren", 
        accessor:"info",
    },
   
    {
        header:"Teklif Tarihi", 
        accessor:"offerDate",
        className: "hidden md:table-cell",
    },
    {
      header:"Müşteri", 
      accessor:"info",
      className: "hidden md:table-cell"
    },
    // {
    //     header:"Geçerlilik Tarihi", 
    //     accessor:"expiryDate",
    //     className: "hidden md:table-cell",
    // },
    // {
    //   header:"Teklif İçeriği", 
    //   accessor:"servicesOffered",
    //   className: "hidden md:table-cell",
    // },
    {
        header:"Teklif Tutarı", 
        accessor:"amount",
        className: "hidden md:table-cell",
    },
    
    {
        header:"Durumu", 
        accessor:"status",
        className: "hidden md:table-cell",
    },

    {
      header:"Eylemler", 
      accessor:"action",
      className: "hidden md:table-cell",
    },
    
];

const renderRow = (item: OfferList) => (
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
        <h3 className="font-semibold">{item.creatorIns.name}</h3>
        <p className="text-xs text-gray-500">{item.creator.firstName + " " + item.creator.lastName}</p>
      </div>
    </td>

    <td className="hidden md:table-cell">{item.offerDate.toLocaleDateString()}</td>
    <td className="flex items-center gap-4 p-4">
      {/* <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      /> */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.recipientIns.name}</h3>
        <p className="text-xs text-gray-500">{item.recipient.firstName+ " " + item.recipient.lastName}</p>

      </div>
    </td>
    {/* <td className="hidden md:table-cell">{item.expiryDate}</td> */}
    {/* <td className="hidden md:table-cell">{item.servicesOffered}</td> */}
    <td className="hidden md:table-cell">
        {Number(item.amount).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="hidden md:table-cell">{item.status}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/offers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image src="/view.png" alt="" width={24} height={24} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <FormModal table="offer" type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);

const OfferListPage = async ({
  searchParams,
}: {
  searchParams: { [key:string] : string | undefined };
}) => {
  const {page, ...queryParams} = searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION
 
  const query: Prisma.OfferCardsWhereInput = {}; // Prisma için boş bir query nesnesi oluşturuluyor.

    if (queryParams) {
      for (const [key, value] of Object.entries(queryParams)) {
        if (value !== undefined) {
          switch (key) {
            case "recipientId":
              const recipientId = parseInt(value); // value'yu tam sayıya çeviriyoruz.
              if (!isNaN(recipientId)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                query.recipientId = recipientId; 
              }
              break;
              case "creatorId":
                const creatorId = parseInt(value); // value'yu tam sayıya çeviriyoruz.
                if (!isNaN(creatorId)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                  // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                  query.creatorId = creatorId; 
                }
                break;

              case "recipientInstId":
                const recipientInstId = parseInt(value); // value'yu tam sayıya çeviriyoruz.
                if (!isNaN(recipientInstId)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                  // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                  query.recipientInsId = recipientInstId; 
                }
                break;

              case "creatorInstId":
                const creatorInstId = parseInt(value); // value'yu tam sayıya çeviriyoruz.
                if (!isNaN(creatorInstId)) { // geçerli bir sayı olup olmadığını kontrol ediyoruz.
                  // Users tablosundaki roleId'ye göre filtreleme yapıyoruz.
                  query.creatorInsId = creatorInstId; 
                }
                break;
            // Diğer case'ler eklenebilir. Örneğin, daha fazla filtrasyon yapılmak istenirse.
            case "search":
              query.details = {contains:value, mode: "insensitive"}
              break;
          }
        }
      }
    }

  const [data,count] = await prisma.$transaction([

    prisma.offerCards.findMany ({
      where:query,

      include: {
        paymentTerm:true,
        service: true,
        creator: true,
        creatorIns: true,
        recipient: true,
        recipientIns: true,
      },

      take:ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p-1),
    }),
    prisma.offerCards.count()
  ]);


    

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex item-center justify-between'>
                <h1 className="hidden md:block text-lg font-semibold">Tüm Teklifler</h1>
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
                        <FormModal table="offer" type="create" />
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

export default OfferListPage
