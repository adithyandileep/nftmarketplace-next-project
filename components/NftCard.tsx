"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { nftData } from "@/data/nftData";

type Data = {
  name: string;
  price: string;
  creator: string;
  dp: string;
  highbid: string;
};

const NftCard = ({ data }: { data?: Data[] }) => {
  const [displayData, setDisplayData] = useState<Data[]>([]);

  useEffect(() => {
    if (!data) {
      // If no data is passed, use default logic (for the first page)
      const updateData = () => {
        const count = window.innerWidth >= 640 && window.innerWidth < 1024 ? 2 : 3;
        setDisplayData(nftData.slice(0, count));
      };
      updateData();

      window.addEventListener("resize", updateData);
      return () => window.removeEventListener("resize", updateData);
    } else {
      // If data is passed (from another page), use that data
      setDisplayData(data);
    }
  }, [data]);

  return (
    <>
      {displayData.map((x, index) => (
        <div key={index} className="bg-litee rounded-[20px]">
          <div className="relative h-[230px] w-full overflow-hidden flex items-center justify-center rounded-t-[20px]">
            <Image
              className="object-cover"
              src="/distant-galaxy.png"
              fill
              alt="placeholder"
            />
          </div>
          <div className="p-5 space-y-[25px]">
            <div className="space-y-[5px]">
              <div>
                <p className="font-semibold text-[22px] leading-[140%]">
                  {x.name}
                </p>
              </div>
              <div className="space-x-[12px] flex">
                <div className="relative h-6 w-6 bg-white rounded-full">
                  <Image
                    className="object-cover"
                    alt="profile"
                    fill
                    src={x.dp}
                  />
                </div>
                <div>
                  <p className="font-mono font-thin leading-[140%] text-[17px]">
                    {x.creator}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="space-y-[8px]">
                <div>
                  <p className="text-[12px] font-mono cap leading-[110%]">
                    Price
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-mono leading-[110%]">
                    {x.price}
                  </p>
                </div>
              </div>
              <div className="space-y-[8px]">
                <div className="text-right">
                  <p className="text-[12px] font-mono cap leading-[110%]">
                    Highest Bid
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-mono leading-[110%]">
                    {x.highbid}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NftCard;
