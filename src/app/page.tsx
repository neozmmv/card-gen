"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [cardNum, setCardNum] = useState<number | string>("A");
  const [cardType, setCardType] = useState<string>("♠");
  const suits = ["♠", "♥", "♦", "♣"];
  const [suitColor, setSuitColor] = useState("text-black");

  const generateCard = () => {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    if(randomNum === 1) {
      setCardNum("A");
    }
    else if(randomNum === 11) {
      setCardNum("J");
    }
    else if(randomNum === 12) {
      setCardNum("Q");
    }
    else if(randomNum === 13) {
      setCardNum("K");
    }
    else {
      setCardNum(randomNum);
    }
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    setCardType(randomSuit);
    const color = (randomSuit === "♥" || randomSuit === "♦") ? "text-red-500" : "text-black";
    setSuitColor(color);

  }
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col">
      <div className="max-w-7xl borde mx-auto h-screen w-7xl flex justify-center items-center flex-col">
        <div className="w-sm h-128 border rounded-md bg-white border-blue-400 mx-auto flex flex-col justify-between">
          <div className=" w-full h-28 flex flex-col px-4 py-2">
            <p className={`text-5xl ${suitColor}`}>{cardNum}</p>
            <p className={`text-5xl ${suitColor}`}>{cardType}</p>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
              <p className={`text-9xl ${suitColor}`}>{cardType}</p>
            </div>
          </div>
          <div className="w-full h-28 flex flex-col px-4 py-2 rotate-180">
            <p className={`text-5xl ${suitColor}`}>{cardNum}</p>
            <p className={`text-5xl ${suitColor}`}>{cardType}</p>
          </div>
        </div>
      <button onClick={generateCard} className="bg-red-500 cursor-pointer w-40 h-12 mt-12 rounded-md text-white text-lg">Generate Card</button>
      </div>
    </div>
  );
}
