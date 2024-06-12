import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="relative m-4 w-80">
      <Image
        src={img}
        className="rounded-2xl"
        width={360}
        height={340}
        style={{ width: 360, height: 340, objectFit: "cover" }}
      />
      <div className="p-2">
        <div className="flex">
          <p className="w-9/12 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
          <p className="w-3/12 text-right">
            <StarIcon className="h-5 text-red-400 inline-block" /> {star}
          </p>
        </div>
        <p className="text-gray-600">{description}</p>
        <div>
          <p>
            <span className="font-bold">{price}</span>
            <span aria-hidden="true" class="_1avo3ro">
              {" "}
              ·{" "}
            </span>
            <span className="text-gray-600 underline">{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
