"use client";
import { Heart, History, Search } from "lucide-react";
import { useState } from "react";
import LoginModal from "./login-modal";
import SearchContent from "./search-content";

interface StateType {
  searchIsActive: boolean;
  recentIsActive: boolean;
  favoritesIsActive: boolean;
}

export default function SideMenu() {
  const [state, setState] = useState<StateType>({
    searchIsActive: false,
    recentIsActive: false,
    favoritesIsActive: false,
  });

  const handleItemClick = (itemName: keyof StateType) => {
    setState((prevState) => ({
      searchIsActive: false,
      recentIsActive: false,
      favoritesIsActive: false,
      [itemName]: !prevState[itemName],
    }));
  };

  return (
    <>
      <div className=" gap- absolute left-0 top-0 z-50 flex h-screen w-20 flex-col items-center justify-between bg-white p-3 pt-16 align-middle shadow-lg shadow-slate-400">
        <div className="flex flex-col gap-8">
          <Logo />
          <MenuItem
            state={state.searchIsActive}
            name="Search"
            icon={Search}
            onClick={() => handleItemClick("searchIsActive")}
          />
          <MenuItem
            state={state.recentIsActive}
            name="Recent"
            icon={History}
            onClick={() => handleItemClick("recentIsActive")}
          />
          <MenuItem
            state={state.favoritesIsActive}
            name="Favorites"
            icon={Heart}
            onClick={() => handleItemClick("favoritesIsActive")}
          />
        </div>
        <div>
          <button
            className="btn m-2 self-end"
            onClick={() => {
              const modal = document.getElementById("my_modal_1");
              if (modal instanceof HTMLDialogElement) {
                modal.showModal();
              }
            }}
          >
            Login
          </button>
          <LoginModal id="my_modal_1" />
        </div>

        <div className="absolute bottom-0 h-2 w-full bg-yellow-400" />
      </div>
      {state.searchIsActive && (
        <SearchContent onClick={() => handleItemClick("searchIsActive")} />
      )}
    </>
  );
}

function Logo() {
  return <div className="absolute left-0 top-0 h-12 w-full bg-red-800"></div>;
}
function MenuItem(props: {
  state: boolean;
  name: string;
  icon: React.ElementType;
  onClick: () => void;
}) {
  return (
    <div
      onClick={props.onClick}
      className={`${props.state ? "text-gray-900" : "text-gray-500"} flex cursor-pointer flex-col items-center`}
    >
      <props.icon />
      <div className=" side-menu-font">{props.name}</div>
    </div>
  );
}
