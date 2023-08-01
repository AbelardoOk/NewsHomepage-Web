import { DivBar } from "@/components/bar";
import { NewNews } from "@/components/newNews";
import { TopNews } from "@/components/topNews";
import Image from "next/image";
export default function Home() {
  return (
    <main className="font-sans bg-neutral-white h-screen px-28">
      <div className="flex flex-row justify-between gap-8">
        <div className="flex flex-col gap-8">
          <Image src="/image-web-3-desktop.jpg" alt="" width={1460} height={600} />
          <div className="flex flex-row justify-between">
            <h1 className="text-left font-extrabold text-4xl text-neutral-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex justify-between flex-col items-start ml-12">
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="px-12 py-3 font-bold text-neutral-white bg-primary-red">READ MORE</button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-veryDarkBlue p-7 flex flex-col gap-8">
          <h2 className="text-3xl text-primary-orange text-left">New</h2>

          <NewNews text="Will hydrogen-fueled cars ever catch up to EVs?" tittle="Hydrogen VS Eletric Cars" />
          <DivBar />
          <NewNews
            text="What are the possible adverse effects of on-demand AI image generation?"
            tittle="The downsides of AI Artistry"
          />
          <DivBar />
          <NewNews
            text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            tittle="Is VC Funding Drying Up?"
          />
        </div>
      </div>

      <div>
        <TopNews
          image="image-retro-pcs.jpg"
          number={1}
          tittle="Reviving Retro PCsa"
          text="What happens when old PCs are given modern upgrades?"
        />
        <TopNews />
        <TopNews />
      </div>
    </main>
  );
}
