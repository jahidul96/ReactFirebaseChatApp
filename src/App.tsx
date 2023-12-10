import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import { useState } from "react";
import Layout from "./layout/Layout";
import ProfilePage from "./pages/profile/ProfilePage";
import ChatPage from "./pages/chat/ChatPage";
import EmptyChatPage from "./pages/chat/EmptyChatPage";

function App() {
    const [user] = useState(true);

    return (
        <Layout>
            <Routes>
                <Route
                    path="/"
                    element={user ? <EmptyChatPage /> : <Navigate to="/auth" />}
                />
                <Route
                    path="/auth"
                    element={!user ? <AuthPage /> : <Navigate to="/" />}
                />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/chat/:userId" element={<ChatPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
