import { createStore } from "redux";
import album from "./modules/album/reducer";
import rootreducer from "./modules/rootreducer";

const store = createStore(rootreducer);

export default store;
