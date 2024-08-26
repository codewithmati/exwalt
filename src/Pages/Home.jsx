import { useState, useEffect } from "react";
import "../App.css";
import SectionDMF from "../Components/SectionDMF";
import Loading from "./Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SectionDMF />
        </>
      )}
    </>
  );
}

export default Home;
