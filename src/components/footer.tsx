// original dark footer

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/orgs/DotSlash-Community/dashboard", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/thedotslashcommunity?igsh=MTNmdmE5YWYxa3dhag%3D%3D", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/dotslash-iiitn/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dotslash@iiitn.ac.in", label: "Email" },
];

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/#about" },
      { label: "Roadmap", href: "/#roadmap" },
      { label: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Legacy", href: "/legacy" },
      { label: "Resources", href: "/resources" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Announcements", href: "/announcements" },
      { label: "Contact", href: "mailto:dotslash@iiitn.ac.in" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream-soft">
      <div className="container grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
        <div className="col-span-2">
          
            <Image
              src="/logo-full.png"
              alt="DotSlash"
              width={890}
              height={255}
              className="h-8 w-auto brightness-125"
            />

          <p className="mt-4 max-w-xs text-sm text-cream-soft/60">
            The IIITN Hub for competitive programming and DSA — built by
            students, for students.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-soft/15 text-cream-soft/70 transition-colors hover:border-brand-400 hover:text-brand-400"
                  aria-label={social.label}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-300">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-soft/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream-soft/10 py-5">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-cream-soft/45 md:flex-row">
          <p>© {new Date().getFullYear()} DotSlash</p>
          <p>Made with 🤍 by <a href = "#" className="underline text-orange-500 cursor-pointer">The Website Team</a></p>
        </div>
      </div>
    </footer>
  );
}


// -------------------------------------------------------------------------------------------------------------

// orange shade footer

// import Link from "next/link";
// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail } from "lucide-react";

// const SOCIAL_LINKS = [
//   { icon: Github, href: "https://github.com/orgs/DotSlash-Community/dashboard", label: "GitHub" },
//   { icon: Instagram, href: "https://www.instagram.com/thedotslashcommunity?igsh=MTNmdmE5YWYxa3dhag%3D%3D", label: "Instagram" },
//   { icon: Linkedin, href: "https://www.linkedin.com/company/dotslash-iiitn/", label: "LinkedIn" },
//   { icon: Mail, href: "mailto:dotslash@iiitn.ac.in", label: "Email" },
// ];

// const COLUMNS = [
//   {
//     title: "Explore",
//     links: [
//       { label: "About", href: "/#about" },
//       { label: "Roadmap", href: "/#roadmap" },
//       { label: "Leaderboard", href: "/leaderboard" },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       { label: "Legacy", href: "/legacy" },
//       { label: "Resources", href: "/resources" },
//       { label: "News", href: "/news" },
//     ],
//   },
//   {
//     title: "Info",
//     links: [
//       { label: "Announcements", href: "/announcements" },
//       { label: "Contact", href: "mailto:dotslash@iiitn.ac.in" },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-ink/10 bg-brand-400 text-cream">
//       <div className="container grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
//         <div className="col-span-2">
//           <Image
//             src="/logo-full.png"
//             alt="DotSlash"
//             width={890}
//             height={255}
//             className="h-8 w-auto brightness-125"
//           />
//           <p className="mt-4 max-w-xs text-sm text-cream-soft/90">
//             The IIITN Hub for competitive programming and DSA — built by
//             students, for students.
//           </p>
//           <div className="mt-5 flex items-center gap-3">
//             {SOCIAL_LINKS.map((social) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target={social.href.startsWith("http") ? "_blank" : undefined}
//                   rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/30 text-cream transition-colors hover:border-ink hover:text-ink"
//                   aria-label={social.label}
//                 >
//                   <Icon size={15} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {COLUMNS.map((col) => (
//           <div key={col.title}>
//             <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-ink">
//               {col.title}
//             </h4>
//             <ul className="space-y-2.5">
//               {col.links.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-cream-soft/80 transition-colors hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="border-t border-ink/10 py-5">
//         <div className="container flex flex-col items-center justify-between gap-2 text-xs text-white/90 md:flex-row">
//           <p>© {new Date().getFullYear()} DotSlash</p>
//           <p>Made with 🖤 by <a href = "#" className="underline text-ink cursor-pointer">The Website Team</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// -------------------------------------------------------------------------------------------------------------

// skin color footer

// import Link from "next/link";
// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail } from "lucide-react";

// const SOCIAL_LINKS = [
//   { icon: Github, href: "https://github.com/orgs/DotSlash-Community/dashboard", label: "GitHub" },
//   { icon: Instagram, href: "https://www.instagram.com/thedotslashcommunity?igsh=MTNmdmE5YWYxa3dhag%3D%3D", label: "Instagram" },
//   { icon: Linkedin, href: "https://www.linkedin.com/company/dotslash-iiitn/", label: "LinkedIn" },
//   { icon: Mail, href: "mailto:dotslash@iiitn.ac.in", label: "Email" },
// ];

// const COLUMNS = [
//   {
//     title: "Explore",
//     links: [
//       { label: "About", href: "/#about" },
//       { label: "Roadmap", href: "/#roadmap" },
//       { label: "Leaderboard", href: "/leaderboard" },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       { label: "Legacy", href: "/legacy" },
//       { label: "Resources", href: "/resources" },
//       { label: "News", href: "/news" },
//     ],
//   },
//   {
//     title: "Info",
//     links: [
//       { label: "Announcements", href: "/announcements" },
//       { label: "Contact", href: "mailto:hello@dotslash.com" },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-ink/10 bg-orange-200 text-ink">
//       <div className="container grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
//         <div className="col-span-2">
//           <Image
//             src="/logo-full.png"
//             alt="DotSlash"
//             width={890}
//             height={255}
//             className="h-8 w-auto"
//           />
//           <p className="mt-4 max-w-xs text-sm text-ink/55">
//             The IIITN Hub for competitive programming and DSA — built by
//             students, for students.
//           </p>
//           <div className="mt-5 flex items-center gap-3">
//             {[Github, Instagram, Linkedin, Mail].map((Icon, i) => (
//               <a
//                 key={i}
                
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 text-ink/55 transition-colors hover:border-ink hover:text-ink"
//                 aria-label="social link"
//                 >
//                 <Icon size={15} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {COLUMNS.map((col) => (
//           <div key={col.title}>
//             <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-600">
//               {col.title}
//             </h4>
//             <ul className="space-y-2.5">
//               {col.links.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-ink/60 transition-colors hover:text-ink"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="border-t border-ink/10 py-5">
//         <div className="container flex flex-col items-center justify-between gap-2 text-xs text-ink/60 md:flex-row">
//           <p>© {new Date().getFullYear()} DotSlash</p>
//           <p>Made with 🖤 by <a href="#" className="underline text-ink cursor-pointer">The Website Team</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ----------------------------------------------------------------------------------------------------------

// light background logo footer

// import Link from "next/link";
// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail } from "lucide-react";

// const SOCIAL_LINKS = [
//   { icon: Github, href: "https://github.com/orgs/DotSlash-Community/dashboard", label: "GitHub" },
//   { icon: Instagram, href: "https://www.instagram.com/thedotslashcommunity?igsh=MTNmdmE5YWYxa3dhag%3D%3D", label: "Instagram" },
//   { icon: Linkedin, href: "https://www.linkedin.com/company/dotslash-iiitn/", label: "LinkedIn" },
//   { icon: Mail, href: "mailto:dotslash@iiitn.ac.in", label: "Email" },
// ];

// const COLUMNS = [
//   {
//     title: "Explore",
//     links: [
//       { label: "About", href: "/#about" },
//       { label: "Roadmap", href: "/#roadmap" },
//       { label: "Leaderboard", href: "/leaderboard" },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       { label: "Legacy", href: "/legacy" },
//       { label: "Resources", href: "/resources" },
//       { label: "News", href: "/news" },
//     ],
//   },
//   {
//     title: "Info",
//     links: [
//       { label: "Announcements", href: "/announcements" },
//       { label: "Contact", href: "mailto:dotslash@iiitn.ac.in" },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-ink/10 bg-ink text-cream-soft">
//       <div className="container grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
//         <div className="col-span-2">
//           <div className="relative inline-block isolate">
//             <div className="absolute -inset-0.5 z-0 rounded-[1.5rem] bg-brand-300/95 blur-xl" />
//             <Image
//               src="/logo-full.png"
//               alt="DotSlash"
//               width={890}
//               height={255}
//               className="relative z-10 h-8 w-auto"
//             />
//           </div>
//           <p className="mt-4 max-w-xs text-sm text-cream-soft/60">
//             The IIITN Hub for competitive programming and DSA — built by
//             students, for students.
//           </p>
//           <div className="mt-5 flex items-center gap-3">
//             {SOCIAL_LINKS.map((social) => {
//               const Icon = social.icon;
//               return (
//                   <a
//                   key={social.label}
//                   href={social.href}
//                   target={social.href.startsWith("http") ? "_blank" : undefined}
//                   rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-soft/15 text-cream-soft/70 transition-colors hover:border-brand-400 hover:text-brand-400"
//                   aria-label={social.label}
//                 >
//                   <Icon size={15} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {COLUMNS.map((col) => (
//           <div key={col.title}>
//             <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-300">
//               {col.title}
//             </h4>
//             <ul className="space-y-2.5">
//               {col.links.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-cream-soft/65 transition-colors hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="border-t border-cream-soft/10 py-5">
//         <div className="container flex flex-col items-center justify-between gap-2 text-xs text-cream-soft/45 md:flex-row">
//           <p>© {new Date().getFullYear()} DotSlash</p>
//           <p>
//             Made with 🤍 by{" "}
//             <a href="#" className="cursor-pointer text-orange-500 underline">
//               The Website Team
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }