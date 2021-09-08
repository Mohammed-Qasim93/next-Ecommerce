import Head from "next/head";
import Nav from "./Nav";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Notify from "./Notify";

const Layout = ({ children }) => {
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
        <Nav />
        <Notify />
        <main>{children}</main>
      </div>
    </AnimatePresence>
  );
};

export default Layout;
