import React, {useEffect, useRef, useState} from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Signature from "../resources/assinatura_colorida2.0.png"
import {SlMenu} from "react-icons/sl"
const NavbarFlow = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  let [open,setOpen]=useState(false);

  const { pathname } = useRouter();

  const navbarRef = useRef(null);

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
    if (pathname === "/skills") setActiveItem("Skills");
    if (pathname === "/working-experience") setActiveItem("Working Experience & FunFacts");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/fun-facts") setActiveItem("Fun Facts");
    if (pathname === "/contact") setActiveItem("Contact");
  }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    console.log("pathname", pathname);
  console.log(activeItem);
  console.log(pathname === "/");

 let Links = [
     {name: "Home", link:"/"},
     {name: "Skills", link: "/skills"},
     {name: "Working Experience & Education", link: "/working-experience"},
     {name: "Projects", link: "/projects"},
     {name: "Fun Facts", link: "/fun-facts"},
     {name: "Contact", link: "/contact"}

 ]

    return (
        <div className="w-full fixed top-0 z-10 grow" ref={navbarRef}>
            <div className="flex md:flex items-center bg-background-dark py-5 md:px-10 px-7">
                <div className="font-bold font-roboto text-2xl cursor-pointer h-12 items-center flex text-gray-500">
          <span className="w-16 text-gray-500">
              <a href={Links[0].link}>
                  <Image alt="signature" src={Signature}></Image>
              </a>
          </span>
                </div>

                <div onClick={() => setOpen(!open)} className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <SlMenu/>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto items-center transition-all duration-500 ease-in ${open ? 'block' : 'hidden'} md:flex-grow md:justify-end md:space-x-4 md:space-y-0 space-y-4 bg-background-dark sm:pt-56 lg:pt-4 md:pt-5 md:bg-transparent`}>
                    {Links.map((link) => (
                        <li key={link.name} className="text-1xl md:my-0 sm:my-0 sm:mx-2 my-7">
                            <div className="flex flex-row items-center">
                                <a href={link.link} className={`font-roboto font-bold hover:text-white duration-500 mx-3 ${activeItem === link.name ? 'text-white' : 'text-gray-500'}`}>{link.name}</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavbarFlow;
