import React, { useState, useEffect } from "react";
import { GiCrossMark } from "react-icons/gi";
import LineIcon from "./LineIcon";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isOpen] = useState(false);

    useEffect(() => {

        document.documentElement.style.scrollBehavior = "smooth";
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);

            }
        }
        const handleScroll1 = () => {
            if (window.scrollY > 500) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll1);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScroll1);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const menuItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Resume", link: "#resume" },
        { name: "Portfolio", link: "#portfolio" },
        { name: "Skills", link: "#skills" },
        { name: "Contact", link: "#contact" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-primary ">
            <nav id="home">
                <header className={`bg-primary flex items-center justify-between top-0 fixed left-0 z-50 right-0 ${sticky ? "bg-secondary/80 " : ""}`}>
                    <div className=" px-8 lg:px-10  font-bold text-3xl lg:text-2xl">
                        <h1 className={` py-3 lg:py-0 break-words ${sticky ? " text-primary" : "text-secondary "} -z-10 ${isOpen ? "-z-20" : ""}`}>
                            Ghulam <span className="text-red"> Akbar</span>
                        </h1>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className={`flex text-lg  font-semibold text-primary py-3 px-4 rounded-bl-full ${sticky ? "bg-secondary/0 " : "bg-secondary"}`}>
                            {menuItems.map((items, i) => (
                                <li key={i} className="px-4 hover:text-red">
                                    <a href={items.link}>{items.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="lg:hidden">
                        {!open ?
                            (<div onClick={() => setOpen(!open)} className={`items-center flex z-30 cursor-pointer  px-8 top-8 ${sticky ? "  text-primary " : "text-secondary"} `}> <LineIcon /></div>) :
                            (
                                <GiCrossMark onClick={() => setOpen(!open)} className="text-secondary cursor-pointer  right-9 md:right-8 fixed z-10" />
                            )}
                        <>
                            <div className={`bg-primary  text-secondary top-0 right-0 fixed  w-96 h-full py-32
            ${open ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>


                                {
                                    menuItems.map((link, i) => (
                                        <div
                                            onClick={() => setOpen(!open)}
                                            key={i}
                                            className={`${open ? ' my-10 ' : 'my-10'
                                                }`}
                                        >
                                            <a href={link.link} className={`hover:text-red duration-200
                                        ${open ? 'text-gray-950 font-extrabold flex flex-col items-center ' : 'text-gray-950 flex flex-col items-center'}`}>{link.name}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    </div>
                </header>


            </nav>
            {showScrollButton && (
                <div className={`fixed bottom-10 right-10 bg-secondary z-10 border-2 border-red px-3 py-1  font-extrabold text-2xl rounded-full cursor-pointer text-cyan-500 ${sticky ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`} onClick={scrollToTop}>
                    ^
                </div>
            )

            }

        </div>
    )
}

export default Navbar