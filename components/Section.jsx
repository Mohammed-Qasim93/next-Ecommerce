import Carosul from "./Carosul";

const Section = ({ sectionTitle, data }) => {
  return (
    <section className="pb-10">
      <h2 className="capitalize text-5xl text-center"> {sectionTitle} </h2>
      <Carosul data={data} />
    </section>
  );
};

export default Section;
