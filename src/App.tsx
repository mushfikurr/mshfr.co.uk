import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NowPlaying } from "./components/NowPlaying";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <NowPlaying />
      </div>
    </QueryClientProvider>
  );
}

export default App;
