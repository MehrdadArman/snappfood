import { Suspense, lazy } from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

// toastify css
import "react-toastify/dist/ReactToastify.css";

import PageGlobalLoader from "./components/loader/pageGlobalLoader";
import "./assets/scss/app.scss";

const Router = lazy(() => import("./router/Router"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<PageGlobalLoader />}>
          {/* toastify  container to show thath :) */}
          <ToastContainer />
          <Router />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
