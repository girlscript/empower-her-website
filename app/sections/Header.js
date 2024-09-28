import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-rectangle.png";

const Header = () => {
  return (
    <div className="fixed bg-white top-0 w-full flex flex-row md:justify-between justify-center items-center p-4 z-10">
      <Image src={logo} className="h-12 w-52" />
      <div className="md:flex flex-row justify-between items-center hidden">
        <Link href="#home" className="mr-8">
          Home
        </Link>
        <Link href="#about" className="mr-8">
          About
        </Link>
        <Link href="#guides" className="mr-8">
          Guides
        </Link>
        <Link href="#contact-us" className="mr-8">
          Contact Us
        </Link>
        <Link
          href="https://bit.ly/EmpowerHerGirlScript"
          className="bg-black text-white p-4 px-6 text-xs rounded-xl"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
