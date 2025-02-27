import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import background from "./images/background.png";

function App() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
    </MainLayout>
  );
}

export default App;
