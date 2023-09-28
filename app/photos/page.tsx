import UploadButton from "./uploadbutton";

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
        <UploadButton />
      </div>
    </section>
  );
}
