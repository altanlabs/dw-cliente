import "@radix-ui/themes/styles.css";
import { LoginForm } from "../components/blocks/login-form";
import { useTheme } from "../hooks/use-theme";

function Index() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={`h-screen w-full ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-4xl font-light">Welcome to your app</h1>
        <p className="text-neutral-400">Start chatting to edit</p>
        <LoginForm className="bg-blue-100 p-6 rounded-lg shadow-lg" />
      </div>
    </main>
  );
}

export default Index;
