"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const path = usePathname();
  return (
    <Link className={path.includes(href) ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
