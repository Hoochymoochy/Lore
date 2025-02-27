interface CardProps {
  url: string;
  disable?: boolean;
}

export default function Card({ url, disable }: CardProps) {
  const handlePress = () => {
    if (!disable) {
      console.log("Card clicked!"); // Handle press action here
    }
  };

  return (
    <img
      src={url}
      className={`scale-[1.5] transition duration-300 ease-in-out ${
        !disable ? "hover:scale-[2.0]" : ""
      }`}
      onClick={handlePress}
      style={{ cursor: disable ? "default" : "pointer" }} // Optional: Change cursor based on state
    />
  );
}
