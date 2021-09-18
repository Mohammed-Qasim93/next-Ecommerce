import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Alert from "./Alert";
import Loading from "./Loading";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  return (
    <div className="absolute top-40 right-4">
      {notify.loading && <Loading />}
      {notify.error && (
        <Alert
          msg={{ msg: notify.error, title: "Error" }}
          handelShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-red-400"
        />
      )}
      {notify.success && (
        <Alert
          msg={{ msg: notify.success, title: "Success" }}
          handelShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-green-500"
        />
      )}
    </div>
  );
};

export default Notify;
