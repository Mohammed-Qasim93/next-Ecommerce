const Alert = ({ bgColor, msg, handelShow }) => {
  return (
    <div className={`p-3 fixed ${bgColor}`}>
      <h1>{msg.title}</h1>
      <p> {msg.msg} </p>
      <button onClick={handelShow}>X</button>
    </div>
  );
};

export default Alert;
