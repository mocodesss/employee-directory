import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomID = Math.floor(Math.random() * 10 + 1);

  const randomEmployee = employees.find((employee) => employee.id === randomID);

  res.send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const indvEmployee = employees.find((employee) => employee.id === Number(id));

  if (!indvEmployee) {
    return res.status(404).send(`no employee with the id of ${id}`);
  }

  res.send(indvEmployee);
});

export default app;
