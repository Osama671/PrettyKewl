import { createContext, useContext } from "react";
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

  const createSnackbar = (text: string, variant?: SnackbarVariant) => {
    enqueueSnackbar(text, { variant });
  };

  return (
    <SnackbarContext.Provider
      value={{
        createSnackbar,
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
