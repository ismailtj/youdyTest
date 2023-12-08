import AlbumContainer from "./ui/album/albumContainer";
import Offers from "./ui/offers/offers";
import ServicesYoudy from "./ui/servicesYoudy/servicesYoudy";
import Testem from "./ui/testem/testem";

export default function Home() {
  return (
    <main>
      <AlbumContainer />
      <ServicesYoudy />
      <Offers />
      <Testem />
    </main>
  );
}

