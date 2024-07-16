import HeroHome from "@/components/home/HeroHome";
import HomeAdvantages from "@/components/home/HomeAdvantges";
import HomeServiceOne from "@/components/home/HomeServiceOne";
import HomeServiceTwo from "@/components/home/HomeServiceTwo";
import HomeSlider from "@/components/home/HomeSlider";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <NavBar/>
  <HeroHome/>
  <HomeSlider/>
  <HomeAdvantages/>
  <HomeServiceOne/>
  <HomeServiceTwo/>
  
  </>
  );
}
