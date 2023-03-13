import "../styles/globals.css";
import Navbarflow from "../components/NavbarFlow";
import {ThemeProvider} from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
    <div className={'flex flex-col'}>
        <Navbarflow></Navbarflow>
        <div className={`w-full h-20`}></div>
        <Component {...pageProps}/>
    </div>
      </ThemeProvider>
  );
}

export default MyApp;
