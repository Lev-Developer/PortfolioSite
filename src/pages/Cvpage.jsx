import React from "react";

export function CvPage() {
  return (
    <>
      <div className="flex justify-center h-[100vh]">
        <div className=" md:w-[1200px] w-[700px] h-screen  ">
          <div className="flex justify-between items-center w-full h-[200px] ">
            <div>
              <p className="text-blue-800 md:text-4xl text-2xl border-2 border-blue-800 rounded-full px-4 py-4">
                LV
              </p>
            </div>
            <div className="flex flex-col items-center w-[900px]">
              <h1 className=" md:text-8xl text-4xl text-black">
                Lev Veremchuk
              </h1>
              <div className="flex justify-between items-center w-[500px] ">
                <p className="text-xl">
                  Tel: <a href="tel:+8048247162">+1 (804) 824-71-62</a>
                </p>
                <p className="text-xl">
                  Mail:{" "}
                  <a href="mailto:1levtop4ik1@gmail.com">
                    1levtop4ik1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[500px] w-full  flex justify-between">
            <div className="h-[376px] w-[250px] flex justify-between">
              <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                Skills
              </p>
              <p className="border-2 md:visible invisible  border-blue-800 rounded-full px-2 py-2"></p>
            </div>
            <div className="w-[900px]">
              <ul className="text-xl">
                <li>4 years programming</li>
                <li>3 years working with Node JS</li>
                <li>QUICK selT-motivated-learner</li>
                <li>Strong multi-generational</li>
                <li>Communication skills</li>
                <li>Proficient in multiole languages</li>
                <li>speak four languages</li>
                <li>Flexible and Adaptable</li>
                <li>Organization and Time</li>
                <li>Management</li>
                <li>Demonstrated decision maker</li>
                <li>Cultural Awareness</li>
                <li>Dependable and Responsible</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="h-[500px] w-full  flex justify-between">
            <div className="h-[300px]  w-[250px] flex justify-between">
              <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                PROFESSIONAL SUMMARY
              </p>
              <p className="border-2 md:visible invisible border-blue-800 rounded-full px-2 py-2"></p>
            </div>
            <div className="w-[900px]">
              <p className=" md:text-2xl text-lg ">
                Hardworking and passionate job seeker with strong organizational
                skills eager to secure entry-level Node JS Developer position.
                Ready to help team achieve company goals. Organized and
                dependable candidate successful at managing multiple phones with
                a posive altude. vilngness to take on add ed responsibilities to
                meet team goals. Enthusiastic programmer eager to contribute to
                team success through hard work, attention to detail and
                excellent organizational skills. Clear understanding of Node JS
                and training in programming. Motivated to learn, grow and excel
                in web programming. Reliable employee seeking Node JS Developer
                position. Offering excellent communication and good judgment.
              </p>
            </div>
          </div>
          <div className="h-[500px] w-full  flex justify-between">
            <div className="h-[320px] w-[250px] flex justify-between">
              <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                Education
              </p>
              <p className="border-2 md:visible invisible border-blue-800 rounded-full px-2 py-2"></p>
            </div>
            <div className="flex flex-col justify-between h-[300px]">
              <div className="w-[900px] flex flex-col justify-between h-[176px]  ">
                <h1 className="text-3xl">Courses</h1>
                <div>
                  <p className="text-xl">
                    Node JS Developer (Node JS, Express, MongoDB, MySQL)
                  </p>
                  <p className="text-md">
                    Udemy{": "}
                    <a
                      className="text-blue-700"
                      href="Https://www.udemy.com/share/102Jro3(@7RhVDv27Svuw0"
                    >
                      Https://www.udemy.com/share/102Jro3(@7RhVDv27Svuw0
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xl">
                    FullStack WebDeveloper (JavaScript, React, Next JS, Node JS,
                    MySQL, API)
                  </p>
                  <p className="text-md">Udemy</p>
                </div>
              </div>
              <div className="w-[900px] flex flex-col justify-center h-[70px]  ">
                <h1 className="text-3xl">Self-learning</h1>
              </div>
              <div className="w-[900px] flex flex-col justify-between h-[70px]  ">
                <h1 className="text-3xl">High School Diploma</h1>
                <div>
                  <p className="text-xl">Dubno Luceum, Ukraine</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] w-full  flex justify-between">
            <div className="h-[420px] w-[250px] flex justify-between">
              <div className="flex flex-col justify-between h-[276px]  items-center">
                {" "}
                <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                  ACCOMPLISHMENTS
                </p>
                <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                  Other Experience
                </p>
                <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                  Interest
                </p>
              </div>

              <p className="border-2 md:visible invisible border-blue-800 rounded-full px-2 py-2"></p>
            </div>
            <div className="flex flex-col justify-between h-[400px]">
              <div className="w-[900px]">
                <p className="md:text-2xl text-lg">Accomplishments</p>
                <p className="text-xl">
                  Awarded third place out of 60 in the programming olympiad
                </p>
                <p className="text-xl">English Language school</p>
              </div>
              <div className="w-[900px] flex flex-col justify-between">
                <p className="md:text-2xl text-lg">Other Experience</p>
                <p className="text-xl">Volunteer experience</p>
                <p className="text-xl">
                  Created web site for company M.S. Sibley Construction
                </p>
                <p className="text-xl">
                  <a className="text-blue-700" href="/projects">
                    Projects
                  </a>
                </p>
              </div>
              <div className="w-[900px] flex flex-col justify-between ">
                <p className="md:text-2xl text-lg">Interest</p>
                <p className="text-xl">Biked 315 miles in 10 days</p>
                <p className="text-xl">Skiing</p>
                <p className="text-xl">Running twice a week</p>
                <p className="text-xl">Reading books</p>
              </div>
            </div>
          </div>
          <div className="h-[500px] w-full  flex justify-between">
            <div className="h-[300px] w-[250px] flex justify-between">
              <p className="text-blue-700 uppercase md:text-2xl text-lg ">
                languages
              </p>
              <p className="border-2 md:visible invisible border-blue-800 rounded-full px-2 py-2"></p>
            </div>
            <div className="w-[900px]">
              <div className="flex flex-col justify-between h-[280px]">
                <div>
                  <p className="md:text-2xl text-lg">Ukrainian</p>
                  <div className="flex flex-row justify-between w-[270px] ">
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                  </div>
                </div>
                <div>
                  <p className="md:text-2xl text-lg">English</p>
                  <div className="flex flex-row justify-between w-[270px] ">
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-gradient-to-l from-stone-300 to-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-stone-500 opacity-25  "></p>
                  </div>
                </div>
                <div>
                  <p className="md:text-2xl text-lg">Czech</p>
                  <div className="flex flex-row justify-between w-[270px] ">
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px]  bg-stone-500 opacity-25 "></p>
                    <p className="h-[10px] w-[50px]  bg-stone-500 opacity-25  "></p>
                    <p className="h-[10px] w-[50px]  bg-stone-500 opacity-25  "></p>
                  </div>
                </div>
                <div>
                  <p className="md:text-2xl text-lg">Russian</p>
                  <div className="flex flex-row justify-between w-[270px] ">
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                    <p className="h-[10px] w-[50px] bg-blue-700  "></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  rounded-full bg-black  h-[100px]  z-100 "></div>
        </div>
      </div>
    </>
  );
}
