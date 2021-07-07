import Head from 'next/head'
import Image from 'next/image'
import { jay } from './jay'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";

export default function Home() {
  console.log(jay[0].id[1].other)
  return (
    <div className={styles.container}>
      <Head>
        <title>Study love</title>
        <meta name="description" content="Study for love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {
        jay.basic.map(i => (
          <p>{i.text}</p>
        ))
      } */}
      <p>ici 
        <span>{ jay[0].id[1].other }</span>
      </p>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  )
}
// keepGoing[props.level][0][randomNum].pic)