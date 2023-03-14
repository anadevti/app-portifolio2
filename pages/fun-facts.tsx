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
            "<Fun Facts (if u wanna know ;P)/>",
        ],
        loop: 1
    });
  return (
      <div className="flex flex-col">
          <div className={"flex h-40 justify-center items-center mb-4"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"flex flex-row justify-center"}>
              <div className={"basis-1/3"}>
                  <Fragment>
                      <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader className={"text-gray-300 hover:text-gray-500 duration-500 border-orange-500"} onClick={() => handleOpen(1)}>
                              What is Material Tailwind?
                          </AccordionHeader>
                          <AccordionBody>
                              We&apos;re not always in the position that we want to be at.
                              We&apos;re constantly growing. We&apos;re constantly making mistakes.
                              We&apos;re constantly trying to express ourselves and actualize our
                              dreams.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 2} animate={customAnimation}>
                          <AccordionHeader className={"text-gray-300 hover:text-gray-500 duration-500 border-orange-500"} onClick={() => handleOpen(2)}>
                              How to use Material Tailwind?
                          </AccordionHeader>
                          <AccordionBody>
                              We&apos;re not always in the position that we want to be at.
                              We&apos;re constantly growing. We&apos;re constantly making mistakes.
                              We&apos;re constantly trying to express ourselves and actualize our
                              dreams.
                          </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 3} animate={customAnimation}>
                          <AccordionHeader className={"text-gray-300 hover:text-gray-500 duration-500 border-orange-500"} onClick={() => handleOpen(3)}>
                              What can I do with Material Tailwind?
                          </AccordionHeader>
                          <AccordionBody>
                              We&apos;re not always in the position that we want to be at.
                              We&apos;re constantly growing. We&apos;re constantly making mistakes.
                              We&apos;re constantly trying to express ourselves and actualize our
                              dreams.
                          </AccordionBody>
                      </Accordion>
                  </Fragment>
              </div>
          </div>
      </div>
  );
}

export default FunFacts;
