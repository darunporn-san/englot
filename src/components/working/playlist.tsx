"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import ReactPlayer from "react-player/lazy";
import { seriesList } from "./seires";

const smlPlaylist = [
  {
    url: "https://youtu.be/jVAEF51dosk?si=tA5pDSklnzQkiBXm",
    ep: "1-[1/4]",
  },
  {
    url: "https://youtu.be/rhj1fehFI8Q?si=U44PRl2axZiRsP7F",
    ep: "1-[2/4]",
  },
  {
    url: "https://youtu.be/dt4P0uTua3U?si=HSpEBwRiDmOw5NJe",
    ep: "1-[3/4]",
  },
  {
    url: "https://youtu.be/DNKogMzdHHE?si=TAsd3m7efRkMVzBy",
    ep: "1-[4/4]",
  },
];
// const ReactPlayer = dynamic(()=> import('react-player'),{ssr:true})
const Playlist = ({ selectList }: any) => {
  const [selected, setSelected]: any = useState(selectList.list[0].list[0]);
  const [playing, setPlaying] = useState(false);
  console.log("selectList", selectList.list);
  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  //   const [duration,setDuration] = useState(0)
  //   const [played,setPlayed] = useState(0)
  //   const handleDuration = (dura:any) => {
  //     console.log('onDuration', dura)
  //     setDuration(dura)
  //   }

  //   const pad = (tim:any) =>{
  //     return ('0' + tim).slice(-2)

  //   }
  //   const secondToMin = (seconds:any) => {
  //     const date = new Date(seconds * 1000)
  //     const hh = date.getUTCHours()
  //     const mm = date.getUTCMinutes()
  //     const ss = pad(date.getUTCSeconds())
  //     if (hh) {
  //       return `${hh}:${pad(mm)}:${ss}`
  //     }
  //     return `${mm}:${ss}`

  //   }
  return (
    <div className="md:flex ">
      <div className="w-full md:w-2/3 player-wrapper pt-[80%] md:pt-[35%]">
        <ReactPlayer
          url={selected.url}
          controls={true}
          width="100%"
          playing={playing}
          height="100%"
          className="react-player"
          //   onDuration={handleDuration}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <div className="w-full md:w-1/3 bg-red-200 overflow-y-auto md:ml-10 p-4">
        <p className="text-3xl">{selectList.name} </p>
        {selectList.list?.map((list: any) => (
          <div key={list.key}>
            <div className="text-xl">{list.key}</div>
            {list.list?.map((eplist: any, key: number) => {
              return (
                <div key={key} className={`flex my-2 pl-5 mr-5 md:mr-0 justify-between cursor-pointer px-2 py-1  ${selected.ep === eplist.ep? "bg-violet-200 ":"bg-emerald-200" }`} onClick={() => setSelected(eplist)}>
                      <div >EP {eplist.ep}</div>
                      <span className="material-icons" onClick={handlePlayPause}>
                     {playing && selected.ep === eplist.ep
                      ? "pause_circle"
                      : "play_circle"}
                  </span>
                </div>
              
                // <div
                //   className={`flex my-2 mr-5 md:mr-0 justify-between cursor-pointer ${
                //     selected.ep === eplist.ep
                //       ? "bg-violet-200 "
                //       : "bg-emerald-200 "
                //   } px-2 py-1 `}
                //   onClick={() => {
                //     setSelected(eplist);
                //   }}
                // >
                //   <div>EP {eplist.ep}</div>

                //   <span className="material-icons" onClick={handlePlayPause}>
                //     {playing && selected.ep === eplist.ep
                //       ? "pause_circle"
                //       : "play_circle"}
                //   </span>
                // </div>
              );
            })}
          </div>
        ))}
        {/* {seriesList?.list.map((list: any, key: number) => (
          <div
            className={`flex my-2 mr-5 md:mr-0 justify-between cursor-pointer ${
              selected.ep === list.ep ? "bg-violet-200 " : "bg-emerald-200 "
            } px-2 py-1 `}
            onClick={() => {
              setSelected(list);
            }}
          >
            <div>EP {list.ep}</div>

            <span className="material-icons" onClick={handlePlayPause}>
              {playing && selected.ep === list.ep ? "pause_circle" : "play_circle"}
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Playlist;
