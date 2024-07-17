import CardSocial from "@/components/home/card-social";
import Image from "next/image";
export interface ICardSocial {
  name: string;
  image: string;
  social_media: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}
const actorList: ICardSocial[] = [
  {
    name: "Engfa Waraha",
    image: "engfa",
    social_media: {
      instagram: "fa_engfa8",
      twitter: "EWaraha",
      facebook: "engfa.waraha.9",
    },
  },
  {
    name: "Charlotte Austin",
    image: "char",
    social_media: {
      instagram: "itscharlotty",
      twitter: "itscharlotty",
      facebook: "ms.charlotteaustin",
    },
  },
];
export default function Home() {
  return (
    <div className="py-10">
      <p className="text-xl md:text-3xl my-3">อยากรู้จักเราไหม ?? </p>

      <div className="md:flex text-center justify-center ">
        {actorList.map((actor) => (
          <CardSocial detail={actor} />
        ))}
      </div>
    </div>
  );
}
