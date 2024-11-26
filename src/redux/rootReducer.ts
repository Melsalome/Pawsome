import { combineReducers } from "redux";
import animalReducer from "./reducers/animalReducer";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import { favoritesReducer } from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  animal: animalReducer,
  auth: authReducer,
  user: userReducer,
  favorites: favoritesReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;