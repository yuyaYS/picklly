import { CLDimage } from "./cldimage";
import UploadButton from "./uploadbutton";
import cloudinary from "cloudinary";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
type SearchResult = {
  public_id: string;
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  console.log(results);

  return (
    <section>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1 className="font-bold ">Welcome</h1>
          <UploadButton />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {results.resources.map((result) => (
          <CLDimage
            width="400"
            height="300"
            key={result.public_id}
            src={result.public_id}
            alt="image"
          />
        ))}
      </div>
    </section>
  );
}
