import SideNav from "../components/SideNav";

const changePassword = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{ height: "84vh" }}>
      <SideNav />
      <div className="content bg-red-100 flex-grow">changePassword</div>
    </div>
  );
};

export default changePassword;
