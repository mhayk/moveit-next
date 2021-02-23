import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head';

import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Start | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
