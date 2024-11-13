import React, { useState , useEffect} from 'react';
import Background from './components/background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
const App = () => {

  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to", text2: "your passions"}
  ]
 
 
  const [heroCount, setheroCount] = useState(2);
  const [playStatus, setplayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setheroCount((count)=>{return count===2?0: count+1})
    }, 3000);
  },[]);


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero 
      setplayStatus={setplayStatus}
      setheroCount={setheroCount}
      heroCount={heroCount}
      heroData={heroData[heroCount]}
      playStatus={playStatus}
      />
    </div>
  );
}


export default App
