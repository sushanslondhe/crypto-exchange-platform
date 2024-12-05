"use client";
import { use, useEffect, useState } from "react";
import MarketBar from "./components/MarketBar";
import { getTickers } from "./utils/httpClients";
import { Ticker } from "./utils/types";
import Link from "next/link";
import { Bitcoin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    getTickers().then((data) => {
      console.log(data);
      setTickers(data);
    });
  }, []);
  const [tickers, setTickers] = useState<Ticker[] | null>([]);
  return (
    <div className=" text-center text-white flex flex-col justify-center gap-10">
      <h1 className="text-white font-serif text-3xl shrink">Crypto Exchange</h1>
      <div className="m-[5rem]">
        <h1 className="text-white font-serif text-2xl text-left shrink">
          Markets
        </h1>
        <div className="m-10 flex flex-col gap-10 ">
          {tickers
            // @ts-ignore
            ?.sort((a, b) => b.quoteVolume - a.quoteVolume)
            .map((item) => (
              <div className=" cursor-pointer" key={item.symbol}>
                <Link href={`trade/${item.symbol}`}>
                  <QuoteContainer
                    symbolName={item.symbol}
                    marketCap={`${item.volume}`}
                    price={item.lastPrice}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function QuoteContainer({
  symbolName,
  marketCap,
  price,
}: {
  symbolName: string;
  marketCap: string;
  price: string;
}) {
  return (
    <div className="  flex flex-row  w-full h-[10rem]  rounded-t-lg shadow-sm hover:shadow-md hover:shadow-white  duration-200 bg-gradient-to-r from-slate-950 to-slate-900  ">
      <div className="  w-[40%] h-full flex justify-center items-center">
        <Bitcoin className="text-white w-[4rem] h-[4rem] shadow-md shadow-gray-600" />
      </div>
      <div className="flex flex-col   w-full  md:flex md:flex-row md:justify-between gap-5 md:px-10  justify-center items-center h-full">
        <div className=" text-2xl text-slate-400 font-serif">{symbolName}</div>
        <div className=" flex flex-col justify-between items-center gap-5">
          <div className="text-xl text-slate-500">Market Cap</div>
          <div>{marketCap}</div>
        </div>
        <div className="flex flex-col justify-between items-center gap-5">
          <div className="text-xl text-slate-500">Price</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
}
