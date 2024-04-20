import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

