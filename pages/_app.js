import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="border-b-[1px] border-gray-200 w-full p-2 flex justify-center">
        <div className="flex gap-0 items-center">
          <img className="h-28 w-auto " src="/logo.png" />{" "}
          <div>
            <p className="relative -left-7 font-bold uppercase text-xl md:text-3xl text-green-700">
              Divine Care Solutions
            </p>
            <p className="relative -left-5 font-light  text-sm: text-base text-yellow-500">
              In assoication with
            </p>
            <p className="relative -left-4 font-medium text-base md:text-lg -mt-1 text-yellow-500">
              Global Institution of Alrernate Science
            </p>
            <p className="relative -left-2 font-normal text-xs md:text-sm text-green-700">
              Contact : 9211115575
            </p>
          </div>
        </div>
      </nav>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
