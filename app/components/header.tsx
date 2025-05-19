"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { Home, Settings, Bell, User, Book } from "lucide-react";
import { RiCompass2Fill, RiMoneyDollarCircleFill } from "@remixicon/react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Send } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Book className="h-5 w-5" />,
    label: "features",
    href: "#home", // Updated
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "Blog",
    href: "#blog", // Updated
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Testimonials",
    href: "#settings", // Updated
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <RiMoneyDollarCircleFill className="h-5 w-5" />,
    label: "Pricing",
    href: "#profile", // Updated
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function Header() {
  const isPath = usePathname();

  const isBlog = isPath === "/blog";
  return (
    <motion.nav
      className={`p-2 rounded-2xl flex  ${
        isBlog ? "justify-between" : "justify-center"
      }  bg-gradient-to-b  border border-border/40 relative overflow-hidden`}
      initial="initial"
      whileHover="hover"
    >
      <div />
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item, index) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-2 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground shrink-0`}
                >
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-2 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  rotateX: 90,
                }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                >
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
      {isBlog && (
        <>
          {" "}
          <Link
            href={"/blog/create"}
            className="cursor-pointer border rounded-lg border-border/40 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 "
          >
            <Button
              variant={"outline"}
              size={"lg"}
              className="flex items-center gap-x-5 cursor-pointer bg-black text-white"
            >
              <Send /> <span className="font-black">Publish</span>
            </Button>
          </Link>
        </>
      )}
    </motion.nav>
  );
}
