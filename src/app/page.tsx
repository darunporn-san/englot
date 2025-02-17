'use client'
import CardSocial from "@/components/home/card-social";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
export interface ICardSocial {
  name: string;
  image: string;
  birthday: string;
  social_media: {
    instagram: string;
    twitter: string;
    facebook: string;
    tiktok:string;
  };
}
const actorList: ICardSocial[] = [
  {
    name: "Engfa Waraha",
    birthday: "1995-02-15",
    image: "engfa",
    social_media: {
      instagram: "fa_engfa8",
      twitter: "EWaraha",
      facebook: "engfa.waraha.9",
      tiktok:"@engfa32"
    },
  },
  {
    name: "Charlotte Austin",
    birthday: "1998-12-21",
    image: "charlotte",
    social_media: {
      instagram: "itscharlotty",
      twitter: "itscharlotty",
      facebook: "ms.charlotteaustin",
      tiktok:"@itscharlotty"
    },
  },
];
export default function Home() {

 
  return (
    <div className="py-10">
      <p className="text-xl md:text-3xl my-3">อยากรู้จักเราไหม ?? </p>

      <div className="md:flex text-center justify-center ">
        {actorList.map((actor: ICardSocial, key: number) => (
          <div key={key} className="cards">
            <CardSocial detail={actor} />
          </div>
        ))}
      </div>
    </div>
  );
}
