import Image from "next/image";

export default function ImgBlock({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div>
      <Image
        src={src}
        height={100}
        width={100}
        alt={title}
        className="rounded-full"
      />
      <p className=" text-2xl color-secondary my-3">{title}</p>
    </div>
  );
}
