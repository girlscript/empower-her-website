import Image from "next/image";

import profile from "@/assets/profile.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";
import Link from "next/link";

const Team = () => {
  return (
    <div id="team" className="w-full flex flex-col items-center md:p-16 p-4 py-16">
      <span className="text-4xl font-bold w-full text-left">Team</span>
      <span className="mt-4 w-full text-left">People who work with us!</span>

      <div className="w-full flex flex-wrap items-center mt-12 justify-between gap-y-16">
        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>

        <div className="shadow-custom-shadow md:w-[300px] w-full h-[360px] p-8 flex flex-col justify-center items-center rounded-lg">
          <Image src={profile} className="h-36 w-36 rounded-full" />
          <span className="mt-6 text-xl w-full text-center">Full Name</span>
          <span className="text-[#828282] w-full text-center text-sm">
            Position
          </span>
          <div className="mt-6 flex flex-row justify-center items-center">
            <Link href="#">
              <Image src={linkedin} className="h-6 w-6 rounded-md" />
            </Link>
            <Link href="#">
              <Image src={twitter} className="h-6 w-6 rounded-md ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
