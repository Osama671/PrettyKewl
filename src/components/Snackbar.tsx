import { createContext, useContext, useState, useEffect } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

type SnackbarVariant =
  | "default"
  | "error"
  | "success"
  | "warning"
  | "info"
  | undefined;

interface ISnackbarContext {
  createSnackbar: (text: string, variant?: SnackbarVariant) => void;
}

const SnackbarContext = createContext<ISnackbarContext>({
  createSnackbar: () => {},
});

export const useSnackbarContext = () => useContext(SnackbarContext);

function SnackbarLoader({ children }: { children: React.ReactNode }) {
  const { enqueueSnackbar } = useSnackbar();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <SnackbarContext.Provider
      value={{
        createSnackbar: (text, variant) => {
          if (isReady) {
            enqueueSnackbar(text, { variant });
          } else {
            console.warn("Snackbar is not ready yet.");
          }
        },
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}

export default function SnackbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarLoader>{children}</SnackbarLoader>
    </SnackbarProvider>
  );
}
