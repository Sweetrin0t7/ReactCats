import { useContext } from "react"
import Header from "./components/Header"
import { DataContext } from "./context/DataContext"

import ImageText from "./components/ImageText";
import SocialCard from "./components/SocialCard";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

function App() {
  const {data} = useContext(DataContext);

  return (
    <>
     <Header />
     <main
     className="w-screen flex flex-col items-center"
     >
      <h1
      className="text-3xl font-bold mt-8"
      >Sobre a LoveCats</h1>
      <p
      className="w-1/2 mt-8"
      >{data?.desc}</p>

      <ImageText catVariation={1} />
      <ImageText catVariation={2} />

      <Contador/>

      <h2
      className="text-2xl font-semibold mt-8"
      >Follow Us</h2>

      <div className="social-wrapper flex items-center justify-between w-1/3 gap-4">
        <SocialCard social="Facebook"/>
        <SocialCard social="Instagram"/>
        <SocialCard social="TikTok"/>
      </div>
     </main>
     <Footer />
    </>
  )
}

export default App
