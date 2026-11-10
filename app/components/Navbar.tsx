"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return <header className="artist-nav"><Link href="/" aria-label="CDVRS home" className="artist-wordmark">CDVRS<span>✳</span></Link><nav aria-label="Main navigation">{[{href:"/",label:"Home"},{href:"/music",label:"Music"},{href:"/cdvrswrld",label:"My World"}].map(link=><Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined}>{link.label}</Link>)}</nav><Link href="/contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></Link></header>;
}
