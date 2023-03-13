import { PlanetsService } from "@/util/planets/planets.service";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const planets = await PlanetsService.list();
    return {
      redirect: {
        destination: PlanetsService.getLink(planets[0], "overview"),
        permanent: true,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default function Home() {
  return null;
}
