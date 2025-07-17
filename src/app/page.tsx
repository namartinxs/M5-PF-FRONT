import CampanhasList from "@/components/campanhaCardList";
import { campanhasFake } from "@/Data/capanhasFake";

export default function Home() {
  return (
    <>
      <CampanhasList campanhas={campanhasFake} imagemCard="/imageHands.png" />
    </>
  );
}
