"use client";

import Image from "next/image";
import Link from "next/link";
import { LeaderboardCard } from "./components/leaderboard-card";
import { GalleryDemo } from "./components/demo";
import { Cards } from "./components/cards";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/footer";

export default function Home() {
  const [toggleOpenIndex, setToggleOpenIndex] = useState<number | null>(null);

  type I = {
    title: string;
    answer: string;
  }[];

  const faq: I = [
    {
      title: "Is zen service completely free?",
      answer:
        "Yes, zen provides a free version with access to guided meditations, breathwork exercises, and mood tracking. For additional content and personalized features, you can upgrade to Joscript+.",
    },
    {
      title: "Do I need prior meditation experience?",
      answer:
        "No experience is necessary! Joscript is designed for both beginners and seasoned meditators. Our guided sessions make it simple to start your mindfulness journey.",
    },
    {
      title: "How much time should I dedicate to meditation?",
      answer:
        "Even 5 minutes a day can have a positive impact. Joscript offers quick sessions for busy schedules and longer practices for deeper relaxation when you have more time.",
    },
    {
      title: "What kind of support is available?",
      answer:
        "All users have access to our help center and email support. Premium plans include priority support with live chat, and Enterprise users receive a dedicated account manager and 24/7 assistance for urgent needs.",
    },
    {
      title: "How can I cancel my subscription?",
      answer:
        "You can manage or cancel your Joscript+ subscription anytime through your App Store or Google Play account settings.",
    },
    {
      title: "Can I use zen service without an internet connection?",
      answer:
        "Absolutely! You can download sessions to access them offline, making it convenient for travel or moments when you need peace without distractions.",
    },
   
  ];

  const toggleIndex = (index: number) => {
    setToggleOpenIndex(toggleOpenIndex === index ? null : index);
  };
  return (
    <main className="">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-fit bg-gradient-to-b from-white from-40% to-[#ffb5b5] md:rounded-b-4xl"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center">
            <p className="text-xs font-display  text-[#3D0000] bg-[#FFF0F0] mb-4 p-1.5 px-4 rounded-full w-fit  md:text-md my-28">
              Trusted by 100,000+ users
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl text-[#3D0000] md:text-6xl font-playwrite mb-6">
            Quiet the chaos
            <br />
            Discover Your Serenity
          </h1>
          <p className="lg:text-xl text-[#3D0000] mb-8 mx-auto xl:text-sm max-w-sm">
            Take a moment to pause, relax, and reconnect with yourself through
            quick and easy meditations.
          </p>
          <Link
            href="#get-started"
            className="bg-[#3D0000] text-white px-4 py-2 rounded-full font-display text-sm hover:bg-gray-800 transition-colors inline-block"
          >
            Get started
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/assets/hand.png"}
            width={1000}
            height={1000}
            alt="Hand"
            className="h-full  xl:h-[800px] object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="md:flex mx-auto p-5 text-center md:text-left items-center max-w-6xl md:justify-between justify-center mt-20">
        <h1 className="md:text-5xl text-2xl text-[#3D0000] text-center md:text-left">
          Discover tranquility, <br /> Wherever you are
        </h1>

        <p className="text-sm md:max-w-md text-[#986b6b] mt-4 md:mt-0">
          Find your calm amidst the chaos. Hush offers quick resets and deep
          meditations to help you breathe, relax, and regain balance whenever
          life feels overwhelming.
        </p>
      </section>
      {/* grid-cols-1 md:grid-cols-2 */}
      {/* Features Section */}
      <section className="py-20 bg-white mt-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-12  gap-8">
            {/* Card 1: Tilted Images */}
            <div className="bg-gradient-to-b from-white from-40% hover:to-[#fdeeee] to-[#fbf3f3] transition-colors ease-in-out duration-500 rounded-b-4xl rounded-3xl  border border-neutral-100 p-8 flex flex-col items-center group cursor-pointer col-span-12 md:col-span-6">
              <div className="relative flex justify-center items-center h-[220px] mb-6 w-full">
                {/* Left image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[90%] -translate-y-1/2 z-10 rotate-[-12deg] shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out group-hover:rotate-[-18deg]">
                  <Image
                    src="/assets/room1.jpeg"
                    alt="Beach meditation"
                    width={140}
                    height={180}
                    className="object-cover w-[100px] h-[140px] md:w-[140px] md:h-[180px]"
                  />
                </div>
                {/* Center image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rotate-[4deg] shadow-2xl rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out group-hover:rotate-[0deg]">
                  <Image
                    src="/assets/room.jpg"
                    alt="Room meditation"
                    width={140}
                    height={180}
                    className="object-cover w-[100px] h-[140px] md:w-[140px] md:h-[180px]"
                  />
                </div>
                {/* Right image */}
                <div className="absolute left-1/2 top-[54%] -translate-x-[12%] -translate-y-1/2 z-40 rotate-[16deg] shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out group-hover:rotate-[18deg]">
                  <Image
                    src="/assets/room3.jpg"
                    alt="Studio meditation"
                    width={140}
                    height={180}
                    className="object-cover w-[100px] h-[140px] md:w-[140px] md:h-[180px]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3D0000]">
                Cherish your favorite spots
              </h3>
              <p className="text-[#7D6161] text-sm">
                Capture and revisit your treasured meditation spots, whether
                it's a peaceful park, a calming beach, or your cozy sanctuary at
                home.
              </p>
            </div>

            {/* Card 2: Friendly Community */}
            <div className="bg-white   items-center group cursor-pointer bg-gradient-to-b from-white from-40% hover:to-[#fdeeee] to-[#fbf5f5] transition-colors ease-in-out duration-500  rounded-4xl  border border-neutral-100 p-8 flex flex-col  group  col-span-12 md:col-span-6">
              <div className="relative flex flex-col items-center justify-center w-full mb-6 mt-20">
                {/* Central avatar */}
                <div className="relative z-10 ">
                  <Image
                    src="https://images.unsplash.com/photo-1562124638-724e13052daf?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Community main"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-[#ffe4e4] shadow-lg object-cover"
                  />
                </div>
                {/* Circle avatars */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[220px] h-[160px]">
                    {/* Top */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12">
                      <Image
                        src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar 1"
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white shadow-md size-9 object-cover"
                      />
                    </div>
                    {/* Top right */}
                    <div className="absolute right-5 -top-4">
                      <Image
                        src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar 2"
                        width={44}
                        height={44}
                        className="rounded-full border-2 border-white shadow-md size-9 object-cover"
                      />
                    </div>
                    {/* Bottom right */}
                    <div className="absolute -right-4 bottom-[70px]">
                      <Image
                        src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar 3"
                        width={44}
                        height={44}
                        className="rounded-full border-2 border-white shadow-md size-9 object-cover"
                      />
                    </div>
                    {/* Bottom left */}
                    <div className="absolute -left-4 bottom-20">
                      <Image
                        src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar 4"
                        width={44}
                        height={44}
                        className="rounded-full border-2 border-white shadow-md size-9 object-cover"
                      />
                    </div>
                    {/* Top left */}
                    <div className="absolute left-5 -top-4">
                      <Image
                        src="https://images.unsplash.com/photo-1622930416578-c9db46ec6880?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar 5"
                        width={44}
                        height={44}
                        className="rounded-full border-2 border-white shadow-md size-9 object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Optional: Add subtle concentric circles for effect */}
                <div className="absolute left-1/2 top-[60px] -translate-x-1/2 z-0 pointer-events-none ">
                  <div
                    className="
                      w-[180px] h-[180px] rounded-full border-2 border-[#f9dede] opacity-60
                      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      transition-transform duration-500 ease-in-out
                      group-hover:scale-110
                    "
                    style={{ transitionDelay: "0ms" }}
                  />
                  <div
                    className="
                      w-[140px] h-[140px] rounded-full border-2 border-[#f9dede] opacity-40
                      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      transition-transform duration-700 ease-in-out
                      group-hover:scale-125
                    "
                    style={{ transitionDelay: "120ms" }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-9">
                <h3 className="text-xl font-semibold mb-2 text-[#3D0000]">
                  Join a friendly community
                </h3>
                <p className="text-[#7D6161] text-sm text-center">
                  Be part of a supportive community where you can connect, share
                  your journey, and inspire each other.
                </p>
              </div>
            </div>

            {/* Card 3: Climb in leaderboards */}

            <LeaderboardCard />

            {/* Card 4: Daily meditations tailored for you */}
            <div className="bg-white rounded-4xl shadow   p-8 flex flex-col items-center group cursor-pointer h-[424px]  col-span-12 md:col-span-8 relative overflow-hidden">
              <div className="flex justify-center mt-5 md:mt-0 -space-x-24 no-scrollbar">
                <div className="md:h-[26rem] h-[18rem]">
                  <Image
                    src="/assets/style.jpg"
                    width={280}
                    height={10}
                    className="object-cover h-full -rotate-[12deg] rounded-xl"
                    alt="Studio meditation"
                  />
                </div>
                <div className="md:h-[26rem] h-[19rem]">
                  <Image
                    src="/assets/style1.jpg"
                    width={280}
                    height={10}
                    className="object-cover -top-7 relative z-10 h-full  rounded-xl"
                    alt="Studio meditation"
                  />
                </div>
                <div className="md:h-[26rem] h-[18rem]">
                  <Image
                    src="/assets/style3.jpg"
                    width={280}
                    height={10}
                    className="object-cover h-full rotate-[12deg] rounded-xl"
                    alt="Studio meditation"
                  />
                </div>
              </div>

              {/* <div className="absolute  h-full left-0 right-0 bg-gradient-to-t  from-[#fdeeee] to-transparent" /> */}

              <div className="absolute bg-gradient-to-b h-44 z-30 from-transparent to-45% hover:to-[#fce8e8] to-[#fcefef] transition-colors ease-in-out duration-500 bottom-0 p-6 ">
                <h3 className="text-2xl font-display mb-2 text-[#3D0000] pt-10">
                  Personalized daily meditations just for you
                </h3>
                <p className="text-[#7D6161] text-[15px] font-display">
                  Explore tailored programs crafted to enhance sleep, reduce
                  stress, and boost focus. Each journey adapts to your growth,
                  ensuring you stay inspired and committed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}

      <GalleryDemo />

      {/* How it Works Section */}
      <section className=" rounded-4xl bg-gradient-to-b from-[#ffe0e0] from-5% to-white md:rounded-b-4xl mt-44">
        <div className=" w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl text-[#3D0000] md:text-6xl font-display mb-6">
                How it works
              </h1>
              <p className="lg:text-xl text-[#3D0000] mb-8 mx-auto xl:text-sm max-w-sm">
                Just a few moments of mindfulness can transform your day. Let
                Bloom guide you to relax, recharge, and thrive effortlessly.
              </p>
            </div>
            <div className="" />
          </div>
          <Cards />
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="blog" className="max-w-6xl mx-auto mt-72 ">
        <div className="md:flex justify-between my-10 max-w-6xl mx-auto gap-x-4">
          <h1 className="text-2xl md:text-5xl md:max-w-4xl text-center md:text-left font-display text-[#3D0000]">
            The zen Journal
          </h1>
          <p className="md:max-w-lg mt-2 md:mt-0 text-center md:text-left">
            Explore expert advice, mindfulness techniques, and guided exercises
            designed to bring harmony and tranquility to your daily life.
          </p>
        </div>

        <div className="border border-neutral-100 md:flex md:h-[554px] h-fit md:rounded-[3rem] overflow-hidden gap-12 mt-16  group cursor-pointer bg-gradient-to-b from-white from-40% hover:to-[#fdeeee] to-[#fbf5f5] transition-colors ease-in-out duration-500">
          <div>
            <Image
              src="/assets/modern.jpg"
              width={560}
              height={880}
              className="object-cover h-full w-full md:rounded-4xl"
              alt="Studio meditation"
            />
          </div>
          <div className="flex md:justify-center pl-6 md:pl-0 items-center ">
            <div className="flex justify-between flex-col md:h-96 py-3">
              <div>
                <p className="md:text-sm text-xs font-display  text-[#3D0000] bg-[#FFF0F0] mb-4 p-2 px-4 rounded-full w-fit  md:text-md my-4 md:font-semibold uppercase">
                  Latest Article
                </p>
                <h1 className="md:text-5xl text-xl text-[#3D0000]">
                  A Simple Habit for a Calmer Mind
                </h1>
              </div>
              <Link
                href="#get-started"
                className="bg-[#3D0000] text-white md:px-4 px-2 md:py-2.5 py-1.5 rounded-full font-display  md:font-semibold transition-colors inline-block w-fit mt-3"
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="notifications"
        className="md:grid grid-cols-3 items-center gap-6 max-w-6xl mx-auto mt-8"
      >
        <div className="group cursor-pointer  bg-gradient-to-b h-72 from-white from-40% hover:to-[#fdeeee] to-[#fbf5f5] transition-colors ease-in-out duration-500 rounded-2xl overflow-hidden">
          <Image
            src="/assets/style.jpg"
            width={370}
            height={880}
            className="object-cover h-52 w-full md:rounded-xl"
            alt="Studio meditation"
          />
          <p className="my-1 p-3 text-lg font-black  line-clamp-2">
            How Conscious Breathing Can Reduce
          </p>
        </div>
        <div className="group cursor-pointer  bg-gradient-to-b h-72 from-white from-40% hover:to-[#fdeeee] to-[#fbf5f5] transition-colors ease-in-out duration-500 rounded-2xl overflow-hidden">
          <Image
            src="/assets/style3.jpg"
            width={370}
            height={880}
            className="object-cover h-52 w-full md:rounded-xl"
            alt="Studio meditation"
          />
          <p className="my-1 p-3 text-lg font-black  line-clamp-2">
            Small Mindful Habits That Can Make a Big Difference
          </p>
        </div>
        <div className="group cursor-pointer  bg-gradient-to-b h-72 from-white from-40% hover:to-[#fdeeee] to-[#fbf5f5] transition-colors ease-in-out duration-500 rounded-2xl overflow-hidden">
          <Image
            src="/assets/hand.png"
            width={370}
            height={880}
            className="object-cover h-52 w-full md:rounded-xl"
            alt="Studio meditation"
          />
          <p className="my-1 p-3 text-lg font-black  line-clamp-2">
            How to Use Meditation for Better Sleep
          </p>
        </div>
      </section>

      <div className="my-20 flex justify-center">
        <div className="w-fit group">
          <a
            href="#get-started"
            className="bg-[#3D0000]  group-hover:bg-transparent group-hover:border group-hover:border-[#3D0000] border border-[#3D0000] group-hover:text-[#3D0000] text-white px-4 py-2.5 rounded-full font-display font-semibold transition-colors inline-block w-fit"
          >
            Read article
          </a>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto mt-8 p-9">
        <div className="text-center">
          <h1 className="text-5xl  font-display text-[#3D0000]">
            Frequently asked questions
          </h1>
          <p className="my-8">
            If you can't find what you are looking for don't hesitate to contact
            us.
          </p>
        </div>

        <motion.div
          id="settings"
          className="max-w-4xl mx-auto mt-28 h-[700px]"
          layout
        >
          {faq.map((questions, i) => (
            <motion.div key={i} className="mb-5" layout initial={false}>
              <motion.div
                onClick={() => toggleIndex(i)}
                className="flex justify-between items-center cursor-pointer border-b border-[#ffb5b5] pb-4"
                layout
              >
                <motion.h2 className="md:text-xl  text-[#3D0000]" layout>
                  {questions.title}
                </motion.h2>
                <div className="h-[28px] w-7 rounded-full bg-[#ffb5b5] relative flex items-center justify-center shrink-0 ml-2">
                  <div className="w-3 h-[2px] bg-[#3D0000] rounded-xl absolute" />
                  <motion.div
                    className="w-3 h-[2px] bg-[#3D0000] rounded-xl absolute"
                    animate={{ rotate: toggleOpenIndex === i ? 0 : 90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              <AnimatePresence initial={false}>
                {toggleOpenIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pt-5 pb-2"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="text-[#7D6161]">{questions.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="my-20 flex justify-center">
        <div className="w-fit group">
          <a
            href="#get-started"
            className="bg-[#3D0000]  group-hover:bg-transparent group-hover:border group-hover:border-[#3D0000] border border-[#3D0000] group-hover:text-[#3D0000] text-white px-4 py-2.5 rounded-full font-display font-semibold transition-colors inline-block w-fit"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// i want a smooth  animation like the transition once i click on it, it hides the questions.answer and the roate has to transform to a single line once its active and has to rotate back to cross if not active

// @c.a.r.i.s.21
