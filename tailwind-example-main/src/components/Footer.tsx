import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const { data } = useContext(DataContext);
  return (
    <footer className="bg-purple-900 text-white w-screen mt-8 flex items-center flex-col gap-2">
      <div className="mt-4 flex gap-4 font-semibold">
        {data?.components.footer.links.map((link) => (
          <span
          className="hover:opacity-70 cursor-pointer"
          >{link}</span>
        ))}
      </div>
      <h3>Made with 💖</h3>
      <small>LoveCats © 2024</small>
    </footer>
  );
}
