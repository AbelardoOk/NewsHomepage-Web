"use client";

import { DivBar } from "@/components/bar";
import { NewNews } from "@/components/newNews";
import { TopNews } from "@/components/topNews";
import Image from "next/image";
import { useWindowSize } from "rooks";

export default function Home() {
  const { innerWidth } = useWindowSize();

  return (
    <main className="font-sans bg-neutral-white h-full px-4 sm:px-28 z-0">
      <div className="flex flex-col sm:flex-row sm:marker:justify-between gap-8">
        <div className="flex flex-col gap-8 pb-6">
          {innerWidth !== null && innerWidth > 768 ? (
            <Image src="/image-web-3-desktop.jpg" alt="" width={1460} height={600} />
          ) : (
            <Image src="/image-web-3-mobile.jpg" alt="" width={686} height={600} />
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <h1 className="text-left font-extrabold text-5xl text-neutral-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex justify-between flex-col items-start sm:ml-12 gap-5">
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="px-12 py-3 font-bold text-neutral-white bg-primary-red hover:bg-neutral-veryDarkBlue transition duration-150">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-veryDarkBlue p-7 flex flex-col gap-8">
          <h2 className="text-3xl text-primary-orange font-extrabold text-left">New</h2>

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

      <div className="flex flex-col gap-8 sm:flex-row justify-between py-16">
        <TopNews
          image="/image-retro-pcs.jpg"
          number="01"
          tittle="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <TopNews
          image="/image-top-laptops.jpg"
          number="02"
          tittle="Top 10 Laptops of 2022"
          text="Our best picks for various need and budgets."
        />
        <TopNews
          image="/image-gaming-growth.jpg"
          number="03"
          tittle="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}
