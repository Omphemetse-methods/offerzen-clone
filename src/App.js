import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Layout from "./container/Layout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import InterviewRequestsLayout from "./container/InterviewRequestsLayout";
import InterviewRequests from "./pages/InterviewRequests";
import InterviewRequestHistory from "./pages/InterviewRequestHistory";
import InterviewRequestHistoryTalentAdvisor from "./pages/InterviewRequestHistoryTalentAdvisor";

import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/candidate" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route
            path="interview_requests"
            element={<InterviewRequestsLayout />}
          >
            <Route index element={<InterviewRequests />} />
            <Route
              path=":interview_request_id"
              element={<InterviewRequestHistory />}
            />
            <Route
              path=":interview_request_id/talent_advisor"
              element={<InterviewRequestHistoryTalentAdvisor />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
