import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext';

import style from '../styles/pages/Home.module.css';
import { ChallangesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallangesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallangesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}