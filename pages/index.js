import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Image
            src="/images/9egg.png"
            height={200}
            width={500}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <Header title="Welcome to 9egg!" />
      </main>

      <Footer />
    </div>
  );
}
