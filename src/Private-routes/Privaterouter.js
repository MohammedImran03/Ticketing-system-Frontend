import React from "react";
import { Navigate} from "react-router-dom";

const isAuth = true;
export default function ProtectedRoute({ children }) {
    if (!isAuth) {
      return <Navigate to="/" replace />;
    }
    return children;
  }