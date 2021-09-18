import { useContext } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FadeInAnimation } from "../utils/animations";
import Notify from "./Notify";
import { DataContext } from "../store/GlobalState";

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
        <main className="md:pt-32 pt-36 ">{children}</main>
      </div>
    </AnimatePresence>
  );
};

export default Layout;
