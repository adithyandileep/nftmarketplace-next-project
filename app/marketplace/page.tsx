"use client";
import NftCard from "@/components/NftCard";
import Text from "@/components/Text";
import { nftData } from "@/data/nftData";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredNfts = nftData
    .map((nft) => ({
      ...nft,
      isExactMatch: nft.name.toLowerCase() === searchQuery.toLowerCase(),
    }))
    .filter((nft) => nft.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const isExactMatchA = a.name.toLowerCase() === searchQuery.toLowerCase();
      const isExactMatchB = b.name.toLowerCase() === searchQuery.toLowerCase();

      if (isExactMatchA && !isExactMatchB) return -1; // Move A up
      if (!isExactMatchA && isExactMatchB) return 1; // Move B up
      return 0;
    });

  return (
    <main className="lg:mt-25 mt-[54px] bg-pro">
      <section className="flex justify-center py-10 w-screen">
        <div className="lg:w-[980px] sm:w-[620px] space-y-7 text-pro items-center w-[315px]">
          <Text
            heading="Browse Marketplace"
            paragraph="Browse through more than 50k NFTs on the NFT Marketplace"
          />

          <div className="h-15 w-full flex flex-row justify-between items-center px-5 border-2 border-[#3b3b3b] rounded-[20px]">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:ring-0 outline-none text-[16px] leading-normal w-full bg-transparent"
              type="text"
              placeholder="Search your favorite NFTs"
            />
            <BsSearch className="text-[24px]" />
          </div>
        </div>
      </section>

      <section className="bg-pro flex min-h-[100vh] justify-center items-center pb-10 w-screen">
        <div className="lg:w-[980px] sm:w-[620px] space-y-7 text-pro items-center w-[315px]">
          <div className="lg:grid-cols-3 sm:grid-cols-2 sm:col-span-2 sm:order-3 sm:gap-5 sm:space-y-0 grid grid-cols-1 w-full">
            <NftCard data={filteredNfts} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
