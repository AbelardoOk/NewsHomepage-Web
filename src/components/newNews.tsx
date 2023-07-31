export function NewNews({ tittle, text }: { tittle: string; text: string }) {
  return (
    <div className="text-neutral-white">
      <h3 className="font-bold">{tittle}</h3>
      <p>{text}</p>
    </div>
  );
}
