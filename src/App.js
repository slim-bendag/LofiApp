import './App.css';
import background from "./images/background1.png";
import background11 from "./images/background11.mp4";
import {useState, useRef} from "react";
import track1 from "./music/Track1.mp3";
import track2 from "./music/Track2.mp3";
import track3 from "./music/Track3.mp3";
import track4 from "./music/Track4.mp3";
import track5 from "./music/Track5.mp3";
import track6 from "./music/Track6.mp3";
import track7 from "./music/Track7.mp3";
import track8 from "./music/Track8.mp3";
import track9 from "./music/Track9.mp3";
import track10 from "./music/Track10.mp3";
import track11 from "./music/Track11.mp3";
import track12 from "./music/Track12.mp3";
import track13 from "./music/Track13.mp3";
import fire from "./music/fire.mp3";
import rain from "./music/rain.mp3";
import thunder from "./music/thunder.mp3";
import water from "./music/water.mp3";




function App() {
  
  const track = [
    {name:"1", src:track1},
    {name:"2", src:track2},
    {name:"3", src:track3},
    {name:"4", src:track4},
    {name:"5", src:track5},
    {name:"6", src:track6},
    {name:"7", src:track7},
    {name:"8", src:track8},
    {name:"9", src:track9},
    {name:"10", src:track10},
    {name:"11", src:track11},
    {name:"12", src:track12},
    {name:"13", src:track13}
  ];

  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [volumeShown, setVolumeShown] = useState(false);
  const [volumeShownRain, setVolumeShownRain] = useState(false);
  const [volumeShownFire, setVolumeShownFire] = useState(false);
  const [volumeShownThunder, setVolumeShownThunder] = useState(false);
  const [volumeShownWater, setVolumeShownWater] = useState(false);
  const [effectPlay, setEffectPlay]= useState(false);
  const [rainVol, setRainVol]=useState(0.5);
  const [thunderVol, setThunderVol]=useState(0.5);
  const [fireVol, setFireVol]=useState(0.5);
  const [waterVol, setWaterVol]=useState(0.5);
  const [effect, setEffect] = useState(false);

  const audioRef = useRef(null);
  const fireRef = useRef(null);
  const rainRef = useRef(null);
  const thunderRef = useRef(null);
  const waterRef = useRef(null);



  

  const handleNext = () => {
    if (currentTrack < 12) {
      setCurrentTrack(currentTrack+1);
    } else {
      setCurrentTrack(0);
    }
    
    
  };

  const handlePrevious = () => {
    if (currentTrack > 0) {
    setCurrentTrack(currentTrack-1);
    } else {
    setCurrentTrack(12);
    }
    
  };


  const handlePaused = () => {
    setPaused(!paused);
    if (paused === true) {
      audioRef.current.pause();
    } else { 
      audioRef.current.play();
    };

  }

  const handleMuted = () => {
    setMuted(!muted);
    if (muted === true) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    };
  }

  const handleVolume = (e,setY ,setRef) => {
    const newVolume= e.target.value;
    setY(newVolume);
    setRef.current.volume = newVolume;
  }

  const handleAudio = (prop) => {
    setEffectPlay(!effectPlay);
    if (effectPlay) {
      prop.current.pause();
      if (prop === rainRef) {
        setEffect(false);
      }
    } else {
      prop.current.play();
      if (prop === rainRef) {
        setEffect(true);
      }
    }
  }

  
  return (
    <>
      <div className="container" >
        {effect ? <video src={background11} alt="background" className='backgroundS' loop autoPlay/> : <img src={background} alt="background" className='backgroundS'/>}
        <div className="music-Container">
          <div className="MusicContolers">
            <div className='back'>
              <i className="fa-solid fa-backward-step fa-2xl" onClick={handlePrevious}></i>
            </div>
            <div className='pause'>
              {paused ? <i className="fa-regular fa-circle-pause fa-2xl" onClick={handlePaused}></i> : <i className="fa-regular fa-circle-play fa-2xl" onClick={handlePaused} ></i>}
            </div>
            <div className='forward'>
              <i className="fa-solid fa-forward-step fa-2xl" onClick={handleNext}></i>
            </div>
            <div className="audioContainer" onMouseOver={()=>setVolumeShown(true)} onMouseOut={()=>setVolumeShown(false)}>
              {muted ? <i className="fa-solid fa-volume-high fa-2xl" onClick={handleMuted} ></i> : <i className="fa-solid fa-volume-xmark fa-2xl" onClick={handleMuted}></i> }
              {volumeShown && <input type='range' min="0" max="1" value={volume} onChange={(e)=>handleVolume(e, setVolume, audioRef)} step="0.05"></input>}
            </div>
            <div className='aduioContainer' onMouseOver={()=>setVolumeShownRain(true)} onMouseOut={()=>setVolumeShownRain(false)}>
              <i className="fa-solid fa-cloud-showers-heavy fa-2xl" onClick={()=>handleAudio(rainRef)}></i>
              {volumeShownRain && <input type='range' min="0" max="1" value={rainVol} onChange={(e)=>handleVolume(e, setRainVol , rainRef)} step="0.05"></input>}
            </div>
            <div className='aduioContainer' onMouseOver={()=>setVolumeShownThunder(true)} onMouseOut={()=>setVolumeShownThunder(false)}>
              <i className="fa-solid fa-bolt fa-2xl" onClick={()=>handleAudio(thunderRef)}></i>
              {volumeShownThunder && <input type='range' min="0" max="1" value={thunderVol} onChange={(e)=>handleVolume(e, setThunderVol, thunderRef)} step="0.05"></input>}
            </div>
            <div className='aduioContainer' onMouseOver={()=>setVolumeShownFire(true)} onMouseOut={()=>setVolumeShownFire(false)}>
              <i className="fa-solid fa-fire fa-2xl" onClick={()=>handleAudio(fireRef)}></i>
              {volumeShownFire && <input type='range' min="0" max="1" value={fireVol} onChange={(e)=>handleVolume(e, setFireVol, fireRef)} step="0.05"></input>}
            </div>
            <div className='aduioContainer' onMouseOver={()=>setVolumeShownWater(true)} onMouseOut={()=>setVolumeShownWater(false)}>
              <i className="fa-solid fa-water fa-2xl" onClick={()=>handleAudio(waterRef)}></i>
              {volumeShownWater && <input type='range' min="0" max="1" value={waterVol} onChange={(e)=>handleVolume(e, setWaterVol, waterRef)} step="0.05"></input>}
            </div>
          </div>
          <div className="audioPlayer">
            <audio src={track[currentTrack].src} ref={audioRef} autoPlay></audio>
            <audio src={fire} ref={fireRef} ></audio>
            <audio src={rain} ref={rainRef} ></audio>
            <audio src={thunder} ref={thunderRef} ></audio>
            <audio src={water} ref={waterRef}></audio>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
