import {    PrismaClient, 
    UserSex, 
    UserBloodType, 
    DeviceStatus, 
    OfferStatus, 
    NotificationStatus 
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

// ROLES
const rolesData = [
    { name: "Admin" },
    { name: "Servis Sağlayıcı-I" },
    { name: "Servis Sağlayıcı-II" },
    { name: "Müşteri-I" },
    { name: "Müşteri-II" },

];

for (const role of rolesData) {
    await prisma.roles.create({ data: role });
}

// DEVICETPES
const deviceTypesData = [
    { name: "Yangın Tüpü" },
    { name: "Yangın Dolabı" },
    { name: "Sprinkler" },
    { name: "Yangın Kapısı" },
    { name: "Yangın Alarm Sistemi" },
    { name: "Yangın İhbar Butonu" },
    { name: "Acil Çıkış Tabelası" },
    { name: "Acil Aydınlatma Sistemi" },
    { name: "Duman Dedektörü" },

];

for (const deviceType of deviceTypesData) {
    await prisma.deviceTypes.create({ data: deviceType });
}

// DEVICEFEATURES
const deviceFeaturesData = [
    { name: "KKT" },
    { name: "CO2" },
    { name: "Otomatik" },
    { name: "Hortumlu" },
    { name: "XXX" },
    { name: "YYY" },
    { name: "ZZZ" },
    { name: "AAA" },
    { name: "Alarmlı" },

];

for (const deviceFeature of deviceFeaturesData) {
    await prisma.deviceFeatures.create({ data: deviceFeature });
}


// OPERATIONS
const operationsData = [
    { name: "Rutin Bakım" },
    { name: "Arıza" },
    { name: "Eğitim" },
    { name: "Kontrol" },


];

for (const operation of operationsData) {
    await prisma.operations.create({ data: operation });
}

// SERVICES
const servicesData = [
    { name: "Bakım" },
    { name: "Onarım" },
    { name: "Ürün Satışı" },
    { name: "Eğitim" },
    { name: "Danışmanlık" },


];

for (const service of servicesData) {
    await prisma.services.create({ data: service });
}


// PAYMENTTYPES
const paymentTypesData = [
    { name: "Peşin" },
    { name: "Çek" },
    { name: "3 Taksit" },
    { name: "6 Taksit" },
    { name: "9 Taksit" },
    { name: "12 Taksit" },


];

for (const paymentType of paymentTypesData) {
    await prisma.paymentTermTypes.create({ data: paymentType });
}

// NOTIFICATIONTYPES
const notificationTypesData = [
    { name: "Uyarı" },
    { name: "Hatırlatma" },
    { name: "Bildirim" },
    


];

for (const notificationType of notificationTypesData) {
    await prisma.notificationTypes.create({ data: notificationType });
}


// ACTIONS
const actionsData = [
    { name: "Ekle" },
    { name: "Sil" },
    { name: "Düzenle" },
    { name: "Giriş" },
    { name: "Çıkış" },
    


];

for (const action of actionsData) {
    await prisma.actions.create({ data: action });
}


// TABLES
const tablesData = [
    { name: "Users" },
    { name: "Customers" },
    { name: "Providers" },
    { name: "AInstitutions" },
    { name: "CInstitutions" },
    { name: "PInstitutions" },
    { name: "Roles" },
    { name: "Devices" },
    { name: "IsgMembers" },
    { name: "DeviceTypes" },
    { name: "DeviceFeatures" },
    { name: "MaintenanceCards" },
    { name: "Operations" },
    { name: "Services" },
    { name: "OfferCards" },
    { name: "PaymentTermTypes" },
    { name: "PNotifications" },
    { name: "CNotifications" },
    { name: "NotificationTypes" },
    { name: "Appointments" },
    { name: "ALogs" },
    { name: "CLogs" },
    { name: "PLogs" },
    { name: "Actions" },
    { name: "Tables" },
    { name: "AAnnouncements" },
    { name: "CAnnouncements" },
    { name: "PAnnouncements" },
    { name: "Teams" },
    { name: "CTeamsMemebers" },
    { name: "PTeamsMemebers" },
];

for (const table of tablesData) {
    await prisma.tables.create({ data: table });
}


// TEAMS
const teamsData = [
    { name: "Yangın Söndürme Ekibi" },
    { name: "Acil Durum Yönetim Ekibi" },
    { name: "İlk Yardım Ekibi" },
    { name: "Tahliye Ekibi" },
    { name: "Güvenlik Ekibi" },
    { name: "Teknik Bakım Ekibi" },
    { name: "İletişim ve Koordinasyon Ekibi" },
    { name: "Psikolojik Destek Ekibi" },
    { name: "Hukuk Ekibi" },
    


];

for (const team of teamsData) {
    await prisma.teams.create({ data: team });
}


// ADMIN INSTITUTIONS
for (let i = 1; i <= 25; i++) {
    await prisma.aInstitutions.create({
    data: {
        name: `AIName${i}`,
        address: `Address${i}`,
        email: `instadmin${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
    },
    });
}

// Customer INSTITUTIONS
 for (let i = 1; i <= 25; i++) {
    await prisma.cInstitutions.create({
    data: {
        name: `CIName${i}`,
        address: `Address${i}`,
        email: `inscustomer${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
    },
    });
}


// Provider INSTITUTIONS
for (let i = 1; i <= 25; i++) {
    await prisma.pInstitutions.create({
    data: {
        name: `PIName${i}`,
        address: `Address${i}`,
        email: `insprovider${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
    },
    });
}    


// USERS
for (let i = 1; i <= 50; i++) {
    await prisma.users.create({
    data: {
        userName: `user${i}`,
        password: `userId${i}`,
        firstName: `UName ${i}`,
        lastName: `USurname ${i}`,
        bloodType: 
        UserBloodType[
            Object.keys(UserBloodType)[
              Math.floor(Math.random() * Object.keys(UserBloodType).length)
            ] as keyof typeof UserBloodType
          ],
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        sex: i % 2 === 0 ? UserSex.Erkek : UserSex.Kadin,
        email: `user${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        institutionId: (i % 25) + 1,
        roleId: 1,
    },
    });
}


// Customers
for (let i = 1; i <= 50; i++) {
    await prisma.customers.create({
    data: {
        userName: `customer${i}`,
        password: `userId${i}`,
        firstName: `CName ${i}`,
        lastName: `CSurname ${i}`,
        bloodType: 
        UserBloodType[
            Object.keys(UserBloodType)[
            Math.floor(Math.random() * Object.keys(UserBloodType).length)
            ] as keyof typeof UserBloodType
        ],
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        sex: i % 2 === 0 ? UserSex.Erkek : UserSex.Kadin,
        email: `customer${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        institutionId: (i % 25) + 1,
        roleId: (i % 2) + 4
    },
    });
}

// Providers
for (let i = 1; i <= 50; i++) {
    await prisma.providers.create({
    data: {
        userName: `provider${i}`,
        password: `userId${i}`,
        firstName: `PName ${i}`,
        lastName: `PSurname ${i}`,
        bloodType: 
        UserBloodType[
            Object.keys(UserBloodType)[
            Math.floor(Math.random() * Object.keys(UserBloodType).length)
            ] as keyof typeof UserBloodType
        ],
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        sex: i % 2 === 0 ? UserSex.Erkek : UserSex.Kadin,
        email: `provider${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        institutionId: (i % 25) + 1,
        roleId: (i % 2) + 2,
    },
    });
}

// ISG Members
for (let i = 1; i <= 25; i++) {
    await prisma.isgMembers.create({
    data: {
        isgNumber: (i % 25) + 1,
        name: `ISGMember${i}`,
        contractDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        institutionId: (i % 25) + 1,

    },
    });
}


// DEVICES
for (let i = 1; i <= 50; i++) {
    await prisma.devices.create({
    data: {
        serialNumber: `123-456-789${i}`,
        qrcode: `123-456-789${i}`,
        productionDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        lastControlDate: new Date(new Date().setHours(new Date().getHours() + 3)),
        expirationDate: new Date(new Date().setHours(new Date().getHours() + 5)),
        location: `Kat ${i}`, 
        //photo: "photo.png",
        currentStatus: i % 2 === 0 ? DeviceStatus.Aktif : DeviceStatus.Pasif,
        typeId: (i % 9) + 1,
        featureId: (i % 9) + 1,
        ownerId: (i % 50) + 1,
        institutionId: (i % 25) + 1,
        providerId: (i % 50) + 1,
        pinstitutionId: (i % 25) + 1,
        isgMemberId: (i % 25) + 1,
        details: `Güvenlik Önlemi Detayı ${i}`,
    },
    });
}


 

// MAINTENENCECARDS
for (let i = 1; i <= 50; i++) {
    await prisma.maintenanceCards.create({
    data: {
        maintenanceDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        nextMaintenanceDate: new Date(new Date().setHours(new Date().getHours() + 10)),
        typeId: (i % 5) + 1, 
        deviceId: (i % 50) + 1, 
        providerId: (i % 50) + 1,
        providerInstId: (i % 25) + 1, 
        customerId: (i % 50) + 1,
        customerInstId: (i % 25) + 1,
        details: `Bakım Detayı ${i}`,
    },
    });
}



// OFFERCARDS
for (let i = 1; i <= 50; i++) {
    await prisma.offerCards.create({
    data: {
        offerDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        validityDate: new Date(new Date().setHours(new Date().getHours() + 10)),
        unitPrice: (i % 250) + 1,
        size: (i % 250) + 1,
        amount: (i % 250000) + 1,
        paymentTermId: (i % 6) + 1, 
        servicesId: (i % 5) + 1, 
        status: i % 2 === 0 ? OfferStatus.Onaylandi : OfferStatus.Beklemede,
        creatorId: (i % 50) + 1,
        creatorInstId: (i % 25) + 1,
        recipientId: (i % 50) + 1,
        recipientInstId: (i % 25) + 1,
        details: `Teklif Detayı ${i}`,
    },
    });
}



// PNOTIFICATIONS
for (let i = 1; i <= 100; i++) {
    await prisma.pNotifications.create({
    data: {
        content: `Bildirim İçeriği ${i}`,
        creatorId: (i % 50) + 1,
        recipientId: (i % 50) + 1,
        recipientInstId: (i % 25) + 1,
        
        notificationDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        isRead: i % 2 === 0 ? NotificationStatus.Okundu : NotificationStatus.Okunmadi,
        typeId: (i % 3) + 1,
    },
    });
}



// CNOTIFICATIONS
for (let i = 1; i <= 100; i++) {
    await prisma.cNotifications.create({
    data: {
        content: `Bildirim İçeriği ${i}`,
        creatorId: (i % 50) + 1,
        recipientId: (i % 50) + 1,
        recipientInstId: (i % 25) + 1,
        
        notificationDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        isRead: i % 2 === 0 ? NotificationStatus.Okundu : NotificationStatus.Okunmadi,
        typeId: (i % 3) + 1,
    },
    });
}


// APPOINTMENTS
for (let i = 1; i <= 100; i++) {
    await prisma.appointments.create({
    data: {
        tittle: `Randevu Başlığı ${i}`,
        content: `Randevu İçeriği ${i}`,
        start: new Date(new Date().setHours(new Date().getHours() + 5)),
        end: new Date(new Date().setHours(new Date().getHours() + 10)),
        create: new Date(new Date().setHours(new Date().getHours() + 1)),
        creatorId: (i % 50) + 1,
        creatorInstId: (i % 25) + 1,
        recipientId: (i % 50) + 1,
        recipientInstId: (i % 25) + 1,

    },
    });
}

// ALOGS
for (let i = 1; i <= 100; i++) {
    await prisma.aLogs.create({
    data: {
        date: new Date(new Date().setHours(new Date().getHours() + 5)),
        userId: (i % 50) + 1,
        actionId: (i % 5) + 1,
        tableId: (i % 30) + 1,
        IP: `192.168.1.12${i}`,
    
    },
    });
}


// CLOGS
  for (let i = 1; i <= 100; i++) {
        await prisma.cLogs.create({
        data: {
            date: new Date(new Date().setHours(new Date().getHours() + 5)),
            userId: (i % 50) + 1,
            actionId: (i % 5) + 1,
            tableId: (i % 30) + 1,
            IP: `192.168.1.12${i}`,
        
        },
        });
    }

// PLOGS
  for (let i = 1; i <= 100; i++) {
        await prisma.pLogs.create({
        data: {
            date: new Date(new Date().setHours(new Date().getHours() + 5)),
            userId: (i % 50) + 1,
            actionId: (i % 5) + 1,
            tableId: (i % 30) + 1,
            IP: `192.168.1.12${i}`,
        
        },
        });
    }





// AANNOUNCEMENTS
for (let i = 1; i <= 50; i++) {
    await prisma.aAnnouncements.create({
    data: {
        title: `Duyuru Başlığı ${i}`,
        description: `Duyuru İçeriği ${i}`,
        date: new Date(new Date().setHours(new Date().getHours() + 5)),
        creatorInstId: (i % 25) + 1,    
        institutionId: (i % 25) + 1,         
    },
    });
}

// CANNOUNCEMENTS
    for (let i = 1; i <= 50; i++) {
        await prisma.cAnnouncements.create({
        data: {
            title: `Duyuru Başlığı ${i}`,
            description: `Duyuru İçeriği ${i}`,
            date: new Date(new Date().setHours(new Date().getHours() + 5)),
            creatorInstId: (i % 25) + 1,    
            institutionId: (i % 25) + 1,         
        },
        });
    }

// PANNOUNCEMENTS
    for (let i = 1; i <= 50; i++) {
        await prisma.pAnnouncements.create({
        data: {
            title: `Duyuru Başlığı ${i}`,
            description: `Duyuru İçeriği ${i}`,
            date: new Date(new Date().setHours(new Date().getHours() + 5)),
            creatorInstId: (i % 25) + 1,    
            institutionId: (i % 25) + 1,         
        },
        });
    }



// CTEAMSMEMBERS
for (let i = 1; i <= 50; i++) {
    await prisma.cTeamsMemebers.create({
    data: {
        firstName: `Ekip Üyesi Adı ${i}`,
        lastName: `USurname ${i}`,
        bloodType: 
        UserBloodType[
            Object.keys(UserBloodType)[
              Math.floor(Math.random() * Object.keys(UserBloodType).length)
            ] as keyof typeof UserBloodType
          ],
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        sex: i % 2 === 0 ? UserSex.Erkek : UserSex.Kadin,
        email: `user${i}@example.com`,
        phone: `123-456-789${i}`,
        registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        institutionId: (i % 25) + 1,
    },
    });

}


// PTEAMSMEMBERS
for (let i = 1; i <= 50; i++) {
await prisma.pTeamsMemebers.create({
data: {
    firstName: `Ekip Üyesi Adı ${i}`,
    lastName: `USurname ${i}`,
    bloodType: 
    UserBloodType[
        Object.keys(UserBloodType)[
          Math.floor(Math.random() * Object.keys(UserBloodType).length)
        ] as keyof typeof UserBloodType
      ],
    birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
    sex: i % 2 === 0 ? UserSex.Erkek : UserSex.Kadin,
    email: `user${i}@example.com`,
    phone: `123-456-789${i}`,
    registrationDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
    institutionId: (i % 25) + 1,
},
});

}

console.log("Seeding completed successfully.");
}





main()
.then(async () => {
await prisma.$disconnect();
})
.catch(async (e) => {
console.error(e);
await prisma.$disconnect();
process.exit(1);
});