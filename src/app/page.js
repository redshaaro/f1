import car from "/public/car.jpeg";
import prize from "/public/prize.svg";
import team from "/public/team.jpeg";
import fix from "/public/fix.jpeg";

import team2 from "/public/team2.jpeg";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TabIcon from "@mui/icons-material/Tab";

import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

import Image from "next/image";
import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  display: "swap",

  weight: ["400"],
});

export default function Home() {
  const prizes = [
    { name: "FSIT: 2nd 2023", img: prize },
    { name: "FSUK: 6th 2023", img: prize },
    { name: "FSIT: 3rd 2022", img: prize },
    { name: "FSIT: 2nd 2021", img: prize },
    { name: "FSIT: 2nd 2020", img: prize },
    { name: "FS Business event: 6th 2019", img: prize },
  ];
  return (
    <main className="mt-5">
      <section className="bg-[#2E2E2E] w-full  ">
        <div className=" h-[504px]     relative">
          <Image
            className="brightness-50 object-cover"
            src={car}
            fill
            alt="car"
          ></Image>
          <span
            className={`${lato.className} absolute z-50 text-[#fff] text-[36px] tracking-[5.22px] w-[621px] block p-[1rem] top-[6rem] left-[4%] border-l-[#45C5C1] border-l-solid border-l-4`}
          >
            AAM FORMULA STUDENT TEAM IS EGYPT'S UNRIVALED FORMULA STUDENT
            SUCCESS STORY
          </span>
        </div>
        <div className="flex justify-between text-[#fff] items-center mt-[10px] ">
          <div className="left border-l-[#45C5C1] border-l-solid border-l-4 text-[36px] w-[154px] relative left-[4%] p-[1rem]">
            Our History
          </div>
          <div className="right flex gap-[63px]">
            {prizes.map((prize) => {
              return (
                <div key="2" className="flex flex-col items-center">
                  <div className="relative w-[87px] h-[94px]">
                    <Image src={prize.img} alt="prize" fill></Image>
                  </div>
                  <div className="text-[12px] w-[122px] text-center mt-2">
                    {prize.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-5 gap-[5rem] border-b-[#D9D9D9] border-b-solid border-b-4">
        <div className="flex flex-col text-center">
          <span className="text-[64px]">12</span>{" "}
          <span className="text-[36px]">PROJECTS</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[64px]">13</span>{" "}
          <span className="text-[36px]">COMPETITIONS</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[64px]">50+</span>{" "}
          <span className="text-[36px]">MEMBERS</span>
        </div>
      </section>

      <section className="mt-5 flex justify-evenly  mx-5 items-center mb-3">
        <div className="w-[777px] h-[405px] relative">
          <Image
            className="rounded-3xl shadow-xl shadow-[rgba(0, 0, 0, 0.25)] object-cover"
            src={team}
            alt="team"
            fill
          ></Image>
        </div>
        <div className="w-[382px] flex flex-col">
          <span className="text-[36px] text-[#282828] font-bold">About Us</span>
          <span className="text-[20px] text-[#282828] font-light">
            Our mission is to design, manufacture, test, and race a competitive
            single-seat race car. Through this challenging journey, we aim to
            develop our skills in budgeting, teamwork, and gain hands-on
            experience in design and manufacturing that will shape our future
            careers.
          </span>
        </div>
      </section>

      <section className="mt-5">
        <div className="relative h-[303px]">
          <Image
            className="brightness-50 object-cover"
            src={fix}
            alt="fix"
            fill
          ></Image>
          <div className="text-white absolute w-[100%] text-center top-[36%] text-[64px] font-light">
            WHAT WE DO
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-5">
          <div className="flex flex-col  justify-start gap-5 p-3   max-w-[389px] items-center min-h-[266px] rounded-2xl shadow-lg shadow-[rgba(0, 0, 0, 0.25)]   bg-[#EEEEEE]">
            <div>
              <DesignServicesIcon className="text-[50px]"></DesignServicesIcon>
            </div>
            <div className="text-[15px] font-[600]">Design</div>
            <div className="text-center text-[15px] font-[500] text-[#000]">
              We design our suspension,wheel package,chassis,powertran ,aero
              package and electronics that meets our performance goals for the
              season on CAD software We also develop,debug verify and validate
              our Autonomous racing software.
            </div>
          </div>
          <div className="flex flex-col  justify-start gap-5 p-3  max-w-[389px] items-center min-h-[266px] rounded-2xl shadow-lg shadow-[rgba(0, 0, 0, 0.25)]   bg-[#EEEEEE] ">
            <div>
              <PrecisionManufacturingIcon className="text-[50px]"></PrecisionManufacturingIcon>
            </div>
            <div className="text-[15px] font-[600]">Manufacturing</div>
            <div className="text-center text-[15px] font-[500] text-[#000]">
              We CNC our wheel package,weld our chassis, mold our aero
              package,mount our sensors,assemble our circuits and test our
              powertrain systems
            </div>
          </div>
          <div className="flex flex-col  justify-start gap-5 p-3   max-w-[389px] items-center min-h-[266px] rounded-2xl shadow-lg  shadow-[rgba(0, 0, 0, 0.25)]   bg-[#EEEEEE]">
            <div>
              <TabIcon className="text-[50px]"></TabIcon>
            </div>
            <div className="text-[15px] font-[600]">Business</div>
            <div className="text-center text-[15px] font-[500] text-[#000]">
              We manage the social media accounts market ,fund raise and arrange
              events
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        <div className="h-[302px] relative">
          <Image
            className="brightness-50 object-cover"
            src={team2}
            fill
            alt="team2"
          ></Image>
          <div className="absolute w-full text-center flex flex-col top-[30%]">
            <span className="text-white text-[64px] font-light">FIND US </span>
            <span className="text-white text-[32px] font-light">
              AT LAB G 003
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
