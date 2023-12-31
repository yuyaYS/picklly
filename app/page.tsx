"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
    asset_id: string;
  };
  event: "success";
};
export default function Home() {
  const [publicId, setPublicId] = useState("golrpgr4ej2gaofat8yn");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          console.log(result.info.public_id);
          setPublicId(result.info.public_id);
          console.log(result);
          console.log(result.info.asset_id);
        }}
        uploadPreset="i8zowa5f"
      />
      {publicId && (
        <CldImage
          width="960"
          height="600"
          src={publicId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
