import "@/lib/fontawesome";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import SplashScreen from "./components/layout/splash"; 

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    const timer = setTimeout(() => { setLoading(false);}, 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (<SplashScreen onComplete={() => setLoading(false)} />) : (<Component {...pageProps} />);
}
