import "../styles/globals.css";
import Navbarflow from "../components/NavbarFlow";
import { Alert } from "flowbite-react";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbarflow/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
