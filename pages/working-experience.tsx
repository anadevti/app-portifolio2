import {Cursor, useTypewriter} from "react-simple-typewriter";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from "react-icons/md";
import {IoMdSchool} from "react-icons/io";
import {Tooltip} from "flowbite-react";
import {illustrationIcons, hotmartIcons, collegeIcons, schoolIcons} from "../data";

function WorkingExperience() {

    const [text, count] = useTypewriter({
        words: [
            "<Working Experince & Education/>",
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
          <VerticalTimeline lineColor={'#4b5563'}>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#ea580c', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #ea580c' }}
                  date="Sept. 2021 - Present"
                  iconStyle={{ background: '#ea580c', color: '#fff' }}
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
                     Write here what I do at Hotmart
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#6b7280', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #6b7280' }}
                  date="Feb. 2020 - Sept. 2021"
                  iconStyle={{ background: '#6b7280', color: '#fff' }}
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
                     Write what I did as an 2D Illustrator
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#9333ea', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #9333ea' }}
                  date="Feb. 2020 - Dec. 2024"
                  iconStyle={{ background: '#9333ea', color: '#fff' }}
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
                  contentStyle={{ background: '#6b7280', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #6b7280' }}
                  date="Feb. 2020 - Sept. 2021"
                  iconStyle={{ background: '#6b7280', color: '#fff' }}
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
                      Colégio Santo Agostinho offers an excellent, human, innovative, and sustainable education, within its mission to promote life through fraternity, education, and social justice guided by the motto "gente
                      que forma gente."("people who graduates people.").
                  </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                  className={"vertical-timeline-element--work font-roboto-moto"}
                  contentStyle={{ background: '#6b7280', color: '#f9fafb' }}
                  contentArrowStyle={{ borderRight: '7px solid  #6b7280' }}
                  date="Feb. 2017 - Dec. 2018"
                  iconStyle={{ background: '#6b7280', color: '#fff' }}
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
                      have a complete immersion in the Canadian culture and its educational system by ministering classes that are not offered in the Brazilian normal curriculum. All the classes are "only English
                      environment" and taught by native Canadian/American teachers with the conclusion degree including IELTS proficiency test.
                  </p>
              </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
  );
}

export default WorkingExperience;
