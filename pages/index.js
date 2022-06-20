import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Marcel Lotter, I am 23 and currently studying Bsc Mathematics and Computer Science through UNISA. I am completing my 3rd 
          year currently with the help of about half a million cups of coffee and occasional hamburger.
        </p>
        <p>
          Apparantly the answer to the Ultimate Question of Life, the Universe, and Everything is 42, although I personally like to think that 2
          should be in the running. It's got some character and it's the smallest prime number.
          </p>
        <div className={utilStyles.grid}>
          <a className={utilStyles.card}>
            <h2>Why I would want to work for SovTech</h2>
            <p>Over the past 2 and half years of my studies I have wanted to find somewhere that could help me find my footing in the 
              working enviroment through an internship or similar program. When I was visiting Cape Town earlier this year, I had the oppurtunity
              to accompany one of SovTech's employees to the Cape Town office. I was immediately hooked on the possibility of working there. The working 
              enviroment, amazingly friendly people and general relaxed but focused vibe made me excited to enter the working world. So the reason I want to
              work for SovTech can put down to the fact that they make projects fun and interesting through amazing people and amazing talent.</p>
          </a>

          <a className={utilStyles.card}>
            <h2>Studies</h2>
            <p>I had initially studied electronic engineering at the University of Stellenbosch, but through my second year, I discovered a 
              new passion in coding and computer systems. So I left Stellenbosch and started my new degree at UNISA.  </p>
          </a>

          <a className={utilStyles.card} >
            <h2>Coding Experience</h2>
            <p>During my studies at both Maties and UNISA, I have accumulated experience in C, C++, Python, ARM Assembly, hardware systems, network 
              security and data transportation, operating systems and an introductory course in AI and machine learning.
            </p>
          </a>

          <a className={utilStyles.card} >
            <h2>Other Experience</h2>
            <p>
              I have worked with data sorting and analysis, as a math tutor for gr. 10-12 and in the sales department of a casket manufacturer.
            </p>
          </a>
        </div>
      </section>
    </Layout>
  );
}



