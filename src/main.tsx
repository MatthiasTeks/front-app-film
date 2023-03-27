import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App'
import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import AuthContextProvider from "./contexts/AuthContext";
import { ScrollTop } from "./components/Utils/Utils";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <ScrollTop />
              <AuthContextProvider>
                  <Routes>
                      <Route path="/" element={<App />}>
                          <Route index element={<Home />} />
                          <Route path="crew" element={<Crew />} />
                      </Route>
                      <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
              </AuthContextProvider>
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>,
)
