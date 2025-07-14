import MiniSidebar from "../../Components/Sidebar/MiniSidebar/MiniSidebar";
import Sidebar from "../../Components/Sidebar/Sidebar/Sidebar";
import Tagbar from "../../Components/Tagbar/Tagbar";
import YoutubeNavbar from "../../Components/YoutubeNavbar/YoutubeNavbar";



const YoutubeHomePage = () => {
  return (
    <div>
      <YoutubeNavbar />
      <MiniSidebar />
      <Tagbar />
      <Sidebar />
    </div>
  );
};



export default YoutubeHomePage;


