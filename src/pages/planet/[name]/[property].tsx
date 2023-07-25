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
  params,
}) => {
  const planet = await PlanetsService.get(params!.name as string);
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
