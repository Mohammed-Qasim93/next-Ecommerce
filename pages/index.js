import ShowCase from "../components/ShowCase";

export default function Home() {
  return (
    <div className="max-h-screen">
      <ShowCase />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:3000/api/users`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//   };
// }
