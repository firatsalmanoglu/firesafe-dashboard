"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
  serialNumber: z.string().min(8, { message: "Seri No boş geçilemez!" }),
  owner: z.string().min(8, { message: "Cihaz sahibi boş geçilemez!" }),
  deviceType: z.string().min(8, { message: "Cihaz türü boş geçilemez!" }),
  feature: z.string().min(8, { message: "Cihaz özelliği boş geçilemez!" }),
  manufactureDate:z.string().min(8, { message: "Üretim tarihi boş geçilemez!" }),
  lastInspectionDate: z.string().min(8, { message: "Son bakım tarihi boş geçilemez!" }),
  expiryDate: z.string().min(8, { message: "Son kullanma tarihi boş geçilemez!" }),
  location: z.string().min(8, { message: "Konumu boş geçilemez!" }),
  statuss: z.string().min(8, { message: "Kullanım durumu boş geçilemez!" }),
  photo: z.instanceof(File, { message: "Image is required" }),

});

type Inputs = z.infer<typeof schema>;

const DeviceForm = ({
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
      <h1 className="text-xl font-semibold">Yeni Cihaz Oluştur</h1>
      <span className="text-xs text-gray-400 font-medium">
        Cihaz Kimlik Bİlgileri
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Seri No"
          name="serialNumber"
          defaultValue={data?.serialNumber}
          register={register}
          error={errors?.serialNumber}
        />
        <InputField
          label="Cihaz Sahibi"
          name="owner"
          defaultValue={data?.owner}
          register={register}
          error={errors?.owner}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
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
        </div>
        <InputField
          label="Üretim Tarihi"
          name="manufactureDate"
          type="date"
          defaultValue={data?.manufactureDate}
          register={register}
          error={errors?.manufactureDate}
        />

        <InputField
          label="Son Kullanma Tarihi"
          name="expiryDate"
          type="date"
          defaultValue={data?.expiryDate}
          register={register}
          error={errors?.expiryDate}
        />

        <InputField
          label="Son Kontrol Tarihi"
          name="lastInspectionDate"
          type="date"
          defaultValue={data?.lastInspectionDate}
          register={register}
          error={errors?.lastInspectionDate}
        />

        <InputField
          label="Konum"
          name="location"
          defaultValue={data?.location}
          register={register}
          error={errors?.location}
        />

        <InputField
          label="Durum"
          name="statuss"
          defaultValue={data?.statuss}
          register={register}
          error={errors?.statuss}
        />

       
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
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
        </div>

      </div>
      
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default DeviceForm;