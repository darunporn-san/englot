'use client'
import Playlist from "@/components/working/playlist";
import { seriesList } from "@/components/working/seires";
import Image from "next/image";
import { useEffect } from "react";

export default function Working() {

  return <div className="my-10"><Playlist selectList = {seriesList[0]}/></div>;
}
