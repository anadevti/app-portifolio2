import Spline from "@splinetool/react-spline";
import {languages, speakingLanguages, tools} from "../data";
import Bar from "../components/Bar";
import {Cursor, useTypewriter} from "react-simple-typewriter";

export default function Skills() {
    const [text] = useTypewriter({
        words: [
            "<My Skils/>",
        ],
        loop: 1
    });
  return (
      <div className="pt-2 flex flex-col h-full w-full">
          <div className={"flex h-40 justify-center items-center"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"flex flex-row h-124"}>
              <div className={"flex basis-3/7 items-center justify-end pl-12 mb-40"}>
                  <Spline scene="https://draft.spline.design/8HJos-FGXejiEHM2/scene.splinecode" />
              </div>
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
                  <div className={"flex flex-row font-roboto text-gray-200 mx-10 my-4 bg-gray-800 p-4 rounded-xl"}>
                      If you want to see my personal projects where I exemplify some of the knowledge described in this
                      section please
                      <a href={"/projects"} className={"ml-1 font-bold hover:text-gray-600 duration-500"}>Access the Projects tab</a>
                  </div>
              </div>
          </div>
      </div>
  )
};
