import { Provider } from "react-redux"
import Counter from "./counter"
import store from "../redux/store"

export function CompWithStore() {
  return <>
    <Provider store={store}>
      <Counter />
    </Provider>
  </>
}