import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return <section id="home"></section>;
}
