import { createStore } from "redux";
import RootReducer  from "../store/reducer/RootReducer"

const Store = createStore(RootReducer)

export default Store