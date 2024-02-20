"use client";

import { footerLinks } from "@/data/data";
import {
  InstagramLogo,
  MapPin,
  MetaLogo,
  Phone,
  PinterestLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="info" className="bg-gray-50 py-20">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 gap-y-5 md:gap-y-0 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-[16px] font-semibold text-gray-700">
            ZULMA <span className="font-light text-gray-500 uppercase">store</span>
          </Link>
          <div className="mt-2 flex flex-col items-center gap-y-2 md:items-start">
            <div className="flex justify-center gap-x-1">
              <MapPin size={18} weight="fill" className="fill-violet-500"/>
              <p className="text-xs text-slate-500">Jalapa, Nicaragua.</p>
            </div>
            <div className="flex justify-center gap-x-1">
              <Phone size={18} weight="fill" className="fill-violet-500"/>
              <p className="text-xs text-slate-500">(505) 2222 4444</p>
            </div>
          </div>
        </div>
        {footerLinks.map((link) => (
          <div
            className="flex flex-col items-center md:items-start"
            key={link.title}
          >
            <ul className="text-sm font-semibold capitalize text-gray-700">
              <li>{link.title}</li>
            </ul>
            <div className="">
              {link.links.map((navlink) => (
                <ul key={navlink.title}>
                  <li className="flex flex-col items-center text-sm text-gray-500 capitalize md:items-start">
                    <Link href={navlink.url}>{navlink.title}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center gap-y-3 md:items-end">
          <h4 className="text-xs font-semibold text-gray-700 md:self-end">
            Síguenos en Redes Sociales
          </h4>
          <div className="flex justify-center gap-x-4 lg:justify-end">
            <div className="cursor-pointer">
              <Link href="https://twitter.com/">
                <TwitterLogo size={24} color="#8b5cf6" weight="fill" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.facebook.com/">
                <MetaLogo size={24} color="#8b5cf6" weight="fill" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.instagram.com/">
                <InstagramLogo size={24} color="#8b5cf6" weight="fill" />
              </Link>
            </div>
            {/* <div className="cursor-pointer">
              <Link>
                <PinterestLogo size={24} color="#8b5cf6" weight="fill" />
              </Link>
            </div> */}
          </div>
          <div className="text-body mt-2 text-xs font-light md:mt-5 lg:hidden">
            {new Date().getFullYear()} &copy; Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
