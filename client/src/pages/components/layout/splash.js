import { useEffect } from "react";
import "@/styles/splash.css"; 
import "@/styles/globals.css";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {onComplete();}, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="splash-screen"
      style={{
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontSize: "2rem",
        fontWeight: "bold",
        }}
    >
      <div className="spinner"></div>
      <div className="text-center mt-5"><p className="lead text-center">Loading...</p></div>
    </div>
  );
}
