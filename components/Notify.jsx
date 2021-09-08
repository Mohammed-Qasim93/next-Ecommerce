import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Alert from "./Alert";
import Loading from "./Loading";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Alert
          msg={{ msg: notify.error, title: "Error" }}
          handelShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-red-500"
        />
      )}
      {notify.success && (
        <Alert
          msg={{ msg: notify.success, title: "Success" }}
          handelShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-green-500"
        />
      )}
    </>
  );
};

export default Notify;
