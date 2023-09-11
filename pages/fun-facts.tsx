import {Fragment, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";
import {Cursor, useTypewriter} from "react-simple-typewriter";

function FunFacts() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    const [text] = useTypewriter({
        words: [
            "<Fun Facts/>",
        ],
        loop: 1
    });
  return (
      <div className="flex flex-col">
          <div className={"flex lg:h-40 sm:h-20 justify-center items-center"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"flex lg:flex-row sm:flex-col justify-center"}>
              <div className={"lg:basis-1/3 sm:mx-8 sm:mb-8"}>
                  <Fragment>
                      <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(1)}>
                              I`ve been drawing for more than 9 years!
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              During my hole life I`ve always been passionated with drawing. During my first year of college I created dozens of illustration works
                              in partnership with @harugraphycs(twitter). Today I still attempt to some smaller works in my free time.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 2} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(2)}>
                              I love video games!
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              Yep, i`m a declared and proud gamer! Video games have been in my life since I was 5 years old when my father decided to give me a PS2.
                              It was my open door for the technology world that later expended to computing. Today, I not only sill love to play with my friends,
                              but I also accomplished one semester of Game Design subject and two semesters of Blender and Unity classes at college (PUC-Minas).
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 3} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(3)}>
                             Why Control and Automation Engineering?
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              People frequently ask me this question and the answerer is: It is a pretty diverse multidisciplinary major.
                              Derived from Mechatronic Engineering, Control and Automation have three main pillars: Electric Engineering,
                              Mechanical Engineering and Software Engineering. Combining it all, I have the possibility to work in many
                              different areas of technology from basic goods industries to software development and robotics.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 7} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(7)}>
                              When I started thinking about becoming a developer?
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              I already had some friends that encouraged me to follow the career but it was when I entered college I really put a hand
                              into coding. I first started with C then C++ and C#, followed by JS + HTML and CC, React, Kotlin/Java, and Python. At this point
                              I consider myself really involved in following a developing path in this area and I already think about attempting a graduate course
                              in Software Engineering or similar.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 4} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(4)}>
                              Favorite game?
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              There are many games that I consider experiences to remember in my life BUT if I had to pick a winner it
                              the trophy would definitely go to The Last Of Us.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 5} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(5)}>
                              Favorite color?
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              I really don`t have a specific favorite one, however I see some singular charm in black and white together.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 6} animate={customAnimation}>
                          <AccordionHeader className={"sm:text-start sm:text-lg text-gray-500 hover:text-gray-300 duration-500 border-orange-500"} onClick={() => handleOpen(6)}>
                              Favorite food?
                          </AccordionHeader>
                          <AccordionBody className={"font-roboto text-gray-400"}>
                              Salt: Pasta, <br></br>
                              Sweet: Chocolate. <br></br>
                              I just love everything done with these.
                          </AccordionBody>
                      </Accordion>
                  </Fragment>
              </div>
          </div>
      </div>
  );
}

export default FunFacts;
