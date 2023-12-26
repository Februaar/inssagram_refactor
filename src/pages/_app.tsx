import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SignUpProvider } from "@/context/SignUp";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <Component {...pageProps} />
      </SignUpProvider>
    </Provider>
  );
};

export default App;
