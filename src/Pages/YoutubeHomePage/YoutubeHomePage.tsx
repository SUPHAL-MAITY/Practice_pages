import { useEffect, useState } from "react";
import MiniSidebar from "../../Components/Sidebar/MiniSidebar/MiniSidebar";
import Sidebar from "../../Components/Sidebar/Sidebar/Sidebar";
import Tagbar from "../../Components/Tagbar/Tagbar";
import YoutubeNavbar from "../../Components/YoutubeNavbar/YoutubeNavbar";
import Appbar from "../../Components/Sidebar/Appbar";
import MiniTagbar from "../../Components/Tagbar/MiniTagbar";




const YoutubeHomePage = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)


    useEffect(()=>{
      const handleResize=()=> setWidth(window.innerWidth)

      window.addEventListener("resize",handleResize)

      return()=> window.removeEventListener("resize",handleResize)
    },[])

    const handleSideBar=()=>{
        setIsOpen(prev=>!prev)
    }
    
  return (
    <div>
      {width>480 &&  <YoutubeNavbar onChange={handleSideBar} />}
      {width<= 480 && <Appbar/>}
      {width >=481 ? <Tagbar/> : <MiniTagbar/>}

      {width>480 && <MiniSidebar  /> }
            
      
      {isOpen && <Sidebar onChange={handleSideBar} /> }     
      
       

      
    </div>
  );
};



export default YoutubeHomePage;


