import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound.tsx"
import Navbar from "./components/global/Navbar.tsx";

function App() {
  return (
    <BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/cv" element={<CV />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
