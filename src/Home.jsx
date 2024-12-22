import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebarToggle">
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};
export default Home;
