import { useState } from "react";
import About from "./componant/about/About";
import Header from "./componant/header/Header";
import Services from "./componant/services/Services";
import Skills from "./componant/skills/Skills";
import Projects from "./componant/projects/Projects";
import Contact from "./componant/contact/Contact";
import Footer from "./componant/footer/footer";

function App() {
  const [liAclive, setLiActive] = useState("Home");
  return (
    <>
      <div className="w-[90%] mx-auto py-5">
        <Header liAclive={liAclive} setLiActive={setLiActive} />
        <About setLiActive={setLiActive} />
        <Services setLiActive={setLiActive} />
        <Skills setLiActive={setLiActive} />
        <Projects setLiActive={setLiActive} />
        <Contact setLiActive={setLiActive} />
      </div>
      <Footer liAclive={liAclive} setLiActive={setLiActive} />
    </>
  );
}

export default App;
