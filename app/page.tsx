import FunctionAccordionCards from "@/components/cards/FunctionAccordionCards";
import ImageCollapseCards from "@/components/cards/ImageCollapseCards";
import StorySwiperCards from "@/components/cards/StorySwiperCards";
import FuturePotentialCards from "@/components/cards/FuturePotentialCards";

import { functionExperienceData, keyAdvantagesData, userProfileStories, futurePotentialCards } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        className="w-full relative flex flex-col items-center bg-center bg-cover mx-auto py-28 gap-8"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black/70 z-0" />

        <h1 className="relative lg:text-[40px] max-lg:text-[26px] text-white font-bold z-10">Elderly Smart Terminal</h1>

        <div className="relative flex flex-col items-center text-center text-2xl text-zinc-300 gap-1 z-10 max-lg:hidden">
          <p>The intelligent companion redefining elderly care with AI-driven</p>
          <p>emotional support and security.</p>
        </div>

        <p className="relative text-center text-zinc-300 mx-8 z-10 lg:hidden">
          The intelligent companion redefining elderly care with AI-driven emotional support and security.
        </p>
      </section>

      <section className="bg-zinc-50">
        <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center mx-auto lg:py-28 py-16 gap-8">
          <label className="text-xs text-red-400 font-bold">Thoughtfully Designed Features</label>

          <div className="flex flex-col items-center mb-6 gap-1 max-lg:hidden">
            <h2 className="text-3xl font-bold">Choose the function you want</h2>
            <h2 className="text-3xl font-bold">to experience</h2>
          </div>

          <h2 className="text-center text-2xl font-bold mx-8 lg:hidden">Choose the function you want to experience</h2>

          <FunctionAccordionCards cards={functionExperienceData} />
        </div>
      </section>

      <section className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center mx-auto lg:py-28 py-16 gap-8">
        <label className="text-xs text-red-400 font-bold">Key Advantages</label>

        <div className="flex flex-col items-center mb-6 gap-1 max-lg:hidden">
          <h2 className="text-3xl font-bold">Get started with just a few</h2>
          <h2 className="text-3xl font-bold">verbal interactions</h2>
        </div>

        <h2 className="text-center text-2xl font-bold mx-8 lg:hidden">
          Get started with just a few verbal interactions
        </h2>

        <ImageCollapseCards cards={keyAdvantagesData} />
      </section>

      <section className="bg-zinc-50">
        <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center mx-auto lg:py-28 py-16 gap-8">
          <label className="text-xs text-red-400 font-bold">Future Potential</label>
          <h2 className="max-lg:text-center lg:text-3xl text-2xl font-bold lg:mb-6">What&apos;s new about Robopin?</h2>

          <FuturePotentialCards cards={futurePotentialCards} />
        </div>
      </section>

      <section className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center mx-auto lg:py-28 py-16 gap-8">
        <label className="text-xs text-red-400 font-bold">About Innobound</label>

        <p className="text-center text-zinc-600 leading-8 max-lg:px-8">
          Innobound is dedicated to enhancing the quality of life for the elderly through innovative technology
          solutions. Elderly people who are lonely for long periods of time are at significantly increased risk of{" "}
          <em className="font-bold">cognitive decline</em>. However, traditional elderly care models are unable to meet
          the needs of round-the-clock companionship and <em className="font-bold">real-time health monitoring</em> due
          to issues such as a shortage of care workers and limited coverage. Against this backdrop, the Hong Kong
          Polytechnic University has launched <em className="font-bold">Robopin</em>, a smart device that aims to use
          technological innovation to transform the quality of life for elderly people and create a new paradigm of{" "}
          <em className="font-bold">&quot;digital companionship&quot;</em>.
        </p>
      </section>

      <section className="bg-zinc-50">
        <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col items-center mx-auto lg:py-28 py-16 gap-8">
          <label className="text-xs text-red-400 font-bold">User Profile</label>
          <h2 className="lg:text-3xl text-2xl font-bold mb-6">Stories behind Innobound</h2>

          <StorySwiperCards cards={userProfileStories} />
        </div>
      </section>
    </div>
  );
}
