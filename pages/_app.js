import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

// MyApp.getInitialProps = async ({ Component, context }) => {
//   const res = await fetch(`http://localhost:3000/api/users`);
//   const data = await res.json();
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(context);
//   }
//   return { pageProps, data };
// };
export default MyApp;
