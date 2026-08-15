"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Menu, X, User, LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Legacy", href: "/legacy" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Announcements", href: "/announcements" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?bt=${encodeURIComponent(query.trim())}`);
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md shadow-nav bg-gradient-to-r from-brand-200/90 via-brand-100/90 to-brand-200/90"
          : "bg-gradient-to-r from-brand-100/70 via-cream-soft/60 to-brand-100/70 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[70px]">

        <Link href="/#home" className="flex shrink-0 items-center" aria-label="DotSlash home">
          <Image
            src="/logo-full.png"
            alt="DotSlash"
            width={890}
            height={255}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </Link>


        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/#home"
                ? pathname === "/"
                : pathname === link.href || pathname === link.href.replace("/#", "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:text-ink",
                  active && "text-ink"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-[2.5px] rounded-full bg-brand-600"
                  />
                )}
              </Link>
            );
          })}
        </nav>


        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="hidden md:flex">
            <div className="relative">
              <Search
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search BT ID"
                className="h-9 w-40 rounded-full border border-ink/10 bg-white/80 pl-9 pr-3 text-xs font-medium text-ink placeholder:text-ink/40 outline-none transition-all focus:w-52 focus:border-brand-400 focus:ring-2 focus:ring-brand-300/40 lg:w-48 lg:focus:w-60"
              />
            </div>
          </form>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white/70 bg-ink/10 text-ink shadow-sm transition-transform hover:scale-105"
              aria-label="Profile menu"
            >
              <User size={17} />
            </button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-12 w-48 overflow-hidden rounded-xl border border-ink/10 bg-white py-1.5 shadow-card"
                >
                  {[
                    { icon: User, label: "My Profile", href: "/profile" },
                    { icon: Settings, label: "Settings", href: "/settings" },
                    // { icon: LogOut, label: "Log out", href: "/logout" },     logout icon disabled
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-ink/75 hover:bg-brand-50 hover:text-brand-600"
                    >
                      <item.icon size={15} /> {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10 bg-cream-soft/95 backdrop-blur-md lg:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-brand-50 hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="mt-2 flex md:hidden">
                <div className="relative w-full">
                  <Search
                    size={15}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40"
                  />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search BT ID"
                    className="h-10 w-full rounded-full border border-ink/10 bg-white pl-9 pr-3 text-sm outline-none focus:border-brand-400"
                  />
                </div>
              </form>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
