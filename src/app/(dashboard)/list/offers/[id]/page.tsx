import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
//import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleOfferPage = () => {
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
                src="/offerc.png"
                alt=""
                width={144}
                height={144}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Teklif Kartı</h1>
                {role === "admin" && <FormModal
                  table="offer"
                  type="update"
                  data={{
                    id: 1,
                    offerId: "101",
                    providerId: "001",
                    providerName: "Ahmet Mehmet",
                    providerOrganization:"XXX Yangın Ltd.",
                    phone: "+90 232 366 66 66",
                    email: "xxx@gmail.com",
                    address: "Çiğli/İzmir",
                    ownerId: "138",
                    ownerName: "HAtice Bilmemne",
                    ownerOrganization: "ZZZ Gıda Tekn. Ltd.",
                    ownerAddress: "Kemalpaşa/İzmir",
                    ownerPhone: "+90 532 888 88 88",
                    ownerEmail: "zzz@gmail.com",
                    projectLocation: "Kemalpaşa/İzmir",
                    projectSize: "2",
                    offerDate: "12/12/2023",
                    expiryDate: "25/10/2025",
                    unitPrice: "63.450,00",
                    amount: "126.900,00",
                    paymentTerms:["Teslimatta Peşin", "Vadeli"],
                    servicesOffered: ["Değişim", "Bakım"],
                    status: "OK",
                    offerDetails: "8 adet kuru kimyevi yangın tüpü değişimi anahtar teslim fiyat teklifidir.",
                  }}
                />}
              </div>
              <p className="text-sm text-gray-500">
                8 adet kuru kimyevi yangın tüpü değişimi anahtar teslim fiyat teklifidir...
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  {/* <Image src="/blood.png" alt="" width={14} height={14} /> */}
                  <span>Teklif No: 0078</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  {/* <Image src="/blood.png" alt="" width={14} height={14} /> */}
                  <span>Teklif Tarihi: 24/10/2024</span>
                </div>
                
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/person.png" alt="" width={14} height={14} />
                  <span>Ayşe Akçabat</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/insititution.png" alt="" width={14} height={14} />
                  <span>Master Yangın Hizmetleri A.Ş.</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span> +90 222 3655 89 47</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>xxxx@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/address.png" alt="" width={14} height={14} />
                  <span> Bornova İzmir</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[100%]">
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4"> */}

              <Image
                src="/smc-customer.png"
                alt=""
                width={24}
                height={24}
                className="w-10 h-12"
              />
              <div className="">
                <h1 className="text-md font-semibold">Müşteri</h1>
                <span className="text-sm text-gray-400">Ahmet Gökdemir</span><br></br>
                <span className="text-sm text-gray-400">Uzay Mühendislik A.Ş.</span>

              </div>
            </div>
            {/* CARD */}
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Teklif İletilen Firma</h1>
                <span className="text-sm text-gray-400">Uzay Mühendislik A.Ş.</span>
              </div>
            </div> */}
            {/* CARD */}
            {/* <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"> */}
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4">

              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-md font-semibold">Teklif Tarihi</h1>
                <span className="text-sm text-gray-400">10/12/2024</span>
              </div>
            </div> */}
            {/* CARD */}
            <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[100%]">
            {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4"> */}

              <Image
                src="/smc-calendar.png"
                alt=""
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <div className="">
                <h1 className="text-md font-semibold">Geçerlilik Tarihi</h1>
                <span className="text-sm text-gray-400">10/06/2024</span>
              </div>
            </div>

             {/* CARD */}
             <div className="bg-lamaSkyLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[100%]">
             {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4"> */}

              <Image
                src="/smc-price.png"
                alt=""
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <div className="">
                <h1 className="text-md font-semibold">Tutar</h1>
                <span className="text-sm text-gray-400">98.253,00.-TL</span>
              </div>
            </div>

             {/* CARD */}
             <div className="bg-lamaPurpleLight p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[100%]">
             {/* <div className="bg-lamaPurpleLight p-4 rounded-md w-full xl:w-2/5 flex flex-col gap-4"> */}

              <Image
                src="/smc-status.png"
                alt=""
                width={24}
                height={24}
                className="w-10 h-10"
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

export default SingleOfferPage;