import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagenation from "./components/Pagenation";
import "./App.css"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";


export default function App() {
  const {fetchData} = useContext(AppContext);



  return (
    <div className="w-full h-full flex flex-col gap-2 items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagenation></Pagenation>
    </div>
  );
}
