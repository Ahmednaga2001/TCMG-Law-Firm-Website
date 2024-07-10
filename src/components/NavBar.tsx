"use client";
import Image from "next/image";
import HamburgerMenu from "@/images/HamburgerMenu.png";
import HamburgerMenuHover from "@/images/State=Hover.png";

import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


interface IProps { }

const NavBar = ({ }: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenAbout, setIsOpenAbout] = useState<boolean>(false);

    const handleOpen = (): void => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsOpenAbout(false); 
        }
    };

    const handleOpenAbout = (): void => {
        setIsOpenAbout(!isOpenAbout);
    };

    return (
        <>
            <nav className="bg-primary text-white p-2 font-JanatWT w-full  fixed top-0 left-0 z-20 ">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                        <div className="flex justify-center">
                            <button onClick={handleOpen} className="hover:text-secondry">
                                <Image src={isOpen ? HamburgerMenuHover : HamburgerMenu} width={20} height={20} className="w-[20px] h-[20px]" alt="Menu" />
                            </button>
                        </div>
                        <div className="order-4 lg:order-none col-span-3 lg:col-auto flex justify-center">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                className="w-full max-w-md text rounded-lg p-2 outline-none bg-[#F1EEFF] text-[#000000]"
                                placeholder="كيف يمكنني مساعدتك ؟"
                            />
                        </div>
                        <div className="flex gap-1 justify-center">
                            <span>فروعنا</span>
                            <span>|</span>
                            <span className="flex items-center gap-1">
                                AR
                                <FaRegArrowAltCircleDown />
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <Image src="/Logo.png" alt="logo" width={150} height={150} className="h-[50px]" />
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="bg-primary w-full p-2 min-h-screen mt-[154px] lg:mt-[98px] md:min-h-[50vh] font-JanatLT"
                        initial={{ x: "100%" }}
                        animate={{ x: "0" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: .5 }}
                    >
                        <div className="container mx-auto p-4 text-white">
                            <div className="flex flex-col space-y-4">
                                <Link href="#" className="flex justify-between text-2xl hover:text-secondry">
                                    <IoIosArrowForward />
                                    Services
                                </Link>
                                <Link href="#" className="flex justify-between text-2xl hover:text-secondry">
                                    <IoIosArrowForward />
                                    Corporate
                                </Link>
                                <Link href="#" className="flex text-2xl justify-between hover:text-secondry">
                                    <IoIosArrowForward />
                                    News & insights
                                </Link>
                                <button onClick={handleOpenAbout} className="flex justify-between text-2xl hover:text-secondry">
                                    <IoIosArrowForward />
                                    About
                                </button>
                                <AnimatePresence>
                                    {isOpenAbout && (
                                        <motion.nav className="bg-primary font-JanatLT  w-full p-2 fixed  left-0 right-0 bottom-0 min-h-screen md:min-h-[50vh]" initial={{ y: "-100%" }} animate={{ y: "0" }} exit={{ y: "-100%" }}
                                            transition={{ duration: .5 }}>
                                            <div className="container mx-auto p-4 text-white">
                                                <div className="flex flex-col space-y-6">
                                                    <button className="flex gap-2 items-center justify-end text-2xl" onClick={handleOpenAbout}>
                                                        Back
                                                        <IoIosArrowBack />
                                                    </button>
                                                    <h2 className="text-3xl text-left">About</h2>
                                                   <h3 className="text-2xl text-left hover:text-secondry"> People</h3>
                                                    <Link href="#" className="flex justify-end text-2xl hover:text-secondry">
                                                        Join Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.nav>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
