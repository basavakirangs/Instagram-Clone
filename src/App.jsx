import { Route, Routes } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import PageLayout from "./components/PageLayout/PageLayout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}
