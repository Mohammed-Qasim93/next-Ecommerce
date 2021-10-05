import SideNav from "../components/SideNav";

const contactInformations = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{ height: "84vh" }}>
      <SideNav />
      <div className="content bg-red-100 flex-grow">contactInformations</div>
    </div>
  );
};

export default contactInformations;
