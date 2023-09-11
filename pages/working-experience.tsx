import {Cursor, useTypewriter} from "react-simple-typewriter";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from "react-icons/md";
import {IoMdSchool} from "react-icons/io";
import {Tooltip} from "flowbite-react";
import {illustrationIcons, hotmartIcons, collegeIcons, schoolIcons, hotmartIconsDevI} from "../data";
import {GrMysql} from "react-icons/gr";

function WorkingExperience() {

    const [text] = useTypewriter({
        words: [
            "<Working Experince & Education/>",
        ],
        loop: 1
    });
  return (
      <div className="pt-2 flex flex-col h-full w-full">
          <div className={"flex lg:h-40 sm:h-20 justify-center items-center mb-4"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <VerticalTimeline lineColor={'#4b5563'}>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#ea580c', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #ea580c' }}
                  date="Mar. 2023 - Present"
                  iconStyle={{ background: '#ea580c', color: '#fff'}}
                  icon={<MdWork />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          hotmartIconsDevI.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">
                      Software Engineer I
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Hotmart</h4>
                  <p className={"font-roboto"}>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      - Development of KYC(Know Your Customer) automated solutions, as part of the company's theft and money laundering prevention initiatives. <br/>
                      - Agile methodologies: Scrum, Kanban. <br/>
                      - Technologies: Kotlin/Java, GraphQL, AWS(lines, Dynamo, topics, etc... ), Kibana, SonarQube <br/>
                      - Databases:  SQL, MySQL, MariaDB <br/>
                      - Stacktrace: Sonar, Kinbana, NewRelic <br/>
                      - Computer System Software: macOS <br/>
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#C70039', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #C70039' }}
                  date="Sept. 2021 - Mar. 2023"
                  iconStyle={{ background: '#C70039', color: '#fff'}}
                  icon={<MdWork />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          hotmartIcons.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">
                      FullStack Developer Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Hotmart</h4>
                  <p className={"font-roboto"}>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      - Development of KYC(Know Your Customer) automated solutions, as part of the company's theft and money laundering prevention initiatives. <br/>
                      - Agile methodologies: Scrum, Kanban. <br/>
                      - Technologies: Kotlin/Java, React + TypeScript, GraphQL, AWS(lines, Dynamo, topics, etc... ), Storybook <br/>
                      - Databases:  SQL, MySQL, MariaDB <br/>
                      - Stacktrace: Sonar, Kinbana, NewRelic <br/>
                      - Computer System Software: macOS <br/>
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#831843', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #831843' }}
                  date="Feb. 2020 - Present (Graduation forecast: Dec. 2024)"
                  iconStyle={{ background: '#831843', color: '#fff' }}
                  icon={<IoMdSchool />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          collegeIcons.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl"> Control and Automation Engineering - Bachelor</h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto"> Pontifical Catholic University of Minas Gerais</h4>
                  <p className={"font-roboto"}>
                      Brazilian Catholic college institution located in Belo Horizonte, being the largest university in the state, with around 74 thousand students and one of the most recognized
                      Brazilian Higher Education Institutions.
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#db2777', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #db2777' }}
                  date="Jun. 2022 - Mar. 2023"
                  iconStyle={{ background: '#db2777', color: '#fff' }}
                  icon={<MdWork />}
              >
                  <div className={"flex flex-row pb-2"}>
                      <Tooltip key={"MySQL"} content={"MySQL"}>
                              <GrMysql className={"mr-2"} color={"#0E1129"}/>
                      </Tooltip>

                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">BPM Project</h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Freelancer ITC-BH(Cadaver Training Institute)</h4>
                  <p className={"font-roboto"}>
                      - Development of BPM(Business Process Management). <br/>
                      - All interface was made using Interact platform (as requested by the client). <br/>
                      - The project was design to fit the entire company`s customer journey into the BPM business model. <br/>
                      - Database: MySQL <br/>
                      - Agile methodologies: Kanban <br/>
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#c026d3', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #c026d3' }}
                  date="Feb. 2020 - Sept. 2021"
                  iconStyle={{ background: '#c026d3', color: '#fff' }}
                  icon={<MdWork />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          illustrationIcons.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">2D Illustrator</h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Freelancer, HaruGraphics Partnership</h4>
                  <p className={"font-roboto"}>
                      - Personalized visual identity, overlays, and stream packs for youtube and twitch channels <br/>
                      - Emotes, Concept arts, Chibis, Cartoons, Backgrounds, Logos, Social media posts. <br/>
                      - Individual commitions of mixed art styles <br/>
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#701a75', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #701a75' }}
                  date="Feb. 2020 - Sept. 2021"
                  iconStyle={{ background: '#701a75', color: '#fff' }}
                  icon={<IoMdSchool />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          schoolIcons.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">Brazilian High School</h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Colégio Santo Agostinho, BH</h4>
                  <p className={"font-roboto"}>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Colégio Santo Agostinho offers an excellent, human, innovative, and sustainable education, within its mission to promote life through fraternity, education, and social justice guided by the motto "gente
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      que forma gente" (people who graduates people).
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#581c87', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #581c87' }}
                  date="Feb. 2017 - Dec. 2018"
                  iconStyle={{ background: '#581c87', color: '#fff' }}
                  icon={<IoMdSchool />}
              >
                  <div className={"flex flex-row pb-2"}>
                      {
                          schoolIcons.map(icon => <Tooltip key={icon.tooltip} content={icon.tooltip}>
                              <icon.Icon className={"mr-2"} color={"#0E1129"}/>
                          </Tooltip> )
                      }
                  </div>
                  <h3 className="vertical-timeline-element-title font-roboto font-bold text-background-dark text-xl">Canadian High School</h3>
                  <h4 className="vertical-timeline-element-subtitle font-roboto-moto">Colégio Santo Agostinho and Atlantic Education International (AEI) - New Brunswick, Canada</h4>
                  <p className={"font-roboto"}>
                      A two years international education program provided by the province of New Brunswick and offered during High School for selected students. The purpose is to provide the opportunity to
                      have a complete immersion in the Canadian culture and its educational system by ministering classes that are not offered in the Brazilian normal curriculum. All the classes are only English
                      environment and taught by native Canadian/American teachers with the conclusion degree including IELTS proficiency test.
                  </p>
              </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
  );
}

export default WorkingExperience;
