'use client'

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};
const ButtonBack = (props: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="w-full bg-gray-300 text-xs text-gray-500 hover:bg-violet-500 hover:text-white py-3"
    >
      REGRESAR
    </button>
  );
};

export default ButtonBack;
