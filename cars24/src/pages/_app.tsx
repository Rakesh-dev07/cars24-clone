import { CityProvider } from "@/context/CityContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CityProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Toaster richColors />
      </CityProvider>
    </AuthProvider>
  );
}
