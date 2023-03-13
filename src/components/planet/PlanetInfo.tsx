import { SourceIcon } from "@/components/icon/SourceIcon";
import { usePlanetContentLinks } from "@/components/planet/usePlanetContentLinks";
import { LinkGroup } from "@/components/shared/LinkGroup";
import { PlanetsModels } from "@/util/planets/planets.models";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  planet: PlanetsModels.Planet;
}

export const PlanetInfo = ({ planet }: IProps) => {
  const contentLinks = usePlanetContentLinks(planet);

  const router = useRouter();
  const { property } = router.query;

  const PropertyMap: Record<
    PlanetsModels.ContentType,
    "overview" | "structure" | "geology"
  > = {
    "surface-geology": "geology",
    overview: "overview",
    "internal-structure": "structure",
  };

  const content = planet[PropertyMap[property as PlanetsModels.ContentType]];

  return (
    <>
      <div className="flex-1 text-center md:basis-84.75 md:text-start lg:basis-auto">
        <h2 className="mb-4 text-h1.m uppercase md:mb-6 md:text-h1.t lg:mb-5.75 lg:text-h1">
          {planet.name}
        </h2>
        <p className="mb-8 font-alt text-body.t md:mb-5.5 lg:mb-12.25 lg:text-body">
          {content.content}
        </p>
        <div className="font-alt text-s lg:text-body">
          <span className="opacity-50">Source : </span>
          <Link
            href={content.source}
            className="inline-flex items-center"
            target="_blank"
          >
            <span className="mr-2 font-bold underline opacity-50">
              Wikipedia
            </span>
            <SourceIcon className="h-3 w-3 fill-white" />
          </Link>
        </div>
      </div>
      <LinkGroup
        className="hidden flex-1 basis-70.25 md:flex lg:basis-auto"
        items={contentLinks}
        activeColor={planet.color}
      />
    </>
  );
};
