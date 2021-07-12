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
  const [message, setMessage] = useState('default')
  const [pic, setPic] = useState("");
  const [scene, setScene] = useState("study");

  useEffect(() => {
    window.addEventListener("keyup", downHandler);
    nextLine(jay[0],'study', level)
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

  const nextLine = (character, currentScene, level) => {
    // setMessage(character[0].scene[1][1][0].txt)
    // setScene(currentScene)
    let prop 
    if (currentScene === 'study') {
      prop = character.study
    }
    console.log(prop[level][0][0].txt)
    setMessage(prop[level][0][0].txt)
    console.log('message set to => '+message)
  }

  const randomize = (lengthor) => {
		return Math.floor(Math.random() * lengthor.length);
  };
  

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
      <button onClick={ () => nextLine(jay[0],'study', level)}>Next</button>
    </div>
  )
}


/*

[] Tout le texte
[] Randomiser texte
[] Composant du texte et perso
[] Letter by letter effect

*/