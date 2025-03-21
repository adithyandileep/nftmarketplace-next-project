"use client";
import { creators } from "@/data/creators";
import Image from "next/image";
import React, { useEffect, useState } from "react";


type Creator = {
  id: number;
  name: string;
  score: number;
  volume: string;
  dp: string;
};


const TopCreators = () => {

  const [topCreators, setTopCreators] = useState<Creator[]>([]);

  useEffect(() => {
    const updateTopCreators = () => {
      const sortedCreators = [...creators].sort((a, b) => b.score - a.score);
      const count = window.innerWidth >= 1024 ? 12 : 6;
      setTopCreators(sortedCreators.slice(0, count));
    };
    updateTopCreators();
    window.addEventListener("resize", updateTopCreators);
    return () => window.removeEventListener("resize", updateTopCreators);
  }, []);

  return (
    <div className="lg:grid-cols-4 sm:order-3 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 space-y-5">
      {topCreators.map((x, index) => (
        <div
          key={index}
          className="lg:flex-col lg:space-x-0 lg:space-y-5 items-center justify-center space-x-5 bg-litee rounded-[20px] flex px-5 py-5"
        >
          <div className="lg:h-30 lg:w-30 relative h-15 w-15 rounded-full">
            <Image className="object-cover" alt="profile" fill src={x.dp} />
          </div>
          <div className="lg:space-y-[5px] lg:flex lg:flex-col lg:text-center space-y-[2px]">
            <div>
              <p className="text-[22px] font-semibold leading-[140%]">
                {x.name}
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[16px] cap leading-[140%]">
                Total Sales:
              </span>
              <p className="font-mono text-[16px] leading-[140%]">{x.volume}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCreators;
