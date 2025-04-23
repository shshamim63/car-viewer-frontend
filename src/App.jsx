import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Toaster } from "react-hot-toast";

import Router from "./Router";

import { useDarkMode } from "./hooks/useDarkMode";

import { darkTheme, lightTheme } from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: isDarkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[300],
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
