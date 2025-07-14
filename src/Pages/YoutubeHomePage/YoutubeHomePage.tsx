import { useState } from "react";
import MiniSidebar from "../../Components/Sidebar/MiniSidebar/MiniSidebar";
import Sidebar from "../../Components/Sidebar/Sidebar/Sidebar";
import Tagbar from "../../Components/Tagbar/Tagbar";
import YoutubeNavbar from "../../Components/YoutubeNavbar/YoutubeNavbar";




const YoutubeHomePage = () => {
    const [isOpen,setIsOpen]=useState(false)

    const handleSideBar=()=>{
        setIsOpen(prev=>!prev)
    }
    
  return (
    <div>
      <YoutubeNavbar onChange={handleSideBar} />
      <MiniSidebar  />       
      <Tagbar />  
      {isOpen && <Sidebar onChange={handleSideBar} /> }           
      
    </div>
  );
};



export default YoutubeHomePage;


