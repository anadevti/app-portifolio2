import {Cursor, useTypewriter} from "react-simple-typewriter";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import {SiGithub} from "react-icons/si";
import {Tooltip} from "flowbite-react";



function Projects() {
    const theme = {
        tabs: {
            styles: {
                base: {
                    display: "block",
                    overflow: "overflow-hidden",
                },
            },
        },
    };
    const [text] = useTypewriter({
        words: [
            "<Projects/>",
        ],
        loop: 1
    });
    const data = [
        {
            label: "Code Projects",
            value: "codeProjects",
            desc: `Here you can see all of my code projects.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];
  return (
      <div className="pt-2 flex flex-col">
          <div className={"flex h-40 justify-center items-center mb-4"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"px-96"}>
              <Tabs id="custom-animation" value="codeProjects" >
                  <TabsHeader className={"bg-gray-800 font-roboto-moto text-gray-200"}>
                      {data.map(({ label, value }) => (
                          <Tab id={"tab"} color={'#0E1129'} className={"font-bold"} key={value} value={value}>
                              {label}
                          </Tab>
                      ))}
                  </TabsHeader>
                  <TabsBody animate={{
                      initial: { y: 250 },
                      mount: { y: 0 },
                      unmount: { y: 250 },
                  }}>
                      <TabPanel key="codeProjects" value="codeProjects">
                          <div className="grid grid-cols-3 gap-6">
                              <div className={"flex justify-center"}>
                                  <Card className="w-96 bg-gray-800">
                                      <CardHeader color="blue" className="relative h-56">
                                          <img src="https://cdnb.artstation.com/p/assets/images/images/035/548/487/large/giovanna-nascimento-apresentacao-koby.jpg?1615256685" alt="img-blur-shadow" className="h-full w-full"/>
                                      </CardHeader>
                                      <CardBody className="text-center bg-gray-800">
                                          <h1>
                                              <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-gray-400"}>Title</span>
                                          </h1>
                                          <div>Description</div>
                                      </CardBody>
                                      <CardFooter className="flex items-center justify-between py-3">
                                          <Tooltip key={"github"} content={"GitHub"}>
                                              <SiGithub className={"mr-2"} color={"#0E1129"}/>
                                          </Tooltip>
                                      </CardFooter>
                                  </Card>
                              </div>
                              <div className={"flex justify-center"}>
                                  <div>test2</div>
                              </div>
                              <div className={"flex justify-center"}>
                                  <div>test3</div>
                              </div>
                              <div className={"flex justify-center"}>
                                  <div>test4</div>
                              </div>
                          </div>
                      </TabPanel>
                  </TabsBody>
              </Tabs>
          </div>
      </div>
  );
}

export default Projects;
