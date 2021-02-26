import Head from 'next/head';

import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext';

import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Start | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
