import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import EventsPage from "./pages/EventsPage";
import InvitationCard from "./components/InvitationCard";
import { ReduxProvider } from "./hooks/isPhone";
import Members from "./pages/Members";
import Winners from "./pages/Winners";

const getBackground = (pathname: string) => {
    return pathname === "/" ? "bg-[url(/assets/globe.png)]" : "bg-[url(/assets/bg-4.jpg)]";
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    return (
        <div className={`min-h-screen bg-black flex flex-col ${getBackground(location.pathname)} bg-cover`}>
            <Header />
            <main className="backdrop-blur">
                {children}
                <Footer />
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <ReduxProvider>
                            <Layout>
                                <HeroSection />
                                <InvitationCard />
                                <Timeline />
                            </Layout>
                        </ReduxProvider>
                    }
                />
                <Route path="/winners" element={<Layout><Winners /></Layout>} />
                <Route path="/gallery" element={<Layout><EventsPage /></Layout>} />
                <Route path="/members" element={<Layout><Members /></Layout>} />
            </Routes>
    );
};

export default App;