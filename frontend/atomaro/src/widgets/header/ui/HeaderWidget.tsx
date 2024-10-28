import { useResponsive, useUser } from "@/app/providers";
import {
  ExampleLogoIcon,
  SolarLoginIcon,
  SolarNotificationBellIcon,
} from "@/shared/icons";
import { SolarHamburgerMenuIcon } from "@/shared/icons/solar-hamburger-menu";
import { SolarMagniferIcon } from "@/shared/icons/solar-magnifer";
import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { Button, IconButton } from "@/shared/ui/button";
import { FC } from "react";
import { headerLinks } from "../links";
import { NavLink } from "react-router-dom";

export const HeaderWidget: FC = () => {
  const { status } = useResponsive();
  const { user, getUser, logout } = useUser();

  return (
    <header>
      <div className="container py-5 flex justify-between items-center">
        <nav className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <ExampleLogoIcon />
            <span className="heading-2">Название</span>
          </div>
          <ul className="hidden md:flex body-s-strong gap-8">
            {headerLinks.map((link) => (
              <li className="py-0.5">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => (isActive ? "" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {status == "mobile" && (
          <IconButton color="neutral" variant="secondary" size="lg">
            <SolarHamburgerMenuIcon />
          </IconButton>
        )}

        {status != "mobile" && (
          <div className="flex gap-1">
            <Button className="py-3" size="md" color="neutral" variant="ghost">
              <SolarMagniferIcon />
              Поиск
            </Button>
            {user ? (
              <>
                <IconButton size="lg" color="neutral" variant="ghost">
                  <SolarNotificationBellIcon />
                </IconButton>
                <Avatar onClick={logout}>
                  <AvatarImage src={user.avatar_url} />
                </Avatar>
              </>
            ) : (
              <>
                <Button
                  className="py-3"
                  size="md"
                  color="neutral"
                  variant="secondary"
                >
                  Регистрация
                </Button>
                <Button
                  onClick={getUser}
                  className="py-3"
                  size="md"
                  variant="secondary"
                >
                  <SolarLoginIcon />
                  Вход
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
