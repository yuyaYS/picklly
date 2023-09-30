"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: string;
};
type Wiget = {
  length: number;
  name: "close";
  close: () => void;
};

export default function UploadButton() {
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result: any, wiget: Wiget) => {
          console.log(result);
          console.log(wiget);
          wiget.close();
        }}
        uploadPreset="i8zowa5f"
      />
    </Button>
  );
}
