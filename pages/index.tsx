import Spline from "@splinetool/react-spline";
import {Cursor, useTypewriter} from "react-simple-typewriter";

export default function Home() {
  const [text, count] = useTypewriter({
    words: [
      "<Giovanna Nascimento/>",
      "<Wegx for gaming friends/>",
      "<The girl who loves to draw and code/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex w-full h-full">
      <div className={"mx-5 flex lg:flex-row md:flex-col sm:flex-col grow items-center"}>
        <div className={"basis-1/2 text-center text-gray-300"}>
          <h2 className={"lg:text-5xl md:text-2xl m-6 text-gray-500"}>
            Hi my name is
          </h2>
          <h1>
            <span className={"lg:text-5xl md:text-2xl font-roboto-moto font-bold"}>{text}</span>
            <Cursor cursorColor={"#FF8000"}/>
          </h1>
          <p className={"p-12 text-left text-gray-500 font-roboto font-bold"}>
            Automated smart solutions studant and fascinated by programming and development I believe is possible to change
            people’s lives with creativity, agility and technology. I'm currently 21 years old and bachelor's graduating
            in Control and Automation Engineering by PUC Minas. Today, along with my studies, I work as a Developer
            FullStack Intern for Hotmart 🚀🔥and I must say that I’m completely involved in the career. With more than
            seven years of drawing by passion, in my free time over the last one and a half years, I accomplished dozens of
            diverse freelance works as an Illustrator and Graphic Designer from elaborating visual identity to character concept art.
          </p>
        </div>
        <div>
          <Spline
              className={"basis-1/2"}
              scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"
          />
        </div>
      </div>
    </div>
  )
}

