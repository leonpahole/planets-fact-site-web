import { DesktopNavbar } from "@/components/layout/Navbar/DesktopNavbar";
import { MobileNavbar } from "@/components/layout/Navbar/MobileNavbar";
import { PlanetsModels } from "@/util/planets/planets.models";

interface IProps {
  planets: PlanetsModels.Planet[];
}

export const Navbar = ({ planets }: IProps) => {
  return (
    <>
      <DesktopNavbar planets={planets} />
      <MobileNavbar planets={planets} />
    </>
  );
};
