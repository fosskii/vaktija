"use client";
import React from "react";
import Counter from "./counter";

const Clock = () => {
  const d = new Date();
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    const date = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    const timer = setInterval(() => {
      setCurrentTime(date);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return <>{currentTime}</>;
};

export default function Home() {
  return (
    <div className="pt-7">
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-gray-300 text-extrabold">
              Vaktija
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-200 text-gray-400">Tespih</a>
            <a className="mr-5 hover:text-gray-200 text-gray-400">Kompas</a>
          </nav>
          <a href="https://islamskazajednica.ba/">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Islamska zajednica
            </button>
          </a>
        </div>
      </header>
      <div className="text-gray-300 content-center grid pt-48 place-items-center">
        <h1 className="text-2xl">Vaktija za Sarajevo</h1>
        <h1 className="text-5xl pt-7 font-medium text-gray-200 ">
          <Clock />
        </h1>

        <div className="pt-12 text-2xl grid grid-cols-6 gap-20 content-center">
          <div>
            <h1 className="pb-2 text-green-600">04:54</h1>
            <h1>Zora</h1>
          </div>

          <div>
            <h1 className="pb-2 text-green-600">06:30</h1>
            <h1>Izlazak</h1>
          </div>

          <div>
            <h1 className="pb-2 text-green-600">12:00</h1>
            <h1>Podne</h1>
          </div>

          <div>
            <h1 className="pb-2 text-green-600">14:55</h1>
            <h1>Ikindija</h1>
          </div>

          <div>
            <h1 className="pb-2 text-green-600">17:31</h1>
            <h1>Akšam</h1>
          </div>

          <div>
            <h1 className="pb-2 text-green-600">18:54</h1>
            <h1>Jacija</h1>
          </div>
        </div>
      </div>
      &nbsp;
      <Counter></Counter>
    </div>
  );
}
