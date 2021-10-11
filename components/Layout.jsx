import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInAnimation } from "../utils/animations";
import { DataContext } from "../store/GlobalState";
import Nav from "./Nav";
import Notify from "./Notify";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { currentUser } = state;

  const { asPath } = useRouter();
  // console.log(data);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="text-gray-500">
        <Head>
          <title>
            E-STORE |&nbsp;
            {asPath.split("/")[1] !== ""
              ? asPath.split("/")[1].toUpperCase()
              : "HOME"}
          </title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Nav currentUser={currentUser} />
        <Notify />
        <main style={{ minHeight: "100vh" }} className="md:p-32 pt-40  ">
          {children}
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
