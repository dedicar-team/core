-- CreateEnum
CREATE TYPE "SEX" AS ENUM ('m', 'f');

-- CreateEnum
CREATE TYPE "CONTACT_TYPE" AS ENUM ('cellphone', 'telephone');

-- CreateEnum
CREATE TYPE "BANK_ACCOUNT_TYPE" AS ENUM ('checking', 'savings', 'salary');

-- CreateEnum
CREATE TYPE "MANNEQUINN" AS ENUM ('PP', 'P', 'M', 'G', 'GG', 'GGG');

-- CreateEnum
CREATE TYPE "WORKER_STATUS" AS ENUM ('working', 'free', 'fired');

-- CreateEnum
CREATE TYPE "CIVIL_STATUS" AS ENUM ('single', 'married', 'separated', 'divorced', 'widow');

-- CreateEnum
CREATE TYPE "TIME_SCALE" AS ENUM ('24', '24x24', '24x48', '12x36', '48x48', 'weekday', 'weekend', 'wildcard');

-- CreateEnum
CREATE TYPE "EXPERIENCE" AS ENUM ('elderly', 'wheelchair', 'bed', 'glucose', 'high_pressure', 'parkison', 'alzheimer', 'dementia', 'colostomy', 'AIDS', 'tracheostomy', 'gastrostomy');

-- CreateEnum
CREATE TYPE "ADMINISTRATIVE_LEVEL" AS ENUM ('read', 'update', 'delete');

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "sex" "SEX" NOT NULL,
    "photo" TEXT,
    "archive" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "Observation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "person_id" INTEGER NOT NULL,
    "public_place" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "type" "CONTACT_TYPE" NOT NULL,
    "data" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "person_id" INTEGER NOT NULL,
    "costumer_id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "experience" "EXPERIENCE"[],

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "BANK_ACCOUNT_TYPE" NOT NULL,
    "agency" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "digit" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Body" (
    "person_id" INTEGER NOT NULL,
    "weight" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "mannequinn" "MANNEQUINN" NOT NULL,

    CONSTRAINT "Body_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "PayContract" (
    "id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "proof" TEXT,

    CONSTRAINT "PayContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayCaregiver" (
    "id" INTEGER NOT NULL,
    "caregiver_to_contract_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "proof" TEXT,

    CONSTRAINT "PayCaregiver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" INTEGER NOT NULL,
    "costumer_id" INTEGER NOT NULL,
    "init_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "value" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "time_scale" "TIME_SCALE" NOT NULL,
    "archive" TEXT[],

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractJourney" (
    "id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "caregiver_order" INTEGER[],

    CONSTRAINT "ContractJourney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaregiverToContract" (
    "id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "caregiver_id" INTEGER NOT NULL,

    CONSTRAINT "CaregiverToContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Worker" (
    "credential_id" INTEGER NOT NULL,
    "pis" TEXT NOT NULL,
    "dependent" INTEGER NOT NULL,
    "status" "WORKER_STATUS" NOT NULL,
    "civil" "CIVIL_STATUS" NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("credential_id")
);

-- CreateTable
CREATE TABLE "Caregiver" (
    "worker_id" INTEGER NOT NULL,
    "smoker" BOOLEAN NOT NULL,
    "allergic" TEXT NOT NULL,
    "unique_ticket" TEXT NOT NULL,
    "time_scale" "TIME_SCALE"[],
    "experience" "EXPERIENCE"[],

    CONSTRAINT "Caregiver_pkey" PRIMARY KEY ("worker_id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "credential_id" INTEGER NOT NULL,
    "level" "ADMINISTRATIVE_LEVEL" NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("credential_id")
);

-- CreateTable
CREATE TABLE "Credential" (
    "person_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "Costumer" (
    "credential_id" INTEGER NOT NULL,
    "time_scale" "TIME_SCALE"[],

    CONSTRAINT "Costumer_pkey" PRIMARY KEY ("credential_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Observation_id_key" ON "Observation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Address_person_id_key" ON "Address"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_id_key" ON "Contact"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_person_id_key" ON "Patient"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_id_key" ON "Bank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Body_person_id_key" ON "Body"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "PayContract_id_key" ON "PayContract"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PayCaregiver_id_key" ON "PayCaregiver"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_id_key" ON "Contract"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ContractJourney_id_key" ON "ContractJourney"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CaregiverToContract_id_key" ON "CaregiverToContract"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_credential_id_key" ON "Worker"("credential_id");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_pis_key" ON "Worker"("pis");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_worker_id_key" ON "Caregiver"("worker_id");

-- CreateIndex
CREATE UNIQUE INDEX "Caregiver_unique_ticket_key" ON "Caregiver"("unique_ticket");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_credential_id_key" ON "Admin"("credential_id");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_person_id_key" ON "Credential"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_email_key" ON "Credential"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_cpf_key" ON "Credential"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_rg_key" ON "Credential"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_credential_id_key" ON "Costumer"("credential_id");

-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_costumer_id_fkey" FOREIGN KEY ("costumer_id") REFERENCES "Costumer"("credential_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayContract" ADD CONSTRAINT "PayContract_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayCaregiver" ADD CONSTRAINT "PayCaregiver_caregiver_to_contract_id_fkey" FOREIGN KEY ("caregiver_to_contract_id") REFERENCES "CaregiverToContract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_costumer_id_fkey" FOREIGN KEY ("costumer_id") REFERENCES "Costumer"("credential_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractJourney" ADD CONSTRAINT "ContractJourney_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaregiverToContract" ADD CONSTRAINT "CaregiverToContract_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaregiverToContract" ADD CONSTRAINT "CaregiverToContract_caregiver_id_fkey" FOREIGN KEY ("caregiver_id") REFERENCES "Caregiver"("worker_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_credential_id_fkey" FOREIGN KEY ("credential_id") REFERENCES "Credential"("person_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caregiver" ADD CONSTRAINT "Caregiver_worker_id_fkey" FOREIGN KEY ("worker_id") REFERENCES "Worker"("credential_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_credential_id_fkey" FOREIGN KEY ("credential_id") REFERENCES "Credential"("person_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Costumer" ADD CONSTRAINT "Costumer_credential_id_fkey" FOREIGN KEY ("credential_id") REFERENCES "Credential"("person_id") ON DELETE CASCADE ON UPDATE CASCADE;
