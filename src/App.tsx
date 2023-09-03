import { useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Photos from "./pages/home/pages/Photos";
import Videos from "./pages/home/pages/Videos";
import SearchPhotos from "./pages/search/pages/SearchPhotos";
import SearchVideos from "./pages/search/pages/SearchVideos";

function App() {
  useEffect(() => {
    document.documentElement.className = "dark";
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
        <Route path="/search" element={<Search />}>
          <Route path="photos/:query" element={<SearchPhotos />} />
          <Route path="videos/:query" element={<SearchVideos />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
