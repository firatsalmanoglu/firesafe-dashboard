import Image from "next/image";
import prisma from "@/lib/prisma";


const UserCard = async ({
  type,
}: {

  type: "teklifler" | "bakimlar" | "cihazlar" | "randevular" |"cihazlarim" | "bakimiyaklasan" | "tekliflerim" | "bakimlarim";
}) => {
   const modelMap: Record <typeof type, any> = {
     teklifler: prisma.offerCards,
     bakimlar: prisma.maintenanceCards,
     cihazlar: prisma.devices,
     randevular: prisma.appointments,
     cihazlarim: prisma.devices,
     bakimiyaklasan:prisma.devices,
     tekliflerim:prisma.offerCards,
     bakimlarim:prisma.maintenanceCards,

   };
   const data = await modelMap[type].count();

   


  return (
    <div className="rounded-2xl odd:bg-lamaSky even:bg-lamaPurple p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="capitalize text-sm font-medium text-whitetext">{type}</h2>
    </div>
  );
};

export default UserCard;