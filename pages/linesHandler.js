
import Head from 'next/head'
import Image from 'next/image'
import guy from '../public/jay_smirk.svg'
import { jay } from './jay'
import styles from '../styles/lineHandler.module.scss'
import React, { useState } from "react";
import Message from "./messages";

export default function LineHandler(props) {

  const [position, setPosition] = useState(0)
  

  return (
    <div className={styles.container}>
      <Image src={guy} alt="Vercel Logo"/>
      <p>le message {props.message}</p>
      {/* <Message message={message} key={message} /> */}
    </div>
  )
}


/*

[] Tout le texte
[] Randomiser texte
[] Composant du texte et perso
[] Letter by letter effect

*/