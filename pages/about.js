// import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";
// import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="mt-4 mx-4 sm:mx-16">
      <Head>
        <title>About | Women Build Web3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="my-44 max-w-3xl">
        <h1 className="font-poppins-bold text-3xl sm:text-6xl sm:mb-2">
          Unlocking the next wave of web3 builders
        </h1>
        <p className="mb-4 sm:text-3xl sm:mb-8">
          We’re onboarding and retaining talented, diverse developers in web3.
        </p>
        <Link href="/contact" passHref>
          <a className="hover:text-white hover:bg-black border border-black border-solid rounded-full text-xs sm:text-2xl px-4 py-3">
            Sponsor us
          </a>
        </Link>
      </header>

      <section className="mb-44">
        <div className="sm:w-1/2">
          <p className="mb-16 sm:text-xl">
            Our collective is composed of software engineers, designers, content
            creators, technical writers, managers, and founders with
            wide-ranging experiences in tech. We span across 8 countries, 16
            cities, and 9 timezones and counting. We are united in our passion
            to decentralize the internet and to bring more diverse perspectives
            to web3.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="sm:w-1/2">
            <p className="mb-8 sm:text-xl">
              We aim to support underrepresented women and non-binary developers
              in web3 with education, opportunities, and funding. We want at least
              70% of our initial cohort to transition into web3 full-time within a
              year. Learn more about our goals in our whitepaper.
            </p>

            <a
              target="_blank"
              href="https://womenbuildweb3.hashnode.dev/whitepaper"
              rel="noopener noreferrer"
              className="hover:text-white hover:bg-black border border-black border-solid rounded-full text-xs sm:text-xl px-4 py-3"
            >
              View our whitepaper
            </a>

          </div>
        </div>
      </section>

      <section className="mb-44 mx-auto">
        <h2 className="mb-4 sm:text-5xl text-2xl text-center font-poppins-bold">
          Our Values
        </h2>
        <p className="w-4/5 mx-auto mb-8 text-center sm:max-w-2xl sm:text-xl">
          We are actively shaping our community to be a space where women and
          non-binary developers can thrive and innovate in.
        </p>

        <div className="sm:text-xl sm:grid sm:grid-cols-3 sm:gap-4">
          <div className="mb-8 sm:max-w-xs">
            <div className="font-poppins-bold">
              &#127760; Diversity & Inclusion
            </div>
            <p>We are inclusive, intersectional, and accessible.</p>
          </div>
          <div className="mb-8 sm:max-w-xs">
            <div className="font-poppins-bold">
              &#129309; Curiosity & Collaboration
            </div>
            <p>
            We learn from one another, teach each other, build together, and lift everyone up.
            </p>
          </div>
          <div className="mb-8 sm:max-w-xs">
            <div className="font-poppins-bold">
              &#128205; Courage & Leadership
            </div>
            <p>We are boldly paving paths and setting examples for others.</p>
          </div>
        </div>
      </section>

      <section className="mb-44 flex flex-col flex-center w-4/5 mx-auto">
        <h2 className="mb-4 text-2xl text-center font-poppins-bold">
          Our Partners
        </h2>
        <p className="mb-8 text-center sm:text-lg">
          We are working with web3 organizations to support our members and
          initiatives. Together, we will close gaps in diversity, equity, and
          inclusion in web3.
        </p>

        <Link href="/contact" passHref>
          <a className="mx-auto hover:text-white hover:bg-black border border-black border-solid rounded-full text-xs sm:text-lg px-4 py-3">
            Sponsor us
          </a>
        </Link>

        <div className="mt-8 flex flex-wrap gap-4 sm:justify-center">
          <div className="relative w-32 h-8 sm:w-60 sm:h-24">
            <Image
              alt="Developer Dao Logo"
              src="/D_D-Logo.png"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <div className="relative w-32 h-8 sm:w-60 sm:h-24">
            <Image
              alt="Filecoin Logo"
              src="/Filecoin-Logo.png"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <div className="relative w-32 h-8 sm:w-60 sm:h-24">
            <Image
              alt="Livepeer Logo"
              src="/Livepeer-Logo.png"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <div className="relative w-32 h-8 sm:w-60 sm:h-24">
            <Image
              alt="The Graph Logo"
              src="/The-Graph-Logo.png"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
