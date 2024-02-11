import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import expensesReducer from "./expenseSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, expensesReducer);

export const store = configureStore({
  reducer: {
    expenses: persistedReducer,
  },
});

export const persistor = persistStore(store);
