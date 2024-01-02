import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SignUpProvider } from "@/context/SignUp";
import { SearchProvider } from "@/context/Search";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </SignUpProvider>
    </Provider>
  );
};

export default App;
