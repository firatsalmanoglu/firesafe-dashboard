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
    "id" TEXT NOT NULL,
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
CREATE TABLE "Institutions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Institutions_pkey" PRIMARY KEY ("id")
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
    "photo" TEXT NOT NULL,
    "currentStatus" "DeviceStatus" NOT NULL,
    "typeId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
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
    "providerId" TEXT NOT NULL,
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
    "creatorId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
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
CREATE TABLE "Notifications" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "notificationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRead" "NotificationStatus" NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
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
    "creatorId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "actionId" INTEGER NOT NULL,
    "tableId" INTEGER NOT NULL,
    "IP" TEXT NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "Announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamsMemebers" (
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

    CONSTRAINT "TeamsMemebers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaintenanceCardsToOperations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TeamsToTeamsMemebers" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_serialNumber_key" ON "Devices"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Devices_qrcode_key" ON "Devices"("qrcode");

-- CreateIndex
CREATE UNIQUE INDEX "_MaintenanceCardsToOperations_AB_unique" ON "_MaintenanceCardsToOperations"("A", "B");

-- CreateIndex
CREATE INDEX "_MaintenanceCardsToOperations_B_index" ON "_MaintenanceCardsToOperations"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TeamsToTeamsMemebers_AB_unique" ON "_TeamsToTeamsMemebers"("A", "B");

-- CreateIndex
CREATE INDEX "_TeamsToTeamsMemebers_B_index" ON "_TeamsToTeamsMemebers"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DeviceTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "DeviceFeatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceCards" ADD CONSTRAINT "MaintenanceCards_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_paymentTermId_fkey" FOREIGN KEY ("paymentTermId") REFERENCES "PaymentTermTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferCards" ADD CONSTRAINT "OfferCards_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "NotificationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamsMemebers" ADD CONSTRAINT "TeamsMemebers_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceCardsToOperations" ADD CONSTRAINT "_MaintenanceCardsToOperations_A_fkey" FOREIGN KEY ("A") REFERENCES "MaintenanceCards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceCardsToOperations" ADD CONSTRAINT "_MaintenanceCardsToOperations_B_fkey" FOREIGN KEY ("B") REFERENCES "Operations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamsToTeamsMemebers" ADD CONSTRAINT "_TeamsToTeamsMemebers_A_fkey" FOREIGN KEY ("A") REFERENCES "Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeamsToTeamsMemebers" ADD CONSTRAINT "_TeamsToTeamsMemebers_B_fkey" FOREIGN KEY ("B") REFERENCES "TeamsMemebers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
