"use client";
import DetailHistory from "@/components/history/detail";
import Image from "next/image";
import { useState } from "react";

export default function History() {
  const [selected, setSelected] = useState("");

  const handleCardClick = (item: any) => {
    if (selected === "") {
      setSelected(item);
    }
  };

  return (
    <div className="my-10">
      <div className="text-2xl md:text-4xl mb-10 flex justify-between">
        <span>อยากรู้เพิ่มมั้ย ?? ลองกดเลือกสิ</span>
        {selected && (
          <span className="text-base cursor-pointer" onClick={()=>setSelected("")}>
            Clear
          </span>
        )}
      </div>
      <div
        className={`${
          selected === "" ? "flex child-nodes" : ""
        } flex-col items-center relative  gap-y-8 md:gap-y-20`}
      >
        <div
          className={`flex ${
            selected === "" ? "justify-center" : ""
          } card-container`}
        >
          <div
            className={`gap-12  md:gap-80 ${selected === "" ? "flex cards-history" : ""}`}
          >
            {["engfa", "charlotte"]
              .filter((o) => o === selected || selected === "")
              .map((item,key:number) => (
                <div className="card-history-2" key={key}>
                  <div
                    className="card-info flex cursor-pointer"
                    onClick={() => handleCardClick(item)}
                  >
                    <Image
                      className="w-48 h-32 md:h-60 rounded-xl"
                      alt={item}
                      src={`/images/${item}.png`}
                      width={500}
                      height={500}
                    />
                    <p className="title text-white uppercase my-2">{item}</p>
                  </div>
                </div>
              ))}
            <div className={`card-history-2 ${(selected !== 'daeng')  && "hidden"}`}>
              <div
                className="card-info flex cursor-pointer"
                onClick={() => handleCardClick("daeng")}
              >
                <Image
                  className="w-48 h-32 md:h-60 rounded-xl"
                  alt={"daeng"}
                  src={`/images/daeng.png`}
                  width={500}
                  height={500}
                />
                <p className="title text-white uppercase my-2">daeng</p>
              </div>
            </div>
          </div>

          {selected && (
            <div className="ml-5">
              <DetailHistory />
            </div>
         )}
        </div>

        <div className={`card-history-2 ${selected !== "" && "hidden"}`}>
          <div
            className="card-info flex cursor-pointer"
            onClick={() => handleCardClick("daeng")}
          >
            <Image
              className="w-48 md:w-64 h-32 md:h-60 rounded-xl"
              alt={"daeng"}
              src={`/images/daeng.png`}
              width={500}
              height={500}
            />
            <p className="title text-white uppercase my-2">daeng</p>
          </div>
        </div>
      </div>
    </div>
  );
}
