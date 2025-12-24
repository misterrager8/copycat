import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MultiContext = createContext();

export default function Context({ children }) {
  const [clips, setClips] = useState(
    JSON.parse(localStorage.getItem("copycat-clips")) || []
  );
  const [currentClip, setCurrentClip] = useState(null);

  const addClip = () => {
    let clips_ = [...clips];
    let clip_ = {
      name: moment().format("LL"),
      content: "",
      id: uuidv4(),
    };

    clips_.push(clip_);
    setClips(clips_);
    setCurrentClip(clip_);
  };

  const editClip = (content) => {
    let clips_ = [...clips];
    let clip_ = clips_.find((x) => x.id === currentClip?.id);
    clip_.content = content;

    setClips(clips_);
  };

  const renameClip = (e, newName) => {
    e.preventDefault();
    let clips_ = [...clips];
    let clip_ = clips_.find((x) => x.id === currentClip?.id);
    clip_.name = newName;

    setClips(clips_);
  };

  const deleteClip = () => {
    let clips_ = [...clips].filter((x) => x.id !== currentClip?.id);
    setClips(clips_);
    setCurrentClip(null);
  };

  useEffect(() => {
    localStorage.setItem("copycat-clips", JSON.stringify(clips));
  }, [clips]);

  const contextValue = {
    clips: clips,
    setClips: setClips,
    currentClip: currentClip,
    setCurrentClip: setCurrentClip,
    addClip: addClip,
    editClip: editClip,
    renameClip: renameClip,
    deleteClip: deleteClip,
  };

  return (
    <MultiContext.Provider value={contextValue}>
      {children}
    </MultiContext.Provider>
  );
}
