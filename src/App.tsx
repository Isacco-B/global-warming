import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
  Outlet,
} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  fetchCO2Data,
  fetchMethaneData,
  fetchNitrousOxideData,
  fetchPolarIceData,
  fetchTemperatureData,
} from "@/services/data";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SuspenseFallback } from "@/components/SuspenseFallback";
import Layout from "@/pages/Layout";
import TemperaturePage from "@/pages/TemperaturePage";
import CarbonDioxidePage from "@/pages/CarbonDioxidePage";
import HomePage from "@/pages/HomePage";
import MethanePage from "@/pages/MethanePage";
import NitrousOxidePage from "@/pages/NitrousOxidePage";
import PolarIcePage from "@/pages/PolarIcePage";
import NoMatchPage from "@/pages/NoMatchPage";

function LoadingWrapper() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <SuspenseFallback />;
  }

  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <LoadingWrapper />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "temperature",
            element: <TemperaturePage />,
            loader: async () => {
              const data = await fetchTemperatureData();
              return { data };
            },
            errorElement: (
              <ErrorBoundary msg="Error fetching temperature data!" />
            ),
          },
          {
            path: "co2",
            element: <CarbonDioxidePage />,
            loader: async () => {
              const data = await fetchCO2Data();
              return { data };
            },
            errorElement: <ErrorBoundary msg="Error fetching co2 data!" />,
          },
          {
            path: "methane",
            element: <MethanePage />,
            loader: async () => {
              const data = await fetchMethaneData();
              return { data };
            },
            errorElement: <ErrorBoundary msg="Error fetching methane data!" />,
          },
          {
            path: "nitrous-oxide",
            element: <NitrousOxidePage />,
            loader: async () => {
              const data = await fetchNitrousOxideData();
              return { data };
            },
            errorElement: (
              <ErrorBoundary msg="Error fetching nitrous oxide data!" />
            ),
          },
          {
            path: "polar-ice",
            element: <PolarIcePage />,
            loader: async () => {
              const data = await fetchPolarIceData();
              return { data };
            },
            errorElement: (
              <ErrorBoundary msg="Error fetching polar ice data!" />
            ),
          },
          { path: "*", element: <NoMatchPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
