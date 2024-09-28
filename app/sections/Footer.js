import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-rectangle.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center md:p-16 p-4 py-16 border-t-[1px] border-solid border-[#e6e6e6]">
      <Image src={logo} className="h-12 w-52" />

      <div className="ml-2 flex flex-row justify-center md:justify-start items-start">
        <Link href="https://www.linkedin.com/company/girlscript-foundation/">
          <Image
            src={linkedin}
            className="h-6 w-6 rounded-md grayscale hover:grayscale-0"
          />
        </Link>
        <Link href="https://x.com/girlscript1">
          <Image
            src={twitter}
            className="h-6 w-6 rounded-md ml-4 grayscale hover:grayscale-0"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
