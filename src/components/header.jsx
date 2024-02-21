import { linksPages } from 'src/configs/links';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { ThemeTogle } from './theme-togle';
export default function Header() {
  return (
    <Navbar isBlurred isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">CCR</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {linksPages.map(({ key, link, lable }) => (
          <NavbarItem key={key}>
            <NavLink
              to={link}
              className={({ isActive }) => (isActive ? 'font-semibold' : '')}
            >
              {lable}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeTogle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
