"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [
  { name: "Nos Services", href: "/" },
  {
    name: "Notre Histoire",
    href: "//",
  },
  { name: "Comment ça marche ?", href: "//" },
  { name: "Blog", href: "//" },
  { name: "Recherchez", href: "//" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row m-auto">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2  p-3 text-sm font-light  md:flex-none md:justify-start md:p-2 md:px-3 color-yellow linkHeader",
              {
                " primary-color bg-color-yellow": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
}
