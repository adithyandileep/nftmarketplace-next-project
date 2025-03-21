import { creators } from "@/data/creators";
import Image from "next/image"


const Rankings = () => {

  // // Automatically re-sort when creators update
  // const sortedCreators = [...creators].sort((a, b) => b.score - a.score);
  const sortedCreators = [...creators].sort((a, b) => b.score - a.score);

  return (
    <div className="w-full flex flex-col space-y-5">
      {sortedCreators.map((x, index) => (
        <div key={index} className="w-full py-[12px] px-5 rounded-[20px] bg-litee flex flex-row justify-between items-center">
          <div className="lg:bg-[#2b2b2b] sm:text-[16px] rounded-full w-[30px] h-[30px] flex justify-center items-center text-[12px] cap font-mono">{index+1}</div>
          <div className="lg:space-x-5 sm:w-[400px] sm:px-5 w-[300px] px-4.5 space-x-[12px] flex items-center">
            <div className="lg:w-15 lg:h-15 w-6 h-6 relative rounded-full object-cover">
              <Image fill alt="dp" src={x.dp} />
            </div>
            <div className="lg:text-[22px] text-[16px] sm:font-semibold">{x.name}</div>
          </div>
          <div className="sm:flex w-35 hidden font-mono text-[#00ac4f] text-[16px]">
            +1.41%
          </div>
          <div className="lg:flex w-[180px] text-[16px] hidden font-mono px-5">{x.sold}</div>
          <div className="sm:text-[16px] text-[12px] sm:w-25 w-25 font-mono">{x.volume}</div>
        </div>
      ))}
    </div>
  );
};

export default Rankings;
