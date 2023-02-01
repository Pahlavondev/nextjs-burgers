import Image from "next/image";
import burger from "../public/fatburger.png";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Home </title>
        <meta name="title" content="Fat burgers" />
      </Head>

      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Home Page
        </h1>

        <div className={styles.mainImage}>
          <Image src={burger} alt="fat burger" width={400} height={300} />
        </div>

        <p className={styles.text}>
          What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You
          can argue about other components of the filling, because this is a
          matter of taste.
        </p>

        <p className={styles.text}>
          There are a couple of other factors that affect appetite: prices,
          quality of service, the right atmosphere of the establishment.
        </p>

        <Link className={styles.btn} href="/burgers">
          All Burgers
        </Link>
      </div>
    </>
  );
}
