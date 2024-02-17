"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/data";
import Link from "next/link";
import Button from "./UI/Button";
import { X } from "@phosphor-icons/react";

type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  let newPathName = "";
  let wHeight = null;
  let wWidth = null;

  // if (window !== undefined) {
  //   wHeight = window.innerHeight;
  //   wWidth = window.innerWidth;
  // }
  // const [dimentions, setDimentions] = useState({
  //   height: wHeight,
  //   width: wWidth,
  // });
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimentions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //     if (dimentions.width > 768 && open) {
  //       setOpen(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   // console.log(dimentions.width)
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
  const [open, setOpen] = useState(false);
  return (
    <header role="banner" className="mx-4 py-10 lg:mx-0">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-[18px] font-light uppercase text-gray-700"
          >
            Zulma{" "}
            <span className="font-semibold uppercase text-gray-500">
              fashion
            </span>
          </Link>
        </div>
        <nav role="navigation" className="hidden md:flex">
          <ul role="list" className="flex gap-x-5">
            {navLinks.map((link) => (
              <li
                role="listitem"
                key={link.title}
                className="text-xs tracking-[2px] text-gray-700 first-letter:capitalize"
              >
                <Link
                  href={link.url}
                  className="before:origin-[100%, 50%] before:scale-y-[1 ] before:scale-z-[1] hover:before:scale-z-[1] relative pb-2 uppercase tracking-widest before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-purple-600 before:transition-all before:duration-300 before:ease-in-out before:will-change-transform before:content-[''] hover:before:scale-x-[1] hover:before:scale-y-[1]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button type="button" onClick={() => setOpen(true)}>
            Menu
          </button>
        </div>
      </div>
      <Transition.Root show={open} as="div">
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition-all ease-in-out duration-500 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full "
                  leave="transform transition-all ease-in-out duration-500 sm:duration-500"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-8 py-6 sm:px-12">
                        <div
                          className="flex flex-col
                         items-start justify-between"
                        >
                          <div className="flex justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Menu
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:to-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only"></span>
                                <X
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                  size={32}
                                />
                              </button>
                            </div>
                          </div>
                          <div className="mt-20">
                            <div className="flow-root">
                              <nav role="navigation" className="">
                                <ul
                                  role="list"
                                  className="flex flex-col gap-y-12"
                                >
                                  {navLinks.map((link) => (
                                    <li
                                      role="listitem"
                                      key={link.title}
                                      className="text-xs first-letter:capitalize"
                                    >
                                      <Link
                                        href={link.url}
                                        className="before:origin-[100%, 50%] before:scale-y-[1 ] before:scale-z-[1] hover:before:scale-z-[1] relative pb-2 uppercase tracking-widest before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-purple-600 before:transition-all before:duration-300 before:ease-in-out before:will-change-transform before:content-[''] hover:before:scale-x-[1] hover:before:scale-y-[1]"
                                      >
                                        {link.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </nav>
                            </div>
                          </div>
                          <div className="my-6 w-full border-t-[1px] border-gray-300 py-6">
                            <Button
                              title="contac us"
                              btnType="button"
                              buttonStyles="bg-violet-500 block w-full text-white first-letter:capitalize"
                              isDisabled={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Navbar;
