import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Image from "next/image";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <Banner />

      <main className="mx-auto px-8 sm:px-16 max-w-7xl">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    let response = await fetch("https://www.jsonkeeper.com/b/Z2GO");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const exploreData = await response.json();

    response = await fetch("https://www.jsonkeeper.com/b/4BPR");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const cardsData = await response.json();

    return {
      props: {
        exploreData,
        cardsData,
      },
    };
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export default Home;
