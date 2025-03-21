import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";

const NavBar = () => {
  const navLinks = [
    { href: "/marketplace", text: "Marketplace" },
    { href: "/rankings", text: "Rankings" },
    { href: "/wallet", text: "Connect a wallet" },
  ];

  return (
    <nav className="fixed z-50 top-0 w-screen bg-pro flex items-center justify-between h-[54px] lg:h-25 py-4 px-8 sm:py-[15px] sm:px-[50px] md:py-[20px]">
      {/* Logo with optimized Image component */}
      <Link 
        href="/" 
        className="relative block h-6 w-[182.56px] lg:h-8 lg:w-[243.41px] hover:scale-95 transition-all duration-300"
      >
        <Image
          src="/logo.svg"
          fill
          alt="Company Logo"
          priority
          sizes="(max-width: 1024px) 182.56px, 243.41px"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-5 text-pro">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 font-semibold hover:scale-95 transition-all duration-300"
          >
            {link.text}
          </Link>
        ))}
        
        <button 
          className="btn px-7.5 h-15 w-38 text-[16px] hover:scale-95 duration-300 transition-all cursor-pointer"
          aria-label="Sign up"
        >
          <GoPerson className="w-5 h-5 mr-2" />
          <span className="font-semibold">Sign Up</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-pro"
        aria-label="Open navigation menu"
      >
        <HiOutlineBars3BottomRight className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default NavBar;



// import Image from "next/image";
// import Link from "next/link";
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";
// import { GoPerson } from "react-icons/go";

// const NavBar = () => {
//   const navLinks = [
//     { href: "/marketplace", text: "Marketplace" },
//     { href: "/rankings", text: "Rankings" },
//     { href: "/wallet", text: "Connect a wallet" },
//   ];

//   return (
//     <nav className="fixed z-50 top-0 w-screen bg-pro flex items-center justify-between h-[54px] lg:h-25 py-4 px-8 sm:py-[15px] sm:px-[50px] md:py-[20px]">
//       {/* Logo with optimized Image component */}
//       <Link 
//         href="/" 
//         className="relative block h-6 w-[182.56px] lg:h-8 lg:w-[243.41px] hover:scale-95 transition-all duration-300"
//       >
//         <Image
//           src="/logo.svg"
//           fill
//           alt="Company Logo"
//           priority
//           sizes="(max-width: 1024px) 182.56px, 243.41px"
//         />
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center gap-5 text-pro">
//         {navLinks.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className="px-4 font-semibold hover:scale-95 transition-all duration-300"
//           >
//             {link.text}
//           </Link>
//         ))}
        
//         <button 
//           className="ml-4 px-6 py-2 bg-transparent border-2 border-pro rounded-lg hover:scale-95 transition-all duration-300 flex items-center"
//           aria-label="Sign up"
//         >
//           <GoPerson className="w-5 h-5 mr-2" />
//           <span className="font-semibold">Sign Up</span>
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <button 
//         className="lg:hidden text-pro"
//         aria-label="Open navigation menu"
//       >
//         <HiOutlineBars3BottomRight className="h-6 w-6" />
//       </button>
//     </nav>
//   );
// };

// export default NavBar;