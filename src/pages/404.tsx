import { NavbarLayout } from "@/components/layout/NavbarLayout";
import { Planet } from "@/components/planet/Planet";
import { PlanetsModels } from "@/util/planets/planets.models";
import { PlanetsService } from "@/util/planets/planets.service";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const title = `Not found | Planet facts`;
  const description = `Planet not found`;

  const planet = PlanetsModels.PlanetNotFound;

  const [planets, setPlanets] = useState<PlanetsModels.Planet[]>([]);

  useEffect(() => {
    async function get() {
      setPlanets(await PlanetsService.list());
    }

    get();
  }, []);

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
