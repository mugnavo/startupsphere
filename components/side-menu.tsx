import { Heart, History, LineChart, Megaphone, Search } from "lucide-react";
import { Fragment } from "react";

import LoginModal from "./login-modal";
import SidebarLink, { type SidebarLinkProps } from "./sidebar-link";

const SIDEBAR_LINKS: SidebarLinkProps[] = [
  { href: "/search", name: "Search", icon: <Search size={22} /> },
  { href: "/recents", name: "Recent", icon: <History size={22} /> },
  { href: "/favorites", name: "Favorites", icon: <Heart size={22} /> },
  { href: "/trending", name: "Trending", icon: <Megaphone size={22} /> },
  { href: "/top", name: "Top", icon: <LineChart size={22} /> },
];

export default function SideMenu() {
  return (
    <div className=" gap- absolute left-0 top-0 z-50 flex h-screen w-20 flex-col items-center justify-between bg-white p-3 pt-16 align-middle shadow-lg shadow-slate-400">
      <div className="flex flex-col items-center gap-8">
        <Logo />

        {SIDEBAR_LINKS.map((item, index) => (
          <Fragment key={item.href}>
            <SidebarLink item={item} />

            {index === 2 && <div className="m-2 w-3 rounded-lg border border-gray-300" />}
          </Fragment>
        ))}
      </div>
      <LoginModal id="my_modal_1" />

      <div className="absolute bottom-0 h-2 w-full bg-yellow-400" />
    </div>
  );
}

function Logo() {
  return <div className="absolute left-0 top-0 h-12 w-full bg-red-800"></div>;
}
