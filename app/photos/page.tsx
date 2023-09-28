"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Gallery() {
  return (
    <section>
      <div className="flex absolute top-0 right-0 ">
        <Button asChild>
          <CldUploadButton
            onUpload={(result: any) => {
              console.log(result.info.public_id);
              // setImageId(result.info.public_id);
            }}
            uploadPreset="i8zowa5f"
          />
        </Button>
      </div>
    </section>
  );
}
