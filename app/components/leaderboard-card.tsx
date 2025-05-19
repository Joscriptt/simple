"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  name: string;
  sessions: number;
  avatar: string;
  initials: string;
};

const users: User[] = [
  {
    name: "Lily",
    sessions: 8,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "L",
  },
  {
    name: "Anna",
    sessions: 7,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "A",
  },
  {
    name: "Jessie",
    sessions: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "J",
  },
  {
    name: "Stephanie",
    sessions: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "S",
  },
];

export function LeaderboardCard() {
  const [isHovered, setIsHovered] = useState(false);

  // Define the positions for each item
  // When hovered, we'll shuffle these positions
  const positions = [0, 1, 2, 3];
  const hoveredPositions = [3, 0, 1, 2]; // First goes to bottom, middle goes to top, etc.

  return (
    <div
      className="bg-white rounded-3xl bg-gradient-to-b from-white from-40% hover:to-[#fdeeee] to-[#fbf3f3] transition-colors ease-in-out duration-500 p-2.5 col-span-12 md:col-span-4 border border-neutral-100  cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 mb-4 ">
        {users.map((user, index) => {
          // Calculate the position based on hover state
          const position = isHovered
            ? hoveredPositions[index]
            : positions[index];

          // Calculate y position based on the current position
          const yPosition = position * 60; // 60px spacing between items

          return (
            <motion.div
              key={user.name}
              className="absolute w-full"
              initial={{ y: index * 60 }}
              animate={{
                y: yPosition,
                zIndex: isHovered
                  ? position === 0
                    ? 4
                    : 4 - position
                  : 4 - index,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
            >
              <div className="flex items-center justify-between p-1 px-2.5 pl-4 border rounded-full border-rose-900/5">
                <div className="">
                  <h3 className=" text-rose-900">{user.name}</h3>
                  <motion.p
                    className="text-gray-500 text-xs"
                    animate={{
                      opacity: isHovered && position === 0 ? [1, 0, 1] : 1,
                      scale: isHovered && position === 0 ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {isHovered && position === 0
                      ? user.sessions + 2
                      : user.sessions}{" "}
                    SESSIONS
                  </motion.p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div>
                    <Image
                      src="/assets/room.jpg"
                      alt="Anna"
                      width={140}
                      height={180}
                      className="object-cover size-8 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <h2 className="text-lg font-display text-rose-900 mb-2">
        Rise Through the Leaderboards
      </h2>
      <p className="text-sm text-gray-600">
        Monitor your meditation progress, achieve milestones, and rise to the
        top of the leaderboard with a consistent practice.
      </p>
    </div>
  );
}
