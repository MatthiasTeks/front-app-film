import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App'
import { HomePage } from "./pages/Home/HomePage";
import { GalleryPage } from "./pages/Gallery/GalleryPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { AdminPage } from "./pages/Admin/AdminPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import { RequireAuth } from "./components/Utils/RequireAuth/RequireAuth";
import { ScrollTop } from "./components/Utils/ScrollTop/ScrollTop";
import { AlertContextProvider } from "./contexts/AlertContext";
import { AlertDisplay } from "./components/Utils/AlertDisplay/AlertDisplay";
import { Dashboard } from "./pages/Admin/components/Dashboard/Dashboard";
import { Project } from "./pages/Admin/components/Project/Project";
import { Feed } from "./pages/Admin/components/Feed/Feed";
import { PlayerPage } from "./pages/Player/PlayerPage";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <ScrollTop />
          <AlertContextProvider>
              <AuthContextProvider>
                    <AlertDisplay />
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<HomePage />} />
                            <Route path="demo" element={<GalleryPage />} />
                            <Route path="demo/:label" element={<PlayerPage />} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/panel" element={<RequireAuth><AdminPage /></RequireAuth>}>
                            <Route path="/panel/dashboard" element={<Dashboard />} />
                            <Route path="/panel/project" element={<Project />} />
                            <Route path="/panel/feed" element={<Feed />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
              </AuthContextProvider>
          </AlertContextProvider>
      </BrowserRouter>
    </QueryClientProvider>,
)
