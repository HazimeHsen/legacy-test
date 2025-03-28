import Head from "next/head";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import HowItWorks from "@/components/how-it-works";
import MissionSection from "@/components/mission-section";
import FAQsSection from "@/components/faqs-section";
import Footer from "@/components/footer";
import Popup from "@/components/popup";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legacy.am - Memorial Services</title>
        <meta
          name="description"
          content="Preserving memories with modern technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorks />
        <MissionSection />
        <FAQsSection />
        <Footer />
        {/* <Popup /> */}
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "errorPages"])),
    },
  };
}
