import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import { apiMiddleware } from "./middlewares";

const initialize = _ => {
	return configureStore({ reducer: RootReducer, middleware: [...getDefaultMiddleware(), apiMiddleware] });
};

export default initialize;
