import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import PageLayout from "./components/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/Firebase";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import ReelsPage from "./Pages/ReelsPage/ReelsPage";

export default function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to={"/"} />}
        />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="reels" element={<ReelsPage />} />
      </Routes>
    </PageLayout>
  );
}
