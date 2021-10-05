import Button from "./Button";

const SideNav = () => {
  return (
    <div className="md:py-10 py-4 sm:px-5  bg-primaryButtonBg text-bodyColor md:w-52 ">
      <div className="flex  md:flex-col md:items-start md:h-full md:justify-between md:space-y-6 text-center  items-center justify-between">
        <div className=" flex md:flex-col flex-grow sm:flex-grow-0 md:items-start   md:space-x-0   text-center sm:space-x-6 items-center justify-around md:h-48">
          <Button
            type="button"
            text="personal info"
            to="/profile"
            classes="flex-grow md:flex-grow-0"
          />
          <Button
            type="button"
            text="change password"
            to="/changePassword"
            classes=" flex-grow md:flex-grow-0"
          />
          <Button
            type="button"
            text="contact info"
            to="/contactInformations"
            classes="   flex-grow  md:flex-grow-0"
          />
        </div>

        <Button
          type="button"
          text="delete account"
          to="/deleteAccount"
          classes=" flex-grow sm:px-4  py-2 sm:flex-grow-0  text-red-100 font-bold "
        />
      </div>
    </div>
  );
};

export default SideNav;
