import Navbar from "./components/Navbar"
import SideContent from "./Pages/SideContent/SideContent";
export default function Home() {
    
  return (
    <main className="flex flex-row">
      <Navbar />
      <div className="ml-[60px] w-full">
        <SideContent />
      </div>
    </main>
  );
};