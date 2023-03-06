import Spline from "@splinetool/react-spline";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {SocialIcon} from "react-social-icons";
import Image from "next/image";
import Profile from "../resources/ProfilePic.png"
export default function Home() {
  const [text] = useTypewriter({
    words: [
      "<Giovanna Nascimento Reis/>",
      "<Wegx for gaming friends/>",
      "<The girl who loves to draw and code/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex w-full h-full">
      <div className={"mx-10 flex lg:flex-row md:flex-col sm:flex-col grow items-center"}>
        <div className={"flex flex-col items-center"}>
          <div style={{height:'33rem'}} className={"w-1 bg-gradient-to-b from-orange-600 to-purple-600"}></div>
          <SocialIcon url="https://www.linkedin.com/in/giovanna-nascimento-reis-126b01198/"
          fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-3"}/>
          <SocialIcon url="https://github.com/Wegxx"
                      fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-3"}/>
        </div>
        <div className={"basis-2/6 text-center text-orange-500"}>
          <Image alt={"profileImage"} className={"rounded-full my-2"} src={Profile} width={180} height={180}></Image>
          <h2 className={"lg:text-5xl md:text-2xl m-6 text-gray-300 font-bold"}>
            Hi my name is
          </h2>
          <h1 className={"h-24"}>
            <span className={"lg:text-5xl md:text-2xl font-roboto-moto"}>{text}</span>
            <Cursor cursorColor={"#FF8000"}/>
          </h1>
          <p className={"p-12 text-left text-gray-300 font-roboto"}>
            Automated smart solutions studant and fascinated by programming and development I believe is possible to change
            people’s lives with creativity, agility and technology. I'm currently 21 years old and bachelor's graduating
            in Control and Automation Engineering by PUC Minas. Today, along with my studies, I work as a FullStack Developer
            Intern for Hotmart 🚀🔥and I must say that I’m completely involved in the career. With more than
            seven years of drawing by passion, in my free time over the last one and a half years, I accomplished dozens of
            diverse freelance works as an Illustrator and Graphic Designer from elaborating visual identity to character concept art.
          </p>
        </div>
        <div style={{height:'50rem', width:'50rem'}} className={'grow'}>
          <Spline
              scene="https://prod.spline.design/zVYA1SI7JlFY5owQ/scene.splinecode"
          />
        </div>
      </div>
    </div>
  )
}

