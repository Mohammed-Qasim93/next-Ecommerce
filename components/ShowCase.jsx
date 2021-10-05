import Image from "next/image";
import Link from "next/link";

const ShowCase = () => {
  return (
    <div className="flex justify-evenly text-gray-500 pt-12 pb-64  items-center space-y-2 h-full px-4">
      <div className=" flex h-80 sm:h-52 md:h-60 sm:pt-0 pt-32 flex-col justify-between z-30">
        <div className=" flex flex-col w-100 justify-evenly h-40">
          <h2 className="md:text-6xl   text-5xl uppercase">e-store</h2>
          <h3 className=" text-2xl w-80 uppercase sm:ml-0 md:ml-5 ml-5">
            see our new collections
          </h3>
        </div>
        <div className="buttons uppercase ">
          <span className="p-2 md:text-2xl text-lg rounded-sm hover:bg-primaryButtonBgHover bg-primaryButtonBg text-bodyColor">
            <Link href="/collections">start shoping</Link>
          </span>
        </div>
      </div>

      <div className="sm:static sm:opacity-100  rounded overflow-hidden absolute top-52 opacity-20 left-0 right-0 bottom-0 ">
        <Image src="/img/download.png" width="700" height="550" />
      </div>
    </div>
  );
};

export default ShowCase;
