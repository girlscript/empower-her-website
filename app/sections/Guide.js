import Link from "next/link";

const Guides = () => {
  return (
    <div
      id="guides"
      className="w-full flex flex-col items-center md:p-16 p-4 py-16"
    >
      <span className="text-4xl font-bold w-full text-left">
        Program Guides
      </span>
      <span className="mt-4 w-full text-left">
        Choose your preferred language to get started
      </span>

      <div className="w-full flex flex-wrap items-center mt-12 justify-between gap-y-16">
        <Link
          href="https://docs.google.com/document/d/1FosPVdnctOF0RpUR8sitfaVOMfDrccIGsWMFP4EPCLo/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">English</span>
          <span className="text-[#828282] w-full text-left text-sm">
            Get Started
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1YXOTJL75Pnsa2zX32vn_Xpzd1AMh6_tnsjLoL7QzCVU/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Hindi</span>
          <span className="text-[#828282] w-full text-left text-sm">
            शुरू हो जाओ
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1Mv-rPgofeGqhv1OQ7z1Q-p3WQxFGVFuKpCPiNx8qsVw/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Marathi</span>
          <span className="text-[#828282] w-full text-left text-sm">
            प्रारंभ करा
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/11W_WsmdmEHhlAuhW7x26cMFOcq6HAjF6Tjm2fB6w9zw/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Tamil</span>
          <span className="text-[#828282] w-full text-left text-sm">
            தொடங்குங்கள்
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1SdBtNtfT59q9MbrSHjXY-kD5JG_krw2TFVlVtQ5WE8c/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Malayalam</span>
          <span className="text-[#828282] w-full text-left text-sm">
            ആരംഭിക്കുക
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1VcDt7_nhALjRR5RFArrTvagEBrcRZuawLbneQuPC2wQ/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Kannada</span>
          <span className="text-[#828282] w-full text-left text-sm">
            ಪ್ರಾರಂಭಿಸಿ
          </span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/1HetZntJxIRBqX4QCFUjGfahoffIMQFpSKvYBOo30Dtc/edit?usp=share_link"
          className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-start rounded-lg"
        >
          <span className="mt-6 text-xl w-full text-left">Telugu</span>
          <span className="text-[#828282] w-full text-left text-sm">
            தொடங்குங்கள்
          </span>
        </Link>

        <div className="shadow-custom-shadow md:w-[400px] w-full h-[120px] p-8 flex flex-col justify-center items-center rounded-lg">
          <span className="text-md w-full text-center">Coming Soon In</span>
          <span className="text-md w-full text-center">More Languages</span>
        </div>

        <div className="md:w-[400px] w-full p-8 flex flex-col justify-center items-center rounded-lg"></div>
      </div>
    </div>
  );
};

export default Guides;
