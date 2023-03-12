import { PlanetsService } from "@/util/planets/planets.service";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const planets = await PlanetsService.list();
  return {
    redirect: {
      destination: PlanetsService.getLink(planets[0]),
      permanent: true,
    },
  };
};

export default function Home() {
  return (
    <Head>
      <title>Planets</title>
      <meta name="description" content="Planets fact site" />
    </Head>
  );
}
