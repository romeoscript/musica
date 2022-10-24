import { createContext, useState, useEffect } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [newRelease, setNewRelease] = useState([]);
  const [audioQueue, setAudioQueue] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);

  function fetchAudio() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3b68a0e148mshe3db36ded1779fcp119a09jsn4947aa0d4692",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
      .then((response) => response.json())

      .then((data) => {
        const transformedMovies = [];
        data.forEach((audioData) => {
          if (!audioData.images) return null;

          transformedMovies.push({
            id: audioData.key,
            title: audioData.title,
            sub: audioData.subtitle,
            image: audioData.images.coverart,
            img: audioData.images.background,
            url: audioData.hub.actions[1].uri,
          });
        });
        setNewRelease(transformedMovies);
        console.log(transformedMovies[0]);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetchAudio();
  }, []);
  return (
    <MusicContext.Provider
      value={{
        newRelease,
        audioQueue,
        setAudioQueue,
        trackIndex,
        setTrackIndex,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
