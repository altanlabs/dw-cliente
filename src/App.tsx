import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/login";
import PrivateZone from "./pages/private-zone";
import { useTheme } from "./hooks/use-theme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Theme appearance={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/private-zone" element={<PrivateZone />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </div>
  );
};

export default App;
