-- CreateEnum
CREATE TYPE "UserSex" AS ENUM ('Erkek', 'Kadin', 'Diger');

-- CreateEnum
CREATE TYPE "UserBloodType" AS ENUM ('ARhP', 'ARhN', 'BRhP', 'BRhN', 'ABRhP', 'ABRhN', 'ORhP', 'ORhN');

-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('Aktif', 'Pasif');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('Onaylandi', 'Red', 'Beklemede');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('Okundu', 'Okunmadi');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "UserBloodType" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" "UserSex" NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "institutionId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "UserBloodType" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" "UserSex" NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "institutionId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Providers" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "UserBloodType" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" "UserSex" NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "institutionId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AInstitutions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AInstitutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CInstitutions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CInstitutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PInstitutions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PInstitutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devices" (
    "id" SERIAL NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "qrcode" TEXT NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "lastControlDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "photo" TEXT,
    "currentStatus" "DeviceStatus" NOT NULL,
    "typeId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "providerId" INTEGER NOT NULL,
    "pinstitutionId" INTEGER NOT NULL,
    "isgMemberId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IsgMembers" (
    "id" SERIAL NOT NULL,
    "isgNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "contractDate" TIMESTAMP(3) NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "IsgMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DeviceTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceFeatures" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DeviceFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceCards" (
    "id" SERIAL NOT NULL,
    "maintenanceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextMaintenanceDate" TIMESTAMP(3) NOT NULL,
    "typeId" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "providerId" INTEGER NOT NULL,
    "providerInstId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "customerInstId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "MaintenanceCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferCards" (
    "id" SERIAL NOT NULL,
    "offerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validityDate" TIMESTAMP(3) NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "size" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "paymentTermId" INTEGER NOT NULL,
    "servicesId" INTEGER NOT NULL,
    "status" "OfferStatus" NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "creatorInstId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "recipientInstId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "OfferCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentTermTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PaymentTermTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PNotifications" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "recipientInstId" INTEGER NOT NULL,
    "notificationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRead" "NotificationStatus" NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "PNotifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CNotifications" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "recipientInstId" INTEGER NOT NULL,
    "notificationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRead" "NotificationStatus" NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "CNotifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NotificationTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "tittle" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" INTEGER NOT NULL,
    "creatorInstId" INTEGER NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "recipientInstId" INTEGER NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ALogs" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "actionId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "IP" TEXT NOT NULL,

    CONSTRAINT "ALogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CLogs" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "actionId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "IP" TEXT NOT NULL,

    CONSTRAINT "CLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PLogs" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "actionId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "IP" TEXT NOT NULL,

    CONSTRAINT "PLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AAnnouncements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "creatorInstId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "AAnnouncements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CAnnouncements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "creatorInstId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "CAnnouncements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PAnnouncements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "creatorInstId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "PAnnouncements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CTeamsMemebers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "UserBloodType" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" "UserSex" NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "CTeamsMemebers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PTeamsMemebers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "UserBloodType" NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" "UserSex" NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "PTeamsMemebers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaintenanceCardsToOperations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CTeamsMemebersToTeams" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PTeamsMemebersToTeams" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_userName_key" ON "Customers"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Providers_userName_key" ON "Providers"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_serialNumber_key" ON "Devices"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_qrcode_key" ON "Devices"("qrcode");

-- CreateIndex
CREATE UNIQUE INDEX "_MaintenanceCardsToOperations_AB_unique" ON "_MaintenanceCardsToOperations"("A", "B");

-- CreateIndex
CREATE INDEX "_MaintenanceCardsToOperations_B_index" ON "_MaintenanceCardsToOperations"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CTeamsMemebersToTeams_AB_unique" ON "_CTeamsMemebersToTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_CTeamsMemebersToTeams_B_index" ON "_CTeamsMemebersToTeams"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PTeamsMemebersToTeams_AB_unique" ON "_PTeamsMemebersToTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_PTeamsMemebersToTeams_B_index" ON "_PTeamsMemebersToTeams"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "AInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Providers" ADD CONSTRAINT "Providers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Providers" ADD CONSTRAINT "Providers_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DeviceTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "DeviceFeatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_pinstitutionId_fkey" FOREIGN KEY ("pinstitutionId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_isgMemberId_fkey" FOREIGN KEY ("isgMemberId") REFERENCES "IsgMembers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IsgMembers" ADD CONSTRAINT "IsgMembers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_providerInstId_fkey" FOREIGN KEY ("providerInstId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_customerInstId_fkey" FOREIGN KEY ("customerInstId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_paymentTermId_fkey" FOREIGN KEY ("paymentTermId") REFERENCES "PaymentTermTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_creatorInstId_fkey" FOREIGN KEY ("creatorInstId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_recipientInstId_fkey" FOREIGN KEY ("recipientInstId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PNotifications" ADD CONSTRAINT "PNotifications_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PNotifications" ADD CONSTRAINT "PNotifications_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PNotifications" ADD CONSTRAINT "PNotifications_recipientInstId_fkey" FOREIGN KEY ("recipientInstId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PNotifications" ADD CONSTRAINT "PNotifications_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "NotificationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CNotifications" ADD CONSTRAINT "CNotifications_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CNotifications" ADD CONSTRAINT "CNotifications_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CNotifications" ADD CONSTRAINT "CNotifications_recipientInstId_fkey" FOREIGN KEY ("recipientInstId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CNotifications" ADD CONSTRAINT "CNotifications_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "NotificationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_creatorInstId_fkey" FOREIGN KEY ("creatorInstId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_recipientInstId_fkey" FOREIGN KEY ("recipientInstId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ALogs" ADD CONSTRAINT "ALogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ALogs" ADD CONSTRAINT "ALogs_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ALogs" ADD CONSTRAINT "ALogs_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CLogs" ADD CONSTRAINT "CLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CLogs" ADD CONSTRAINT "CLogs_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CLogs" ADD CONSTRAINT "CLogs_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLogs" ADD CONSTRAINT "PLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLogs" ADD CONSTRAINT "PLogs_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLogs" ADD CONSTRAINT "PLogs_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AAnnouncements" ADD CONSTRAINT "AAnnouncements_creatorInstId_fkey" FOREIGN KEY ("creatorInstId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AAnnouncements" ADD CONSTRAINT "AAnnouncements_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "AInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CAnnouncements" ADD CONSTRAINT "CAnnouncements_creatorInstId_fkey" FOREIGN KEY ("creatorInstId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CAnnouncements" ADD CONSTRAINT "CAnnouncements_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAnnouncements" ADD CONSTRAINT "PAnnouncements_creatorInstId_fkey" FOREIGN KEY ("creatorInstId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAnnouncements" ADD CONSTRAINT "PAnnouncements_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CTeamsMemebers" ADD CONSTRAINT "CTeamsMemebers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "CInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PTeamsMemebers" ADD CONSTRAINT "PTeamsMemebers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "PInstitutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceCardsToOperations" ADD CONSTRAINT "_MaintenanceCardsToOperations_A_fkey" FOREIGN KEY ("A") REFERENCES "MaintenanceCards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceCardsToOperations" ADD CONSTRAINT "_MaintenanceCardsToOperations_B_fkey" FOREIGN KEY ("B") REFERENCES "Operations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CTeamsMemebersToTeams" ADD CONSTRAINT "_CTeamsMemebersToTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "CTeamsMemebers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CTeamsMemebersToTeams" ADD CONSTRAINT "_CTeamsMemebersToTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PTeamsMemebersToTeams" ADD CONSTRAINT "_PTeamsMemebersToTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "PTeamsMemebers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PTeamsMemebersToTeams" ADD CONSTRAINT "_PTeamsMemebersToTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
