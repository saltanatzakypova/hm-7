import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
// import Filter from "../../filter/Filter";

function Expenses(props) {
  // function changeHandler(event) {
  //   console.log(event);

  //   // console.log((props.expenses[0].title = "Just Paper"));
  // }

  return (
    <Card className="expenses">
      {/* <Filter></Filter> */}
      {props.expenses.map((expenses, id) => {
        return (
          <ExpenseItem
            expenseTitle={expenses.title}
            expensePrice={expenses.amount}
            expenseDate={expenses.date}
            key={id}
            // changeHandler={changeHandler}
          />
        );
      })}

      {/* <ExpenseItem
        expenseTitle={props.expenses[0].title}
        expensePrice={props.expenses[0].amount}
        expenseDate={props.expenses[0].date}
        changeHandler={changeHandler}
      />
      <ExpenseItem
        expenseTitle={props.expenses[1].title}
        expensePrice={props.expenses[1].amount}
        expenseDate={props.expenses[1].date}
        // changeHandler={changeHandler}
      />
      <ExpenseItem
        expenseTitle={props.expenses[2].title}
        expensePrice={props.expenses[2].amount}
        expenseDate={props.expenses[2].date}
        // changeHandler={changeHandler}
      /> */}
    </Card>
  );
}

export default Expenses;
