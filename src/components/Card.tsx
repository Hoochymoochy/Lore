import { useNavigate } from "react-router-dom";

interface CardProps {
  url: string;
}

export default function Card({ url }: CardProps) {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate("/StarterOption");
  };
  return (
    <img
      src={url}
      className="scale-[1.5] hover:scale-[2.0] transition duration-300 ease-in-out "
      onClick={handlePress}
    ></img>
  );
}
