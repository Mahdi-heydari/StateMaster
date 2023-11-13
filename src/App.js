import HomePage from "./pages/HomePage/HomePage";
import { WithAppContext } from "./store/index";

export default function App() {
  return (
    <WithAppContext>
      <div >
        <HomePage />
      </div>
    </WithAppContext>
  );
}
