import DemAdhform from "../ui/demAdh/demAdhform";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  /*const dems = await demAdh.orderBy("createdAt", "desc").limitToLast(6).get();
  if (dems) {
    console.log(dems.docs);
  }*/

  return (
    <>
      <h1 className="font-bold text-3xl ">Contact Us</h1>
      <DemAdhform />
    </>
  );
}
