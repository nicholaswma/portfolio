import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicholas Ma - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <div className="logo">
            <img src="img/devjane.png" alt="" />
          </div>
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#">Home</a>
              </li>
              <li className="nav__item">
                <a href="#services">My Services</a>
              </li>
              <li className="nav__item">
                <a href="#">About Me</a>
              </li>
              <li className="nav__item">
                <a href="#">My Work</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
            Hi, I am <strong>Nicholas</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro">
            front-end dev
          </p>
        </section>
        <section className="my-services" id="services">
          <h2 className="section__title section__title--services">What I do</h2>
          <div className="services">
            <div className="service">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Home;
