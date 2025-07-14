type OnChange={
    onChange:()=>void;
}





const YoutubeNavbar = ({onChange}:OnChange) => {

    const handleClick=()=>{
        onChange()
     }


  return (
    <>
      <div className="fixed top-0 left-0 z-10 bg-white w-full h-[56px] flex  justify-between px-[24px] ">
        {/* left side of navbar */}

        <div className=" w-[160px] flex items-center justify-between">
          <i className="fa-solid fa-bars " onClick={handleClick}></i>
          <div className=" w-[123px]   ">
            <img
              src="src/assets/YT_LOGO.png"
              alt="..."
              className="h-full w-full  "
            />
          </div>
        </div>

        {/* middle of navbar */}
        <div className=" flex  items-center w-1/2 h-full ">
          <div className="w-7/8 h-full flex items-center">
            <div className="border border-gray-900 rounded-tl-xl rounded-bl-xl  w-7/8  h-4/5  ">
              <input
                type="text"
                className="w-full h-full"
                placeholder="Search"
              />
            </div>
            <div className="border border-gray-900 w-[40px] h-4/5 flex justify-center items-center">
              <i className="fa-solid fa-magnifying-glass fa-1x"></i>
            </div>
          </div>

          <div className="w-1/8 h-full flex items-center justify-end mr-[10px] ">
            <div className="bg-gray-100 w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <i className="fa-solid fa-microphone fa-xl"></i>
            </div>
          </div>
        </div>

        <div className=" w-[192px]  flex  justify-between items-center">
          <div className="bg-gray-200  rounded-xl flex justify-center items-center  w-[96px] h-3/4  mx-1 p-2 ">
            <i className="fa-solid fa-plus ml-2"></i>
            <p className="p-2 text-sm">Create</p>
          </div>
          <div className="">
            <i className="fa-solid fa-bell fa-2x"></i>
          </div>
          <div className="">
            <img
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/385800/385819.2.png"
              className="w-[32px] h-[32px] rounded-full "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeNavbar;



