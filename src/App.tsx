import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import { useContext } from "react";
import Layout from "./layout/Layout";
import ProfilePage from "./pages/profile/ProfilePage";
import ChatPage from "./pages/chat/ChatPage";
import EmptyChatPage from "./pages/chat/EmptyChatPage";
import { AppContext } from "./context/AppContextProvider";
import AppLoadingPage from "./pages/AppLoadingPage";
function App() {
    const context = useContext(AppContext);
    const { isLogged, appLoading } = context || {};

    return (
        <>
            {appLoading ? (
                <AppLoadingPage />
            ) : (
                <Layout>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                isLogged ? (
                                    <EmptyChatPage />
                                ) : (
                                    <Navigate to="/auth" />
                                )
                            }
                        />
                        <Route
                            path="/auth"
                            element={
                                !isLogged ? <AuthPage /> : <Navigate to="/" />
                            }
                        />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/chat/:userId" element={<ChatPage />} />
                    </Routes>
                </Layout>
            )}
        </>
    );
}

export default App;
