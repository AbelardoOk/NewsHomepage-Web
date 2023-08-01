export function TopNews({
  tittle,
  text,
  image,
  number,
}: {
  tittle: string;
  text: string;
  image: string;
  number: number;
}) {
  return (
    <div className="flex flex-row gap-4">
      <Image src={image} alt="" width={200} height={200} />
      <div className="flex flex-col justify-between items-start">
        <h2 className="font-bold text-xl text-neutral-darkBlue">{number}</h2>
        <h3 className="font-bold text-lg text-neutral-veryDarkBlue">{tittle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
