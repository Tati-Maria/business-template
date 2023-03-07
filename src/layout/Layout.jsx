import { Outlet } from "react-router-dom";
import PageLayout from "./PageLayout";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <PageLayout>
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />
    </PageLayout>
  )
}

export default Layout