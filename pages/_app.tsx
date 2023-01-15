import "../styles/globals.css";
import Navbarflow from "../components/NavbarFlow";

function MyApp({ Component, pageProps }) {
  return (
    <div className={'flex flex-col'}>
        <Navbarflow></Navbarflow>
        <div className={`w-full h-20`}></div>
        <Component {...pageProps}/>
    </div>
  );
}

export default MyApp;
