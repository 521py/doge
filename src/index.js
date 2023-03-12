import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { store } from './reduxtoolkit/store.js';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </QueryClientProvider>
  </React.StrictMode>
);
