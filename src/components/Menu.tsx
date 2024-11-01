import { role } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Anasayfa",
        href: "/",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      {
        icon: "/user.png",
        label: "Kullanıcılar",
        href: "/list/users",
        visible: ["admin","provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      // {
      //   icon: "/user.png",
      //   label: "Müşteriler",
      //   href: "/list/users",
      //   visible: ["admin","provider", "lowprovider"],
      // },
      // {
      //   icon: "/user.png",
      //   label: "Servis Sağlayıcılar",
      //   href: "/list/users",
      //   visible: ["admin","customer", "lowcustomer", "parent"],
      // },
      
      {
        icon: "/fire-extinguisher.png",
        label: "Cihazlar",
        href: "/list/devices",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      {
        icon: "/offer.png",
        label: "Teklifler",
        href: "/list/offers",
        visible: ["admin", "provider", "parent","customer"],
      },
      {
        icon: "/maintenance.png",
        label: "Bakımlar",
        href: "/list/maintenances",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      {
        icon: "/calendar.png",
        label: "Randevular",
        href: "/list/events",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      {
        icon: "/announcement.png",
        label: "Bildirimler",
        href: "/list/notifications",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      {
        icon: "/report.png",
        label: "Raporlama",
        href: "/list/classes",
        visible: ["admin", "provider", "customer", "parent", "lowcustomer", "lowprovider"],
      },
      

      
      
      {
        icon: "/assignment.png",
        label: "Randevu ve Planlama",
        href: "/list/assignments",
        visible: ["provider"],
      },
      
      // {
      //   icon: "/result.png",
      //   label: "Results",
      //   href: "/list/results",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/attendance.png",
      //   label: "Attendance",
      //   href: "/list/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/calendar.png",
      //   label: "Events",
      //   href: "/list/events",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/message.png",
      //   label: "Messages",
      //   href: "/list/messages",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/announcement.png",
      //   label: "Announcements",
      //   href: "/list/announcements",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
    ],
  },
  {
    title: "DİĞER",
    items: [
      {
        icon: "/profile.png",
        label: "Profil",
        href: "/profile",
        visible: ["admin", "provider", "customer", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Ayarlar",
        href: "/settings",
        visible: ["admin", "provider", "customer", "parent"],
      },
      {
        icon: "/support.png",
        label: "Geri Bildirim ve Destek",
        href: "/settings",
        visible: ["admin", "provider", "customer", "parent"],
      },
      {
        icon: "/log.png",
        label: "Loglar",
        href: "/settings",
        visible: ["admin"],
      },
      {
        icon: "/logout.png",
        label: "Çıkış",
        href: "/logout",
        visible: ["admin", "provider", "customer", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;

