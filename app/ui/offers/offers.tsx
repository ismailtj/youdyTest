import Image from "next/image";
import GoldenTitle from "../goldenTitle";
import SearchBlock from "./searchBlock";
import VideoBtn from "./videoBtn";

export default function Offers() {
  return (
    <div className="max-w-7xl mx-auto text-center my-12">
      <GoldenTitle title="Les Offres Youdy" />
      <p>
        Pour les catégories &quot;culinaire&quot;, la durée n&apos;est pas à
        prendre en compte. Vous pourrez définir l&apos;horaire de récupération
        de votre commande dans les propositions d&apos;horaire de
        l&apos;apprenti(e), via un formulaire lors de la réservation.
      </p>

      <div className="my-16 mx-auto flex max-w-xl gap-2 items-center">
        <p>
          Recherchez simplement par mots clés, code département, code postal :
        </p>
        <SearchBlock />
      </div>
      <div className="flex justify-around">
        <Image src={"/maps.png"} alt="map" width={550} height={300} />
        <VideoBtn />
      </div>
    </div>
  );
}
