import gsap, { Linear, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Menus } from "~/constants";
import LetterSplit from "~/components/features/LetterSplit";
import { SmoothScrollContext } from "~/src/contexts/SmoothScrollContext";

const Schedule = () => {
  gsap.registerPlugin(ScrollTrigger);
  const {scroll} = useContext(SmoothScrollContext);
  const schedule = useRef(null);
  const tab = useRef(null);

  useEffect(()=> {
    const q = gsap.utils.selector(schedule.current);
    gsap.set(q(".blue, .green"), {display: "none"});
  }, [])

  const colorChangeHandler = (e, obj) => {
    e.preventDefault();
    tab.current.querySelector(".active")?.classList.remove("active");
    e.currentTarget.classList.add("active");
    const q = gsap.utils.selector(schedule.current);
    const tl = gsap.timeline();

    tl.set(q(`.event`), {display: "none"}).set(q(`.${obj.name}`), {display: "flex"});
    
    if(obj.name == "blue") {
      tl.to(q(".bg-yellow"), {
        backgroundColor: `${obj.value}`,
        color: `${obj.value}`,
        ease: Power3.ease,
      }).to(q(".text-black"), {
        color: `#fff`,
        ease: Power3.ease,
      }, ">-0.5");
    } else {
      tl.to(q(".bg-yellow"), {
        backgroundColor: `${obj.value}`,
        color: `${obj.value}`,
        ease: Power3.ease,
      }).to(q(".text-black"), {
        color: `#000`,
        ease: Power3.ease,
      }, ">-0.5");
    }

    setTimeout(() => {
      scroll && scroll.update();
    }, 500);
  };

  return (
    <section
      className="schedule -mt-1 relative"
      ref={schedule}
      id={Menus[0].ref}
    >
      <div className="bg-yellow">
        <div className="grid grid-flex-row grid-cols-10 bg-white">
          <div className="col-span-5 bg-black pt-[100%] md:hidden"></div>
          <div className="col-span-5 md:col-span-2">
            <div className="relative media bg-white flex items-center pt-[100%] text-white">
              <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12">
                <p className="text-black font-callEightNegativeOT leading-5 mb-1 text-xs lg:text-sm">
                  VICE @ ART BASEL, <br /> MIAMI BEACH
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 hidden md:block">
            <div className="relative media bg-white flex items-center pt-[100%]">
              <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12">
                <p className="text-black leading-5 mb-1 text-xs lg:text-sm">
                  VICE @ ART BASEL,<br /> MIAMI BEACH
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flex-row grid-cols-10">
          <div className="col-span-5 md:col-span-2 order-2 md:order-1 bg-yellow bg-white hidden md:block pt-[100%]"></div>

          <div className="col-span-5 md:col-span-2 order-2 md:order-1 bg-white md:hidden">
            <div className="relative media  flex items-center pt-[100%] uppercase">
              <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12 md:hidden">
                <p className="text-black mb-1 text-xs lg:text-sm mb-6">
                  THE CARL FISHER
                  <br /> CLUBHOUSE
                </p>

                <p className="text-black text-xs lg:text-sm mb-2">
                  NOV 30 - DEC 02 2022
                </p>

                <p className="text-black text-xs lg:text-sm">
                  3pm - 11pm daily
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-10 order-1 md:order-2 md:col-span-8 pl-6 pr-6 md:pr-0 md:pl-10 flex items-center bg-white py-20 md:py-0">
            <div className="inline-block">
              <div className="flex items-start justify-between mb-2">
                <img
                  className="mb-10 md:mb-0"
                  src="./assets/images/plus-black-icon.svg"
                  alt="plus icon"
                />

                <p className="text-dark font-normal font-call mb-1 text-xs lg:text-sm hidden md:block">
                  VICE @ ART BASEL,
                  <br /> MIAMI BEACH
                </p>
              </div>

              <h1 className="leading-none uppercase text-6xl md:text-7xl lg:text-8xl xl:text-9xl 3xl:text-10xl 4xl:text-11xl text-dark font-bold">
                <LetterSplit content="Schedule"/>
              </h1>

              <img
                  className="mb-10 md:mb-0 ml-auto hidden md:block"
                  src="./assets/images/plus-black-icon.svg"
                  alt="plus icon"
                />
            </div>
          </div>
        </div>

        <div
          className="grid grid-flex-row grid-cols-12 md:grid-cols-10 pt-10 md:pt-0 px-6 md:px-0"
          ref={tab}
        >
          <div className="col-span-2 hidden md:block">
            <div className="relative media  flex items-center justify-center pt-[100%]"></div>
          </div>

          <div className="col-span-4 md:col-span-2 md:border-b border-black">
            <a
              href="#"
              onClick={(e) => {
                colorChangeHandler(e, {name: "yellow", value: "#FFF000"});
              }}
              className="relative media  flex items-center justify-start text-center md:text-start pt-[100%] active"
            >
              <div className="absolute top-1/2 -translate-y-1/2">
                <p className="text-black mb-1 text-xs lg:text-sm">
                  30TH NOV
                </p>
                <p className="inline-block font-bold font-neue text-xl lg:text-2xl text-black uppercase">
                  <span className="hidden md:block">WEDNESDAY</span>
                  <span className="md:hidden">Web</span>
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-4 md:col-span-2 md:border-b border-black">
            <a
              href="#"
              onClick={(e) => {
                colorChangeHandler(e, {name: "blue", value: "#3300ff"});
              }}
              className="relative media  flex items-center justify-start text-center md:text-start pt-[100%]"
            >
              <div className="absolute top-1/2 -translate-y-1/2">
                <p className="text-black mb-1 text-xs lg:text-sm">
                  1ST DEC
                </p>
                <p className="inline-block font-bold font-neue text-xl lg:text-2xl text-black">
                  <span className="hidden md:block">THURSDAY</span>
                  <span className="md:hidden">THUR</span>
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-4 md:col-span-2 md:border-b border-black">
            <a
              href="#"
              onClick={(e) => {
                colorChangeHandler(e, {name: "green", value: "#00FF00"});
              }}
              className="relative media  flex items-center justify-start text-center md:text-start pt-[100%]"
            >
              <div className="absolute top-1/2 -translate-y-1/2">
                <p className="text-black mb-1 text-xs lg:text-sm">
                  2ND DEC
                </p>
                <p className="inline-block font-bold font-neue text-xl lg:text-2xl text-black">
                  <span className="hidden md:block">FRIDAY</span>
                  <span className="md:hidden">FRI</span>
                </p>
              </div>
            </a>
          </div>

          <div className="col-span-2 hidden md:block border-b border-black">
            <div className="relative media flex items-center justify-center pt-[100%]"></div>
          </div>
        </div>

        <div className="grid grid-flex-row grid-cols-10 px-6 md:px-0 md:gap-0 gap-5">
          <div className="col-span-2 pb-24 text-end hidden md:block"></div>
          <div className="col-span-10 md:col-span-8 pt-10 sm:pt-16">
            <h3 className="text-xl lg:text-2xl text-black uppercase font-bold mb-12 hidden md:block">
              Main clubhouse
            </h3>

            <div className="grid grid-flex-row grid-cols-8 md:border-b border-black">
              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event yellow">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">3 - 4pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  WOMEN IN THE MOVEMENT
                </p>

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/women-in-the-movement-kimberly-drew-in-conversation-with-tbd-tickets-463733638797" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event yellow">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">5 - 6pm0</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  NOISEY Artist Interview 
                </p> 

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/noisey-artist-interview-tickets-464570331367" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event yellow">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">9p - 11pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  VICE x Art Basel Miami Beach VIP Opening Night with Donovan's Yard 
                </p> 
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event blue ">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">3 - 4pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  BLACK POWER KITCHEN: Kimberly Drew in conversation with Ghetto Gastro 
                </p>

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/black-power-kitchen-kimberly-drew-in-conversation-with-ghetto-gastro-tickets-463914369367" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event blue">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">5 - 6pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  Expedia Listening Session 
                </p>

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/expedia-listening-session-tickets-464657191167" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event blue">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">6pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  Expedia VIP Cocktail Reception 
                </p> 
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event green ">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">3 - 4pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  Styling Hip-Hop 
                </p> 

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/styling-hip-hop-tickets-463959213497" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event green">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                      Main clubhouse
                  </h3>
                  <span className="mr-4 text-black">5 - 6pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  NOISEY Artist Interview with They Hate Change
                </p> 

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/noisey-artist-interview-with-they-hate-change-tickets-463968421037" target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 pb-24 text-end hidden md:block"></div>
          <div className="col-span-10 md:col-span-8 md:border-b border-black md:pt-16">
            <h3 className="text-xl lg:text-2xl text-black uppercase font-bold mb-12 hidden md:block">
              THE YARD
            </h3>

            <div className="grid grid-flex-row grid-cols-8">
              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                    THE YARD
                  </h3>
                  <span className="mr-4 text-black">1 - 7pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6"> 
                  NOISEY DJ SETS IN THE YARD
                </p>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event blue">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                    THE YARD
                  </h3>
                  <span className="mr-4 text-black">8 - 11pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  The Immeasurable Influence of African Music 
                </p>

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/the-immeasurable-influence-of-african-music-tickets-464340443767"target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>

              <div className="flex flex-col col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5 event green">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                    THE YARD
                  </h3>
                  <span className="mr-4 text-black">8 - 11pm</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  Architects of Art & Sound
                </p>

                <span className="text-black font-callEightNegativeOT leading-5 mr-4 text-sm inline-block px-1 mt-auto">
                  <Link href="https://www.eventbrite.com/e/architects-of-art-sound-tickets-464321677637"target="_blank">TICKETS COMING SOON</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 text-end hidden md:block"></div>
          <div className="col-span-10 md:col-span-8 md:pt-16">
            <h3 className="text-xl lg:text-2xl text-black uppercase font-bold mb-12 hidden md:block">
              Rum Room
            </h3>

            <div className="grid grid-flex-row grid-cols-8">
              <div className="col-span-8 sm:col-span-4 xl:col-span-2 pb-10 sm:pb-16 sm:pr-5">
                <div className="mb-6 md:mb-3 text-xs lg:text-base uppercase">
                  <h3 className="text-xl lg:text-2xl text-black uppercase font-bold md:hidden mb-1">
                    Rum Room
                  </h3>
                  <span className="mr-4 text-black">ALWAYS ON</span>
                </div>
                
                <p className="font-bold font-neue text-md md:text-xl text-black uppercase mb-3 md:mb-6">
                  “TIMEBOY'S INFLECTION” 
                </p>
              </div>

              <div className="col-span-4 md:col-span-2 pt-[100%] xl:block hidden"></div>
              <div className="col-span-4 md:col-span-2 pt-[100%] xl:block hidden"></div>
              <div className="col-span-4 xl:col-span-2 pt-[100%] bg-black hidden md:block mt-40"></div>
       
            </div>
          </div>
        </div>

        <div className="grid grid-flex-row grid-cols-10 bg-black -mb-1 -mt-1 relative z-1">
          <div className="col-span-5 md:col-span-2">
            <div className="relative media flex items-center pt-[100%]">
              <div className="absolute top-1/2 text-white -translate-y-1/2 px-6 xl:px-12">
                <p className="font-callEightNegativeOT leading-5 mb-1 text-xs lg:text-sm">
                  VICE @ ART BASEL,<br/> MIAMI BEACH
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 hidden md:block">
            <div className="relative media flex items-center pt-[100%]">
              <div className="absolute top-1/2 -translate-y-1/2 px-6 xl:px-12">
                <p className="text-white mb-1 text-xs lg:text-sm">
                  WEB, THURS, FRI
                </p>
                <p className="inline-block text-white text-xs lg:text-sm">
                  11:00AM - 11:00PM DAILY
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4 hidden md:block"></div>
          <div className="col-span-5 md:col-span-2 hidden md:block">
            <div className="relative media  flex items-center justify-center pt-[100%]"></div>
          </div>

          <div className="col-span-5 md:col-span-2 md:hidden bg-yellow">
            <div className="relative media  flex items-center justify-center pt-[100%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
