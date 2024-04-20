import { createContext, useEffect, useState } from "react";


interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    try {
      const response = await fetch('http://localhost:3000/transactions');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, [])
  return (
    <TransactionsContext.Provider value={{
      transactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}