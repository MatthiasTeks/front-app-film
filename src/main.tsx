import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App'
import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import Gallery from "./pages/Gallery/Gallery";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";

import AuthContextProvider from "./contexts/AuthContext";

import { RequireAuth } from "./components/Utils/RequireAuth/RequireAuth";
import { ScrollTop } from "./components/Utils/ScrollTop/ScrollTop";
import AlertProvider from "./contexts/AlertContext";
import AlertDisplay from "./components/Utils/AlertDisplay/AlertDisplay";
import Dashboard from "./pages/Admin/components/Dashboard/Dashboard";
import {NewProject} from "./pages/Admin/components/Project/components/NewProject/NewProject";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <ScrollTop />
          <AlertProvider>
              <AuthContextProvider>
                      <AlertDisplay />
                      <Routes>
                          <Route path="/" element={<App />}>
                              <Route index element={<Home />} />
                              <Route path="crew" element={<Crew />} />
                              <Route path="demo" element={<Gallery />} />
                          </Route>
                          <Route path="/login" element={<Login />} />
                          <Route path="/panel" element={<RequireAuth><Admin /></RequireAuth>}>
                              <Route path="/panel/dashboard" element={<Dashboard />} />
                              <Route path="/panel/project" element={<NewProject />} />
                          </Route>
                          <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
              </AuthContextProvider>
          </AlertProvider>
      </BrowserRouter>
    </QueryClientProvider>,
)
