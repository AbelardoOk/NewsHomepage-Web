export function NewNews({ tittle, text }: { tittle: string; text: string }) {
  return (
    <div className="text-neutral-white flex-col flex gap-2">
      <a className="font-bold cursor-pointer text-lg hover:text-primary-orange transitoion duration-150">{tittle}</a>
      <p>{text}</p>
    </div>
  );
}
