import ImgBlock from "./imgBlock";

const photos = [
  { title: "Beauté", src: "/Audrey - coiffure by Nicolas 2022-11-13.webp" },
  {
    title: "Bien-être",
    src: "/Prestation Massage Hawaien - Anne Julie - 2022-07-03 (6)_edited.jpg",
  },
  { title: "Culinaire", src: "/Tarte citron meringuée by Patricia.jpeg" },
  { title: "Artisanat", src: "/IMG_3424.jpeg" },
  { title: "Autres", src: "/Jolie fille.jpg" },
];

export default function ServicesYoudy() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-3xl">
        LE SERVICE DES APPRENTIS POUR LES PARTICULIERS
      </h1>
      <p className="text-xl">
        Paris - Ile de France / En cours de développement pour toute la France
      </p>

      <div className="flex justify-around my-10 px-20">
        {photos.map((ele, index) => {
          return <ImgBlock key={index} title={ele.title} src={ele.src} />;
        })}
      </div>

      <p className="text-xl mt-4 mb-2">
        Découvrez la première plateforme en ligne de réservations de services
        d’apprentis.
      </p>
      <p className="text-xl mb-4">
        Un choix de prestations à petits prix qui aident un apprenti à devenir
        un professionnel dans son métier.
      </p>
    </div>
  );
}
