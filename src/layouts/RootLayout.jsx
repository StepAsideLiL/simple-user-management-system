import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="container mx-auto max-w-4xl flex-grow min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
