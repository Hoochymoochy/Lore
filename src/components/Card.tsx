import React from "react";

interface CardProps {
  url: string;
}

export default function Card({ url }: CardProps) {
  return (
    <img
      src={url}
      className="hover:scale-125 transition duration-300 ease-in-out"
    ></img>
  );
}
