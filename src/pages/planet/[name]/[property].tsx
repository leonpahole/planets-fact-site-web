import { NavbarLayout } from "@/components/layout/NavbarLayout";
import { Planet } from "@/components/planet/Planet";
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
  const isValid = PlanetsModels.isValidContent(query.property as string);
  if (!isValid) {
    return {
      notFound: true,
    };
  }

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

export default function PlanetPage({ planet, planets }: IProps) {
  const title = `${planet.name} | Planet facts`;
  const description = `Facts about planet ${planet.name}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarLayout planets={planets}>
        <Planet planet={planet} />
      </NavbarLayout>
    </>
  );
}
