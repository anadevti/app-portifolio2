import Spline from "@splinetool/react-spline";
import {languages, tools, services} from "../data";
import Bar from "../components/Bar";
import Image from "next/image";
import Profile from "../resources/ProfilePic.png";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import ServiceCard from "../components/ServiceCard";

export default function AboutMe() {
    const [text, count] = useTypewriter({
        words: [
            "<My Skils/>",
        ],
        loop: 1
    });
  return (
      <div className="pt-2 flex flex-col h-full w-full">
          <div className={"flex h-56 justify-center items-center"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"flex flex-row h-108"}>
              <div className={"flex basis-1/3 items-center justify-end pl-12"}>
                  {/*<div className="flex flex-col px-6 pt-1 flex-grow">*/}
                  {/*    <div className="mt-5 flex-grow"*/}
                  {/*         style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>*/}
                  {/*        <div className="grid lg:grid-rows-2 gap-12">*/}
                  {/*            {services.map(service => (*/}
                  {/*                // eslint-disable-next-line react/jsx-key*/}
                  {/*                <div className="lg:col-span-1">*/}
                  {/*                    <ServiceCard service={service}/>*/}
                  {/*                </div>*/}
                  {/*            ))}*/}
                  {/*        </div>*/}
                  {/*    </div>*/}
                  {/*</div>*/}
                  <Spline scene="https://prod.spline.design/X2QsfhxG8mwDXUv2/scene.splinecode" />
              </div>
              <div className={"basis-2/3"}>
                  <div className="grid md:grid-cols-2 gap-6 pr-10 pl-12">
                      <div>
                          <h5 className="my-3 text-2x1 font-bold text-gray-300">Programming languages & Frameworks</h5>
                          <div className="my-2">
                              {
                                  languages.map(language => <Bar data={language} key={language.name}/> )
                              }
                          </div>
                      </div>
                      <div>
                          <h5 className="my-3 text-2x1 font-bold text-gray-300">Tools & Softwares</h5>
                          <div className="my-2">
                              {
                                  tools.map(tool => <Bar data={tool} key={tool.name}/> )
                              }
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};
