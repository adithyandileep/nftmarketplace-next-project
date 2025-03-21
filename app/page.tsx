import Image from "next/image";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import {
  PiRocketLaunch,
  PiPaintBrushThin,
  PiBasketballThin,
  PiMusicNotesThin,
  PiCameraThin,
  PiVideoCameraThin,
  PiPlanetThin,
  PiMagicWandThin,
  PiCardsThin,
} from "react-icons/pi";
import Text from "@/components/Text";
import TopCreators from "@/components/TopCreators";
import CategoryCard from "@/components/CategoryCard";
import NftCard from "@/components/NftCard";

const Home = () => {
  return (
    <main className="lg:mt-25 mt-[54px]">
      {/* HERO SECTION */}
      <section className="sm:py-20 bg-pro flex justify-center items-center py-10 w-screen">
        <div className="lg:w-[980px] sm:w-[620px] sm:grid-cols-2 grid grid-cols-1 gap-6 items-center text-pro w-[315px]">
          {/* Heading & Paragraph */}
          <div className="sm:col-span-1 sm:row-span-1">
            <Text
              heading="Discover digital art & Collect NFTs"
              paragraph="NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists."
            />
          </div>

          {/* HERO-Gif */}
          <div className="lg:h-[380px] sm:col-span-1 sm:row-span-3 sm:ms-4 relative h-[315px]">
            <Image fill alt="user-image" src="/heroanimation.gif" />
          </div>

          {/* Get Started Button */}
          <button className="sm:row-span-1 sm:w-[224px] btn px-[50px] h-15 text-[16px] hover:scale-95 duration-300 transition-all cursor-pointer">
            <PiRocketLaunch className="fill-current w-5 h-5 mr-2" />
            <span className="font-semibold">Get Started</span>
          </button>

          {/* Milestones Count */}
          <div className="lg:w-[440px] sm:col-span-1 sm:row-span-1 flex justify-between w-full h-[57px]">
            <div className="h-full">
              <p className="lg:text-[28px] leading-[160%] text-[24px] font-mono font-bold">
                240k+
              </p>
              <p className="lg:text-[20px] font-light leading-[140%] text-[16px]">
                Total Sale
              </p>
            </div>
            <div className="h-full">
              <p className="lg:text-[28px] leading-[160%] text-[24px] font-mono font-bold">
                100k+
              </p>
              <p className="lg:text-[20px] font-light leading-[140%] text-[16px]">
                Auctions
              </p>
            </div>
            <div className="h-full">
              <p className="lg:text-[28px] leading-[160%] text-[24px] font-mono font-bold">
                240k+
              </p>
              <p className="lg:text-[20px] font-light leading-[140%] text-[16px]">
                Artists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="flex bg-pro flex-col items-center justify-center py-10 w-screen space-y-[40px]">
        {/* Heading & Paragraph */}
        <div className="lg:w-[980px] sm:w-[620px] w-[315px] text-pro">
          <Text
            heading="Trending Collection"
            paragraph="Checkout our weekly updated trending collection."
          />
        </div>

        <div className="lg:w-[980px] lg:grid-cols-3 sm:w-[620px] sm:grid-cols-2 sm:gap-7.5 w-[315px] text-pro grid grid-cols-1">
          <div className="space-y-[15px] w-full">
            <div className="w-full grid gap-4 grid-cols-3">
              <div className="rounded-[20px] col-span-3 w-full h-[315px] relative">
                <Image fill alt="user-image" src="/mrfox-1.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-2.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-3.png" />
              </div>
              <div className="rounded-[20px] h-[95px] cta flex items-center justify-center">
                <p className="font-mono font-bold text-[16px]">1025+</p>
              </div>
            </div>
            <div className="space-y-[10px] w-full">
              <div>
                <p className="text-[22px] font-semibold leading-[140%]">
                  DSGN Animals
                </p>
              </div>
              <div className=" flex space-x-[12px]">
                <div className="rounded-full w-6 h-6 bg-[url('/mrfox-avatar.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px]">MrFox</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block space-y-[15px] w-full hidden">
            <div className="w-full grid gap-4 grid-cols-3">
              <div className="rounded-[20px] col-span-3 w-full h-[315px] relative">
                <Image fill alt="user-image" src="/mrfox-1.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-2.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-3.png" />
              </div>
              <div className="rounded-[20px] h-[95px] cta flex items-center justify-center">
                <p className="font-mono font-bold text-[16px]">1025+</p>
              </div>
            </div>
            <div className="space-y-[10px] w-full">
              <div>
                <p className="text-[22px] font-semibold leading-[140%]">
                  DSGN Animals
                </p>
              </div>
              <div className=" flex space-x-[12px]">
                <div className="rounded-full w-6 h-6 bg-[url('/mrfox-avatar.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px]">MrFox</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block space-y-[15px] w-full hidden">
            <div className="w-full grid gap-4 grid-cols-3">
              <div className="rounded-[20px] col-span-3 w-full h-[315px] relative">
                <Image fill alt="user-image" src="/mrfox-1.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-2.png" />
              </div>
              <div className="rounded-[20px] w-full h-[95px] relative">
                <Image fill alt="user-image" src="/mrfox-3.png" />
              </div>
              <div className="rounded-[20px] h-[95px] cta flex items-center justify-center">
                <p className="font-mono font-bold text-[16px]">1025+</p>
              </div>
            </div>
            <div className="space-y-[10px] w-full">
              <div>
                <p className="text-[22px] font-semibold leading-[140%]">
                  DSGN Animals
                </p>
              </div>
              <div className=" flex space-x-[12px]">
                <div className="rounded-full w-6 h-6 bg-[url('/mrfox-avatar.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px]">MrFox</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="flex bg-pro justify-center py-10 w-screen">
        <div className="lg:w-[980px] sm:grid sm:grid-cols-2 sm:gap-8 sm:w-[620px] sm:space-y-0 text-pro w-[315px] space-y-10">
          {/* Heading & Paragraph */}

          <div className="sm:col-span-1 sm:order-1">
            <Text
              heading="Top Creators"
              paragraph="Checkout Top Rated Creators on the NFT Marketplace"
            />
          </div>

          {/* Top Creators */}
          <TopCreators />

          <div className="sm:col-span-1 sm:flex sm:items-end sm:justify-end sm:order-2">
            <button className="sm:w-[250px] btn-litee px-[50px] h-15 w-[315px] items-center text-[16px] hover:scale-95 duration-300 transition-all cursor-pointer">
              <PiRocketLaunch className="t-cta fill-current w-5 h-5 mr-2" />
              <span className="font-semibold">Get Started</span>
            </button>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="flex bg-pro justify-center py-[40px] w-screen">
        <div className="lg:w-[980px] sm:w-[620px] text-pro w-[315px] space-y-[40px]">
          {/* Heading & Paragraph */}
          <Text heading="Browse Categories" paragraph="" />
          {/* Category Cards */}
          <div className="sm:grid-cols-4 grid grid-cols-2 gap-4.5">
            <CategoryCard
              image="/categories/art.png"
              icon={PiPaintBrushThin}
              label="Art"
            />
            <CategoryCard
              image="/categories/collectibles.png"
              icon={PiCardsThin}
              label="Collectibles"
            />
            <CategoryCard
              image="/categories/music.png"
              icon={PiMusicNotesThin}
              label="Music"
            />
            <CategoryCard
              image="/categories/photography.png"
              icon={PiCameraThin}
              label="Photography"
            />
            <CategoryCard
              image="/categories/video.png"
              icon={PiVideoCameraThin}
              label="Video"
            />
            <CategoryCard
              image="/categories/utility.png"
              icon={PiMagicWandThin}
              label="Utility"
            />
            <CategoryCard
              image="/categories/sport.png"
              icon={PiBasketballThin}
              label="Sport"
            />
            <CategoryCard
              image="/categories/virtual-worlds.png"
              icon={PiPlanetThin}
              label="Virtual Worlds"
            />
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="bg-pro flex justify-center pt-[40px] pb-[60px] w-screen">
        <div className="lg:w-[980px] sm:w-[620px] sm:grid sm:space-y-0 sm:grid-cols-2 sm:gap-8 text-pro w-[315px] space-y-10">
          {/* Heading & Paragraph */}
          <div className="sm:col-span-1 sm:order-1">
            <Text
              heading="Discover More NFTs"
              paragraph="Explore new trending NFTs"
            />
          </div>

          <div className="lg:grid-cols-3 sm:grid-cols-2 sm:col-span-2 sm:order-3 sm:gap-5 sm:space-y-0 grid grid-cols-1 w-full space-y-5">
            <NftCard />
          </div>
          <div className="sm:col-span-1 sm:flex sm:items-end sm:justify-end sm:order-2">
            <button className="sm:w-[250px] btn-litee px-[50px] h-15 w-full items-center text-[16px] hover:scale-95 duration-300 transition-all cursor-pointer">
              <FaRegEye className="t-cta fill-current w-5 h-5 mr-2" />
              <span className="font-semibold"> See All</span>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex bg-pro justify-center py-[40px] w-screen">
        <div className="lg:w-[980px] sm:w-[620px] text-pro w-[315px] space-y-10">
          {/* Heading & Paragraph */}
          <Text
            heading="How It Works"
            paragraph="Find out how to get started"
          />

          <div className="sm:grid-cols-3 grid grid-cols-1 gap-4 w-full">
            <div className="lg:pb-8 sm:flex-col sm:pe-0 sm:pt-0 sm:pb-6 gap-0 flex flex-row w-full py-4 pe-3 bg-litee rounded-[20px] items-center justify-center">
              <div className="lg:w-45 lg:h-45 sm:w-35 sm:h-35 w-30 h-30 pt-[-20px] relative">
                <Image src="/howitworks.png" alt="image" fill />
              </div>
              <div className="lg:w-50 sm:flex sm:flex-col sm:w-35 items-center justify-center w-40 space-y-[10px]">
                <div>
                  <p className="lg:text-[20px] font-semibold leading-normal text-[16px]">
                    Setup Your wallet
                  </p>
                </div>
                <div>
                  <p className="sm:text-center leading-normal text-[12px]">
                    Set up your wallet of choice. Connect it to the NFT market
                    by clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pb-8 sm:flex-col sm:pe-0 sm:pt-0 sm:pb-6 gap-0 flex flex-row w-full py-4 pe-3 bg-litee rounded-[20px] items-center justify-center">
              <div className="lg:w-45 lg:h-45 sm:w-35 sm:h-35 w-30 h-30 pt-[-20px] relative">
                <Image src="/howitworks.png" alt="image" fill />
              </div>
              <div className="lg:w-50 sm:flex sm:flex-col sm:w-35 items-center justify-center w-40 space-y-[10px]">
                <div>
                  <p className="lg:text-[20px] font-semibold leading-normal text-[16px]">
                    Setup Your wallet
                  </p>
                </div>
                <div>
                  <p className="sm:text-center leading-normal text-[12px]">
                    Set up your wallet of choice. Connect it to the NFT market
                    by clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pb-8 sm:flex-col sm:pe-0 sm:pt-0 sm:pb-6 gap-0 flex flex-row w-full py-4 pe-3 bg-litee rounded-[20px] items-center justify-center">
              <div className="lg:w-45 lg:h-45 sm:w-35 sm:h-35 w-30 h-30 pt-[-20px] relative">
                <Image src="/howitworks.png" alt="image" fill />
              </div>
              <div className="lg:w-50 sm:flex sm:flex-col sm:w-35 items-center justify-center w-40 space-y-[10px]">
                <div>
                  <p className="lg:text-[20px] font-semibold leading-normal text-[16px]">
                    Setup Your wallet
                  </p>
                </div>
                <div>
                  <p className="sm:text-center leading-normal text-[12px]">
                    Set up your wallet of choice. Connect it to the NFT market
                    by clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="flex bg-pro justify-center py-[40px] w-screen">
        <div className="lg:p-14 lg:w-[980px] sm:w-[620px] sm:grid-cols-2 sm:p-7 sm:bg-[#3b3b3b] grid grid-cols-1 items-center justify-center text-pro w-[315px] gap-[30px] rounded-[20px]">
          <div className="sm:h-full relative w-full h-[250px] rounded-[20px]">
            <Image fill alt="subscribe-cover" src="/subscribe.png" />
          </div>
          <div className="lg:space-y-15 sm:space-y-5 space-y-10 w-full">
            {/* Heading & Paragraph */}
            <Text
              heading="Join Our Weekly Digest"
              paragraph="Get exclusive promotions & updates straight to your inbox."
            />

            <div className="space-y-[16px]">
              <input
                className="w-full h-[46px] px-5 py-[16px] bg-white rounded-[20px] placeholder:text-[#858584] border-[1px] border-[#858584]"
                type="email"
                placeholder="Enter Your Email Address"
              />
              <button className="btn px-[50px] h-[46px] w-full items-center text-[16px] hover:scale-95 duration-300 transition-all cursor-pointer">
                <VscMail className="fill-current w-5 h-5 mr-2" />
                <span className="font-semibold">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
