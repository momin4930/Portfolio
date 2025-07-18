// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden sm:block">
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
          >
            <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#625e55] text-8xl">
              {hero.firstName}{" "}
              <br></br>
              <span className="text-dark_primary">{hero.LastName}</span>
            </h1>
          </div>

          {/* first col */}
          <div className="pb-16 px-6 pt-5" data-aos="fade-down">
            <h2 className="text-8xl font-bold">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <button className="btn text-dark_primary" 
                onClick={() => window.open("https://github.com/momin4930", "_blank")}>{hero.btnText}</button>
            </div>
            <div className="flex flex-col gap-10 mt-10">
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5
              ${i === 1 && " flex-row-reverse text-right"}  `}
                >
                  <h3 className="text-5xl font-semibold">{content.count}</h3>
                  <p className="text-lg">{content.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* sec col */}
          <div>
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              style={{ position: "absolute", top: "86%", left: "93%", transform: "translate(-50%, -50%)" }}
              className="h-32 w-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="block sm:hidden">
        <div className="min-h-screen flex flex-col-reverse items-center justify-center relative">
          <div className="pb-10 px-3 pt-5 w-full" data-aos="fade-down">
            <h2 className="text-2xl font-bold text-center">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <button className="btn text-dark_primary w-full" 
                onClick={() => window.open("https://github.com/momin4930", "_blank")}>{hero.btnText}</button>
            </div>
            <div className="flex flex-col gap-6 mt-6 items-center">
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-full max-w-xs gap-3
              ${i === 1 ? " flex-row-reverse text-right" : ""}  `}
                >
                  <h3 className="text-lg font-semibold">{content.count}</h3>
                  <p className="text-base">{content.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full flex justify-center">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="h-28 w-auto object-cover"
              style={{ position: "relative", top: 0, left: 0, transform: "none" }}
            />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-[#625e55]">
              {hero.firstName} <span className="text-dark_primary">{hero.LastName}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
