import Head from 'next/head'
import Image from 'next/image'
import guy from '../public/jay_smirk.svg'
import { jay } from './jay'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import LineHandler from './linesHandler'

export default function Home() {

  const [level, setLevel] = useState(0)
  const [position, setPosition] = useState(0)
  const [message, setMessage] = useState('')
  const [pic, setPic] = useState("");
  const [scene, setScene] = useState("study");
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    window.addEventListener("keyup", downHandler);
    
    setTimeout(()=>{
      initialLine(jay[0], 'study', level)
    }, 1000)
  }, [])

  function downHandler({ key }) {
		let shouldHandleKeyDown = true;
		if (key === "Enter" || key === " ") {
			if (shouldHandleKeyDown) {
				document.querySelector("button").click();
				shouldHandleKeyDown = false;
			}
		}
  }
  
  // const randomizer = ()

  // const nextLine = (character, currentScene, level) => {
  //   // setMessage(character[0].scene[1][1][0].txt)
  //   // setScene(currentScene)
    
  //   let prop 
  //   if (currentScene === 'study') {
  //     prop = character.study
  //   } else if (currentScene === 'intro') {
  //     prop = character.intro
  //   } else if (currentScene === 'studyOn') {
  //     prop = character.studyOn
  //   }
  //   if (position === 0) {
  //     let x = randomize(prop[level])
  //     setRandomNum(x)
  //     console.log("RANDOMNUMBER ==== "+x)
  //   }
    
  //   // const secondRandomNum = randomize(prop[level][0]);
  //   // if (position === 0) {
  //   //   console.log("%c position EGALE 0", 'color:#bad455')
  //   //   const setting =( )=> { 
  //   //     setRandomNum(randomize(prop[level]))
  //   //     console.log("%c random ^^ " + randomize(prop[level]), 'color:#bad455')
  //   //     modifying()
  //   //   }
      
  //   //   const modifying = () => {
  //   //     console.log("%c random number is: " + randomNum,"color:#e3c56a"),
  //   //     setMessage(prop[level][randomNum][position].txt),
  //   //     setPic(prop[level][randomNum][position].pic)
  //   //   }
  //   //   setting()

      
      
  //   // } else {
  //   //   setMessage(prop[level][randomNum][position].txt)
  //   //   setPic(prop[level][randomNum][position].pic)
  //   // }
    
  //   nextLineLaunch(character, currentScene, level)
    
    
  // }

  const initialLine = async (character, currentScene, level) => {
    console.log(character,currentScene)
    let prop 
    if (currentScene === 'study') {
      prop = character.study
    } else if (currentScene === 'intro') {
      prop = character.intro
    } else if (currentScene === 'studyOn') {
      prop = character.studyOn
    }
    if (position === 0) {
      await randomer(prop, level)
      console.log("%c AWAITED "+randomNum, 'color:#0ff1ce')
    }
    

      console.log("%c random "+randomNum, 'color:#bad455')
      setMessage(prop[level][randomNum][position].txt)
      setPic(prop[level][randomNum][position].pic)
    
    if (position <= prop[level][randomNum].length - 1) {
      setPosition(position + 1)
      console.log("position is set to => "+position)
    }
  }

  const randomize = (lengthor) => {
		return Math.floor(Math.random() * lengthor.length);
  };

  const randomer = (prop, level) => {
    return new Promise((resolve)=>{
      resolve( setRandomNum(randomize(prop[level])), console.log("RANDOM == "+randomNum) )
  })
  }

  const nextLine = () => {
    let prop 
    if (scene === 'study') {
      prop = character.study
    } else if (scene === 'intro') {
      prop = character.intro
    } else if (scene === 'studyOn') {
      prop = character.studyOn
    }
    setMessage(prop[level][randomNum][position].txt)
  }
  

  // console.log(jay[0].study[1][1][0].txt)
  // console.log(jay[0].study[1][1][1].txt)
  return (
    <div className={styles.container}>
      <Head>
        <title>Study love</title>
        <meta name="description" content="Study for love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <p>{message}</p>
      <button onClick={ () => nextLine()}>Next</button>
      <Image src={guy} alt="Vercel Logo"/> */}
      <LineHandler
        scene={scene}
        // lovePoints={lovePoints}
        level={level}
        message={ message }
      />
      <button onClick={ () => nextLine()}>Next</button>
    </div>
  )
}


/*

[] Tout le texte
[] Randomiser texte
[] Composant du texte et perso
[] Letter by letter effect

*/