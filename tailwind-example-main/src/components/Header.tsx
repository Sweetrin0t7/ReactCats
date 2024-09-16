import { UserCircle } from "@phosphor-icons/react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Header() {
    const { data } = useContext(DataContext);
  return (
    <header
    className="bg-purple-900 flex justify-between px-16 h-20 items-center text-white"
    >
      <span className="text-3xl font-bold">LoveCats</span>
      <ul className="links flex gap-8 text-lg font-semibold">
        {data?.components.header.links.map(link => (
            <li
            className="cursor-pointer hover:opacity-70"
            >{link}</li>
        ))}
      </ul>
      <UserCircle size={32} 
      className="cursor-pointer hover:opacity-70"
      />
    </header>
  );
}
