"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "Choose How You Feel",
    description:
      "Start by selecting your current mood—calm, stressed, or in need of focus. zen curates the perfect session for you.",
    mockup: "/assets/mockup.png",
  },
  {
    title: "Listen, Breathe, and Unwind",
    description:
      "Whether it's a guided meditation, soothing soundscape, or deep breathing session, zen helps you find your balance.",
    mockup: "/assets/mockup1.png",
  },
  {
    title: "Follow Your Progress",
    description:
      "Build a mindfulness habit with personalized streaks, mood tracking, and insights to help you grow..",
    mockup: "/assets/mockupp.png",
  },
];

export function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<number>();

  return (
    <div className=" mt-44 ">
      <div className=" ">
        {items.map((item, i) => (
          <div
            key={i}
            className="  w-full md:flex flex-col items-center h- md:flex-row md:justify-between md:max-w-4xl p-3"
          >
            <div
              onClick={() => {
                setActiveIndex(i);
                setSelectedTab(i);
              }}
              className={`w-full ${
                activeIndex === i ? "bg-white " : ""
              } p-3 rounded-2xl w-1/3 h-fit  `}
            >
              <h4 className="text-[#3D0000] font-black">{item.title}</h4>
              <p className="mt-2 text-sm text-[#7D6161]">{item.description}</p>
            </div>
            <div className="w-full flex justify-center  h-full ">
              <Image
                src={item.mockup!}
                width="100"
                height={30}
                alt={item.title}
                className={`   top-0 right-3 w-40 `}
              />
            </div>
            {/* <div className="absolute -bottom-3  w-[60%] right-0 bg-gradient-to-t from-[#ffffff] from-5% to-transparent z-30 h-[230px]" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// i want the 3 mockups to be there, but once i click on  the active one itrotates away like a rolling tyre
