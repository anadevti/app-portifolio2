import Spline from "@splinetool/react-spline";
import {languages, speakingLanguages, tools} from "../data";
import Bar from "../components/Bar";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {useEffect, useState} from "react";

export default function Skills() {
    const [text] = useTypewriter({
        words: [
            "<My Skils/>",
        ],
        loop: 1
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
      <div className="pt-2 flex flex-col">
          <div className={"flex lg:h-40 sm:h-20 justify-center items-center"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"flex lg:flex-row sm:flex-col"}>
              {isMobile ? (
                  <div className={"grow w-full h-96"}>
                      <Spline scene="https://prod.spline.design/Su-5GfJG5GH7Vza9/scene.splinecode" />
                  </div>
              ): (
                  <div className={"flex basis-3/7 items-center justify-end pl-12 h-124"}>
                      <Spline scene="https://draft.spline.design/8HJos-FGXejiEHM2/scene.splinecode" />
                  </div>
              )}
              <div className={"flex flex-col basis-4/7"}>
                  <div className="grid md:grid-cols-2 gap-6 pr-10 pl-12 pt-10">
                      <div>
                          <h5 className="my-3 text-2x1 font-bold text-gray-300">Programming languages & Frameworks</h5>
                          <div className="my-2">
                              {
                                  languages.map(language => <Bar data={language} key={language.name}/> )
                              }
                          </div>
                      </div>
                      <div className={"flex flex-col mt-3"}>
                          <h5 className="text-2x1 font-bold text-gray-300">Languages</h5>
                          <div>
                              {
                                  speakingLanguages.map(tool => <Bar data={tool} key={tool.name}/> )
                              }
                          </div>
                          <h5 className="text-2x1 font-bold text-gray-300 mt-2">Tools & Softwares</h5>
                          <div>
                              {
                                  tools.map(tool => <Bar data={tool} key={tool.name}/> )
                              }
                          </div>
                      </div>
                  </div>
                  <div className={"font-roboto text-gray-200 mx-10 my-4 bg-gray-800 p-4 rounded-xl"}>
                      If you want to see my personal projects where I exemplify some of the knowledge described in this
                      section please <a href={"/projects"} className={"hover:text-gray-200 font-bold text-gray-500 duration-500"}>Access the Projects tab</a>
                  </div>
              </div>
          </div>
      </div>

  )
};
