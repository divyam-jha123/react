import "./App.css";
import { ParentSideBar } from "./components/sidebar";
import { Content } from './components/content';

function App() {
  return (
    <div className="flex">
      <ParentSideBar />
      <Content />
    </div>
  );
}

export default App;
