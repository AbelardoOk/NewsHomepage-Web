import { NewNews } from "@/components/newNews";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row justify-between">
        <div>
          <Image src="" alt="" />
          <div className="flex flex-row justify-between">
            <h1 className="text-left font-extrabold text-4xl text-neutral-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex justify-between flex-col items-start ml-12">
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="px-8 py-4 font-bold text-neutral-white bg-primary-red">READ MORE</button>
            </div>
          </div>
        </div>

        <div className="bg-neutral-veryDarkBlue p-7 gap-6">
          <h2 className="font-2xl text-primary-orange text-left">New</h2>
          <NewNews text="Will hydrogen-fueled cars ever catch up to EVs?" tittle="Hydrogen VS Eletric Cars" />
          <NewNews
            text="What are the possible adverse effects of on-demand AI image generation?"
            tittle="The downsides of AI Artistry"
          />
          <NewNews
            text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            tittle="Is VC Funding Drying Up?"
          />
        </div>
      </div>
    </main>
  );
}
