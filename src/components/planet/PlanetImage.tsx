import { PlanetsModels } from "@/util/planets/planets.models";
import Image from "next/image";
import { useRouter } from "next/router";

interface IProps {
  planet: PlanetsModels.Planet;
}

export const PlanetImage = ({ planet }: IProps) => {
  const router = useRouter();
  const { property } = router.query as { property: PlanetsModels.ContentType };

  const getImageProps = (size: number) => {
    const PropertyMap: Record<
      PlanetsModels.ContentType,
      keyof typeof planet.images
    > = {
      "surface-geology": "planet",
      overview: "planet",
      "internal-structure": "internal",
    };

    const imageSrc =
      planet.images[PropertyMap[property as PlanetsModels.ContentType]];

    return {
      src: imageSrc,
      alt: "",
      width: size,
      height: size,
      style: {
        transform: `scale(${planet.relativeSize})`,
      },
    };
  };

  const getGeologyImage = (width: number, className: string) => {
    const aspectRatio = 199 / 163;
    const height = width * aspectRatio;

    return {
      src: planet.images.geology,
      alt: "",
      width,
      height,
      className: `absolute left-0 right-0 mx-auto ${className}`,
    };
  };

  return (
    <div className="relative mx-6">
      <Image {...getImageProps(528)} className="hidden lg:block" />
      <Image {...getImageProps(369)} className="hidden md:block lg:hidden" />
      <Image {...getImageProps(224)} className="block md:hidden" />
      {property === "surface-geology" && (
        <>
          <Image {...getGeologyImage(163, "hidden lg:block bottom-3")} />
          <Image
            {...getGeologyImage(120, "hidden md:block lg:hidden bottom-2")}
          />
          <Image {...getGeologyImage(80, "block md:hidden bottom-1")} />
        </>
      )}
    </div>
  );
};
