import { useEffect, useRef } from "react";
import Robot from "./robot.json"
import lottie from "lottie-web";

const RobotIcon = () => {
  const anime = useRef(null);
  useEffect(() => {
    console.log("Loading...");
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Robot,
    });
    return () => {
      lottie.stop();
    }
  }, []);
  return (
    <div ref={anime}></div>
  );
}

export default RobotIcon;
