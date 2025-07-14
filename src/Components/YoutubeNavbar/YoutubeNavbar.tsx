

const YoutubeNavbar = () => {
  return (
    <>
       <div className="fixed top-0 left-0  bg-white w-full h-[56px] flex  justify-between px-[24px] ">
           
           {/* left side of navbar */}
           
           <div className="border border-red-500 w-1/8 flex items-center justify-between">
              <i className="fa-solid fa-bars "></i>
              <div className=" w-[123px]   "> 
                <img src="src/assets/YT_LOGO.png" alt="..." className="h-full w-full  " />
              </div>                         
           </div>

          {/* middle of navbar */}
           <div className="border border-red-500 flex  items-center w-1/2 h-full ">

             <div className="w-7/8 h-full flex items-center">
                  <div className="border border-gray-900 rounded-tl-xl rounded-bl-xl  w-7/8  h-4/5  ">
                
                     <input type="text" className="w-full h-full" placeholder="Search" />
                  </div>
                  <div className="border border-gray-900 w-1/8 h-4/5 flex justify-center items-center">
                        <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                  </div>


             </div>

             <div className="w-1/8 h-full flex items-center justify-end mr-[10px] ">
               <div className="bg-gray-100 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                 <i className="fa-solid fa-microphone fa-xl"></i>
               </div>
             </div>
              
           </div>



           <div className="border border-red-500">right</div>

       </div>
      
    </>
  )
}

export default YoutubeNavbar
