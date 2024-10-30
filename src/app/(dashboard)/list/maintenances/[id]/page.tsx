import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
//import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleMaintenancePage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/fireExt.png"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Bakım No: 0078</h1>
                {role === "admin" && <FormModal
                  table="maintenance"
                  type="update"
                  data={{
                    id: 1,
                    recordID: "005",
                    deviceSerialNumber: "125487",
                    performedById: "196587",
                    performedByName: "Ayhan Uğur",
                    instPerformed:"KSKS Yangın Güvenlik Ltd.",
                    customerId: "5858475",
                    customerName:"Ali Abalı",
                    instServed: "AAA Tarım Sanayi A.Ş.",
                    maintenanceDate: "13/07/2023",
                    maintenanceType: "Bakım",
                    details: "Basınçlar kontrol edildi",
                    nexyMaintenanceDate: "13/07/2024",
                    status: "OK",
                  }}
                />}
              </div>
              <p className="text-sm text-gray-500">
                Basınç kontrol edildiı vs....
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>965684878</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>Mehmet Söylemez</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>Yangın Tüpü</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span> CO<sub>2</sub></span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>XXXX Hospital</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span> Bornova İzmir</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            {/* <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Bakımı Yapan Personel</h1>
                <span className="text-sm text-gray-400">Ahmet Aydemir</span>
              </div>
            </div>
            {/* CARD */}
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Bakım Yapan Firma</h1>
                <span className="text-sm text-gray-400">10/12/2023</span>
              </div>
            </div>
            {/* CARD */}
            {/* <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Bakım Tarihi</h1>
                <span className="text-sm text-gray-400">10/12/2024</span>
              </div>
            </div>
            {/* CARD */}
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Sonraki Bakım Tarihi</h1>
                <span className="text-sm text-gray-400">10/06/2024</span>
              </div>
            </div>

             {/* CARD */}
             {/* <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
             <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Bakım Türü</h1>
                <span className="text-sm text-gray-400">Rutin Bakım</span>
              </div>
            </div>

             {/* CARD */}
             {/* <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
             <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Durumu</h1>
                <span className="text-sm text-gray-400">Aktif</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        {/* <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Cihaz Bakım Takvimi</h1>
          <BigCalendar />
        </div> */}
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Bakım Listesi</h1>
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                expedita. Rerum, quidem facilis?
              </p>
            </div>

            <div className="bg-lamaPurpleLight rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                expedita. Rerum, quidem facilis?
              </p>
            </div>

            <div className="bg-lamaSkyLight rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                expedita. Rerum, quidem facilis?
              </p>
            </div>

          </div>
        {/* <div className="bg-white p-4 rounded-md"> */}
          {/* <h1 className="text-xl font-semibold">Kısayollar</h1> */}
          {/* <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500"> */}
            {/* <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
            Cihaz&apos;ın Bakım Geçmişi
            </Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
              Cihazla İlgili Bildirimler
            </Link> */}
            {/* <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
            Kullanıcı&apos;nın Cihazları
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
            Kullanıcı&apos;nın Bildirimleri
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Hizmet Sağlayıcılarım / Müşterilerim
            </Link> */}
          {/* </div> */}
        {/* </div> */}
        {/* <Performance /> */}
        {/* <Announcements /> */}
      </div>
    </div>
  );
};

export default SingleMaintenancePage;