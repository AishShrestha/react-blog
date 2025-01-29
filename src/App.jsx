import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./component";
import { login, logout } from "./feature/authSlice";
import authService from "./appwrite/auth";
import backgroundImage from "./assets/goodImage.png";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return loading ? null : (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
