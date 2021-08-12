import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 lg:px-48 my-14 px-5">
      <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-4 text-center">
        <Sidebar/>
      </div>

      <div className="col-span-12 lg:col-span-9 bg-white rounded-2xl">
        <Component {...pageProps} />{" "}
      </div>
    </div>
  );
}

export default MyApp;
