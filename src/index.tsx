import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
