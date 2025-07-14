
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0  z-100 bg-white h-full w-[210px] border border-red-700 flex flex-col">
        <div className="flex justify-between items-center  h-[60px]">
              <i className="fa-solid fa-bars ml-6 fa-lg"></i>
              <div className=" w-[123px]  mr-4"> 
                <img src="src/assets/YT_LOGO.png" alt="..." className="h-full w-full  " />
              </div>  
        </div>
        <div className="flex justify-between items-center  h-[40px]">
               <i className="fa-solid fa-house ml-6 fa-lg"></i>
               <div className="w-[123px]  mr-4">
                    <h1 className="text-lg">Home</h1>
               </div>
              
        </div>

           <div className="flex justify-between items-center  h-[40px]">
               <img src="src/assets/shorts_logo.png" className="w-[24px] h-[24px] ml-6" alt="" />
               <div className="w-[123px]  mr-4">
                    <h1 className="text-lg">Shorts</h1>
               </div>
              
        </div>
           <div className="flex justify-between items-center  h-[40px]">
               <img src="src/assets/video_logo.png" className="w-[20px] h-[24px] ml-6" alt="" />
               <div className="w-[123px]  mr-4">
                    <h1 className="text-lg">Subscriptions</h1>
               </div>
              
        </div>

        <div className="">
            <br/>
        </div>
        


        
    </div>
  )
}

export default Sidebar



        // <img src="src/assets/shorts_logo.png" className="w-[24px] h-[24px] mt-8" alt="" />
        // <img src="src/assets/video_logo.png" className="w-[20px] h-[24px] mt-8" alt="" />
        // <img src="src/assets/profile_logo.png" className="w-[24px] h-[24px] mt-8" alt="" />
        
