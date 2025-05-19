import Link from "next/link";
import Image from "next/image";

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiThreadsFill,
  RiAppleFill,
  RiGooglePlayFill,
} from "@remixicon/react";

const navs = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Features",
    link: "#feature",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "How it works",
    link: "#how-itworks",
  },
];

export default function Footer() {
  const buttType = (type: "Apple" | "Google") => {
    return type;
  };

  return (
    <>
      <section className="max-w-6xl mx-auto mt-48">
        <div className="text-center">
          <h1 className="text-5xl  font-display text-[#3D0000]">
            Get started for free
          </h1>
          <p className="my-3">
            Start your free 3-month subscription from the links below.
          </p>
        </div>

        <div className="flex justify-center gap-x-4 max-w-4xl mx-auto mt-5 px-6">
          <button className="bg-[#3D0000] border-[#3D0000] border text-white rounded-full  flex gap-x-1 md:w-fit w-full items-center justify-center px-5 py-2 h-12 cursor-pointer">
            <RiAppleFill size={26} />
            <div className="flex flex-col items-start ">
              <p className="text-[9px]">Download on the</p>
              <small className="text-[16px] leading-4">
                {buttType("Apple") + " store"}
              </small>
            </div>
          </button>
          <button className="bg-[#3D0000] border-[#3D0000] border text-white rounded-full flex gap-x-1 md:w-fit  w-full items-center justify-center px-5 py-2.5 h-12 cursor-pointer">
            <RiGooglePlayFill size={26} />
            <div className="flex flex-col items-start ">
              <p className="text-[9px]">Download on the</p>
              <small className="text-[16px] leading-4">
                {buttType("Google") + " store"}
              </small>
            </div>
          </button>
        </div>
      </section>

      <div className="flex justify-center mt-28 md:-space-x-24 -space-x-48 no-scrollbar">
        <div className="md:h-[26rem] h-[18rem]">
          <Image
            src="/assets/style4.jpg"
            width={280}
            height={10}
            className="object-cover h-full md:-rotate-[12deg] -rotate-[3deg] rounded-xl"
            alt="Studio meditation"
          />
        </div>
        <div className="md:h-[26rem] h-[20rem]">
          <Image
            src="/assets/style3.jpg"
            width={280}
            height={10}
            className="object-cover -top-7 relative z-10 h-full  rounded-xl"
            alt="Studio meditation"
          />
        </div>
        <div className="md:h-[26rem] h-[18rem]">
          <Image
            src="/assets/style.jpg"
            width={280}
            height={10}
            className="object-cover h-full md:rotate-[12deg] rotate-[3deg] rounded-xl"
            alt="Studio meditation"
          />
        </div>
      </div>

      <footer
        id="profile"
        className="bg-gradient-to-b from-white from-10% to-[#f8cece] "
      >
        <div className="mt-24">
          <h1 className="text-[clamp(2rem,2rem+21vw,20rem)] text-[#3D0000] text-center font-mona font-extrabold">
            Joscript
          </h1>
          {/* <h1 className="text-[calc(8rem+5vw)] text-[#3D0000] text-center font-mona font-extrabold">
            bloom
          </h1> */}
        </div>
        <section className="max-w-4xl mx-auto px-11 mt-16 ">
          <div className="flex md:justify-between items-center md:items-start flex-col md:flex-row  ">
            <div className=" gap-x-4">
              <h2 className="text-2xl text-[#3D0000]  text-center md:text-left">
                Find your calm,
                <br /> one breathe at a time.{" "}
              </h2>
              <div className="flex justify-center md:justify-start gap-x-4 mt-8">
                <div className="size-14  rounded-full bg-white flex items-center justify-center">
                  <RiInstagramFill className="text-[#3D0000]" size={30} />
                </div>
                <div className="size-14  rounded-full bg-white flex items-center justify-center">
                  <RiFacebookCircleFill className="text-[#3D0000] size={30}" />
                </div>
                <div className="size-14  rounded-full bg-white flex items-center justify-center">
                  <RiThreadsFill className="text-[#3D0000]" size={30} />
                </div>
              </div>
            </div>
            <section className="md:flex gap-x-11 mt-9 md:mt-0 ">
              <div>
                <div>
                  <h1 className="text-xs font-black uppercase text-[#3D0000] text-center md:text-left">
                    Navigation
                  </h1>
                </div>
                <ul className="text-center md:text-left">
                  {navs.map((nav, i) => (
                    <Link key={i} href={nav.link}>
                      <li className="my-4 [#642E2E] ">{nav.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="  uppercase  text-xs font-black  text-[#3D0000] text-center md:text-left">
                  Support
                </h1>
              </div>
            </section>
          </div>
        </section>
        <div className="flex md:justify-between md:flex-row flex-col items-center max-w-4xl mx-auto mt-44 pb-11">
          <p>{new Date().getFullYear() + "  - Joscript @Joscript.com"}</p>

          <ul className="flex items-center gap-x-3.5 text-xs">
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
