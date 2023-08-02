import Image from "next/image";
export function TopNews({
  tittle,
  text,
  image,
  number,
}: {
  tittle: string;
  text: string;
  image: string;
  number: string;
}) {
  return (
    <div className="flex flex-row gap-4">
      <Image className="h-1/2 w-fit" src={image} alt="" width={200} height={200} />
      <div className="flex h-1/2 flex-col justify-between items-start">
        <h2 className="font-bold text-3xl text-neutral-darkBlue">{number}</h2>
        <a className="cursor-pointer font-bold text-lg text-neutral-veryDarkBlue hover:text-primary-red transition duration-150">
          {tittle}
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
}
