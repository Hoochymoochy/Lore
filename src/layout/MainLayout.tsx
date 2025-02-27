import React from "react";
import background from "../images/background.png";
import Logo from "../images/Logo.png";
const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="w-screen bg-black h-10 py-5 px-7 opacity-90">
        <img src={Logo}></img>
      </header>
      <div
        className="flex h-screen bg-cover bg-center justify-center items-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
