import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostView from "./components/PostView";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import PostByMonth from "./components/PostByMonth";
import PostByCategory from "./components/PostByCategory";
import PostByAuthor from "./components/PostByAuthor";
import Posts from "./components/Posts";
import PostBySearch from "./components/PostBySearch";
import AuthorDashboard from "./components/AuthorDashboard";
import AuthorLogin from "./components/AuthorLogin";
import AuthorSignup from "./components/AuthorSignup";
import AuthorProfileEdit from "./components/AuthorProfileEdit";
import AuthorNewPost from "./components/AuthorNewPost";
import AuthorPostsView from "./components/AuthorPostsView";
import About from "./components/About";

function App() {
  const [currentLocation, setCurrentLocation] = useState();
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  if (mode === null) setMode("dark");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const CheckLocation = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentLocation(location.pathname);
    }, [location]);
  };

  return (
    <Router>
      <CheckLocation />
      <DarkMode mode={mode} setMode={setMode} />
      <ToastContainer />
      <div className="App px-10 md:px-16 xl:px-20 font-['Ubuntu',sans-serif] dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div className="flex flex-col lg:flex-row lg:gap-10 xl:justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query?" element={<PostBySearch />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:title" element={<PostView />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<AuthorDashboard />} />
            <Route path="/account/dashboard" element={<AuthorDashboard />} />
            <Route
              path="/account/dashboard/editprofile"
              element={<AuthorProfileEdit />}
            />
            <Route path="/account/dashboard/new" element={<AuthorNewPost />} />
            <Route
              path="/account/dashboard/posts"
              element={<AuthorPostsView />}
            />
            <Route path="/account/login" element={<AuthorLogin />} />
            <Route path="/account/signup" element={<AuthorSignup />} />
            <Route path="/archive/:month" element={<PostByMonth />} />
            <Route path="/category/:category" element={<PostByCategory />} />
            <Route path="/author/:id" element={<PostByAuthor />} />
          </Routes>
          {currentLocation !== "/" && <Sidebar />}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
