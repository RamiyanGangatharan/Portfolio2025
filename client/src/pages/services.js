import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ServicesSidebar from "./components/services/ServicesSidebar";
import ServicesHero from "./components/services/ServicesHero";
import ServicesWhatIFix from "./components/services/ServicesWhatIFix";
import ServicesProcess from "./components/services/ServicesProcess";
import ServicesJobs from "./components/services/ServicesJobRecord";
import ServicesContact from "./components/services/ServicesContact";

export default function Services() {
  return (
    <>
      <Head>
        <title>RG Tech Services</title>
        <meta
          name="description"
          content="Professional computer repair and diagnostics"
        />
      </Head>

      <Header />

      <main id="start" className="services-layout">
        <ServicesSidebar />
        <div className="services-content"> 
          <ServicesHero />
          <ServicesWhatIFix />
          <ServicesProcess />
          <ServicesJobs />
          <ServicesContact />
        </div>
      </main>

      <Footer />
    </>
  );
}
