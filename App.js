import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense></NewExpense>
      <div>
        <Expenses></Expenses>
      </div>
    </div>
  )

}
export default App;
