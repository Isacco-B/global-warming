import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Temperature from "./pages/Temperature";
import CO2 from "./pages/CO2";
import Methane from "./pages/Methane";
import NO2 from "./pages/NO2";
import PolarIce from "./pages/PolarIce";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="temperature" element={<Temperature />} />
          <Route path="co2" element={<CO2 />} />
          <Route path="methane" element={<Methane />} />
          <Route path="nitrous-oxide" element={<NO2 />} />
          <Route path="polar-ice" element={<PolarIce />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
