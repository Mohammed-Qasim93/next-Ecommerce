const InputField = ({ type, fieldName, placeholder, handelChange }) => {
  return (
    <input
      type={type}
      className="p-2 border focus:outline-none  border-gray-800 rounded text-gray-500 bg-bodyColor text-lg font-semibold md:w-80  w-80 sm:mx-4 sm:w-60 mr-2"
      onChange={handelChange}
      name={fieldName}
      placeholder={placeholder}
    />
  );
};

export default InputField;
