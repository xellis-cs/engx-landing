import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyEngX from "@/components/WhyEngX";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Frameworks from "@/components/Frameworks";
import SquadBuilder from "@/components/SquadBuilder";
import Leadership from "@/components/Leadership";
import Insights from "@/components/Insights";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatFab from "@/components/ChatFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyEngX />
        <Services />
        <HowWeWork />
        <Frameworks />
        <SquadBuilder />
        <Leadership />
        <Insights />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
      <ChatFab />
    </>
  );
}
