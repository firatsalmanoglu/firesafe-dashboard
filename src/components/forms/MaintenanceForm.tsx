"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({

    recordID: z.string().min(1, { message: "Kayıt ID boş geçilemez!" }),
    deviceSerialNumber: z.string().min(1, { message: "Seri No boş geçilemez!" }),
    performedByID: z.string().min(1, { message: "Kontrol eden ID boş geçilemez!" }),
    performedByName: z.string().min(1, { message: "Kontrol eden kişi boş geçilemez!" }),
    instPerformed:z.string().min(1, { message: "Sorumlu firma boş geçilemez!" }),
    instServed: z.string().min(1, { message: "Hizmet edilen boş geçilemez!" }),
    maintenanceDate: z.string().min(1, { message: "Bakım tarihi boş geçilemez!" }),
    maintenanceType: z.string().min(1, { message: "Bakım türü boş geçilemez!" }),
    details: z.string().min(1, { message: "Bakım detayları boş geçilemez!" }),
    nexyMaintenanceDate: z.string().min(1, { message: "Sonraki bakım tarihi boş geçilemez!" }),
    status: z.string().min(1, { message: "Durumu boş geçilemez!" }),

});

type Inputs = z.infer<typeof schema>;

const MaintenanceForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Yeni Bakım Girişi</h1>
      <span className="text-xs text-gray-400 font-medium">
       Bakım Bİlgileri
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Bakım No"
          name="recordID"
          defaultValue={data?.recordID}
          register={register}
          error={errors?.recordID}
        />
        <InputField
          label="Cihaz Seri No"
          name="deviceSerialNumber"
          defaultValue={data?.deviceSerialNumber}
          register={register}
          error={errors?.deviceSerialNumber}
        />
        {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Cihaz Türü</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("deviceType")}
            defaultValue={data?.deviceType}
          >
            <option value="YT">Yangın Tüpü</option>
            <option value="YD">Yangın Dolabı</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Özelliği</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("feature")}
            defaultValue={data?.deviceType}
          >
            <option value="CO2">CO2</option>
            <option value="KK">Kuru Kimyevi</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div> */}
        <InputField
          label="Bakımı Yapan Personel ID"
          name="performedByID"
          defaultValue={data?.performedByID}
          register={register}
          error={errors?.performedByID}
        />

        <InputField
          label="Bakımı Yapan Personel Adı"
          name="performedByName"
          defaultValue={data?.performedByName}
          register={register}
          error={errors?.performedByName}
        />

        <InputField
          label="Bakımı Yapan Firma"
          name="instPerformed"
          defaultValue={data?.instPerformed}
          register={register}
          error={errors?.instPerformed}
        />

        <InputField
          label="Hizmet Verilen Firma"
          name="instServed"
          defaultValue={data?.instServed}
          register={register}
          error={errors?.instServed}
        />

        <InputField
          label="Bakım Tarihi"
          name="maintenanceDate"
          type= "date"
          defaultValue={data?.maintenanceDate}
          register={register}
          error={errors?.maintenanceDate}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Bakım Türü</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("maintenanceType")}
            defaultValue={data?.deviceType}
          >
            <option value="BK">Basınç Kontrolü</option>
            <option value="CD">Değişim</option>
            <option value="TM">Tamir</option>
          </select>
          {/* {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )} */}
        </div>

        <InputField
          label="Bakım Detayları"
          name="details"
          defaultValue={data?.details}
          register={register}
          error={errors?.details}
        />

        <InputField
          label="Sonraki Bakım Tarihi"
          name="nexyMaintenanceDate"
          type= "date"
          defaultValue={data?.nexyMaintenanceDate}
          register={register}
          error={errors?.nexyMaintenanceDate}
        />

        <InputField
          label="Durumu"
          name="status"
          defaultValue={data?.status}
          register={register}
          error={errors?.status}
        />
       
        {/* <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Foto Yükleyin</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div> */}

      </div>
      
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default MaintenanceForm;