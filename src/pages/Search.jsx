import React from "react";
import { MesaggeContext } from "../context/MessageContext";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

function Search() {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();

  const [newData, setNewData] = useState([]);
  const [find, setFind] = useState(true);
  let i = 1;
  useEffect(() => {
    if (!mesagge) {
      navigate("/");
    }
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await supabase.from("Señas").select();
    setNewData(data);
  }

  return (
    <div className="flex justify-center w-screen flex-col">
      {newData.map((e) => {
        if (mesagge.toLowerCase().trim() == e.symbolName.toLowerCase().trim()) {
          return (
            <div
              className="h-screen bg-white overflow-y-hidden flex justify-evenly flex-col"
              key={e.id + 1}
            >
              <div className="flex flex-col items-center">
                <div
                  className="lg:text-6xl sm:text-5xl text-4xl m-2 mt-20 font-bold flex flex-col items-left"
                  key={e.id}
                >
                  Esta es la <br /> forma de decir{" "}
                  <b className=" text-blue-800 first-letter:uppercase">
                    "{e.symbolName}"
                  </b>{" "}
                  en lenguaje de señas.
                </div>
              </div>

              <div className="h-[360px] text-blue-950 flex justify-center">
                <ReactPlayer
                  key={e.id + 1}
                  url={e.link}
                  controls
                  playing
                  muted
                />
              </div>
            </div>
          );
        } else if (newData.length == i) {
          navigate("/404");
        }

        i++;
      })}
    </div>
  );
}

export default Search;
