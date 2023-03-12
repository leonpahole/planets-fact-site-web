import { Navbar } from "@/components/layout/Navbar/Navbar";
import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface IProps {
  planet: PlanetsModels.Planet;
  planets: PlanetsModels.Planet[];
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  query,
}) => {
  const planet = await PlanetsService.get(query.name as string);
  if (!planet) {
    return {
      notFound: true,
    };
  }

  const planets = await PlanetsService.list();

  return {
    props: { planet, planets },
  };
};

export default function Home({ planet, planets }: IProps) {
  const title = `${planet.name} | Planet facts`;
  const description = `Facts about planet ${planet.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="min-h-screen bg-gray-700 bg-stars">
        <Navbar planets={planets} />
        <main>
          <div className="mx-auto max-w-275">{planet.name}</div>
        </main>
      </div>
    </>
  );
}
