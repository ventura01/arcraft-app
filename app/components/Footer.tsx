"use client";

import { footerLinks } from "@/data/data";
import { InstagramLogo, MetaLogo, PinterestLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="info" className="bg-gray-50 py-20">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-[16px] font-light text-gray-700">
            ZULMA <span className="font-semibold text-gray-500">FASHION</span>
          </Link>
        </div>
        {footerLinks.map((link) => (
          <div key={link.title}>
            <ul className="text-sm font-semibold capitalize text-gray-900">
              <li>{link.title}</li>
            </ul>
            <div className="">
              {link.links.map((navlink) => (
                <ul key={navlink.title}>
                  <li className="text-sm text-gray-500 first-letter:capitalize">
                    <Link href={navlink.url}>{navlink.title}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-y-3 ">
          <h4 className="text-xs font-semibold md:self-end">
            Síguenos en Redes Sociales
          </h4>
          <div className="flex justify-center gap-x-4 lg:justify-end">
            <div className="cursor-pointer">
              <TwitterLogo size={24} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <MetaLogo size={24} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <InstagramLogo size={24} color="#1D5B79" weight="fill" />
            </div>
            <div className="cursor-pointer">
              <PinterestLogo size={24} color="#1D5B79" weight="fill" />
            </div>
          </div>
          <div className="text-body mt-5 text-xs font-light lg:hidden">
            {new Date().getFullYear()} &copy; Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
