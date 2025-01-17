import { combineReducers } from "redux";
import animalReducer from "./reducers/animalReducer";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import volunteeringReducer from "./reducers/volunteeringReducer";
import notificationReducer from "./notificationSlice";
import refugeeReducer from "./reducers/refugeeReducer";
import adoptionRequestReducer from "./reducers/adoptRequestReducer";
import donationReducer from "./reducers/donationReducer";
import volunteeringCreationReducer from "./reducers/volunteeringCreationReducer";


const rootReducer = combineReducers({
  animal: animalReducer,
  auth: authReducer,
  user: userReducer,
  favorites: favoritesReducer,
  volunteering: volunteeringReducer,
  volunteeringCreation: volunteeringCreationReducer,
  notifications: notificationReducer,
  refugee: refugeeReducer,
  adopt: adoptionRequestReducer,
  donation: donationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
