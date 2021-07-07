import Head from 'next/head'
import Image from 'next/image'
import guy from '../public/jay_smirk.svg'
import { jay } from './jay'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";

export default function Home() {
  console.log(jay[0].cheerup[1][1].other)
  return (
    <div className={styles.container}>
      <Head>
        <title>Study love</title>
        <meta name="description" content="Study for love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{ jay[0].cheerup[1][1].other }
      </p>
      <Image src={guy} alt="Vercel Logo"/>
    </div>
  )
}
// keepGoing[props.level][0][randomNum].pic)