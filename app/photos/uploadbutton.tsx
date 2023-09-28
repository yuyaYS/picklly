"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function UploadButton() {
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result: any) => {
          console.log(result.info.public_id);
          console.log(result);

          // setImageId(result.info.public_id);
        }}
        uploadPreset="i8zowa5f"
      />
    </Button>
  );
}
