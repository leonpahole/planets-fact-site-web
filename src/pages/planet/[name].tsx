import { PlanetsService } from "@/util/planets/planets.service";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const planet = await PlanetsService.get(query.name as string);
  if (!planet) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: PlanetsService.getLink(planet, "overview"),
      permanent: true,
    },
  };
};

export default function PlanetPage() {
  return null;
}
