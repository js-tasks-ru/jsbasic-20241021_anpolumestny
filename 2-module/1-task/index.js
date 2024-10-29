function sumSalary(salaries) {
  let salary = 0;

  for ( let prop in salaries) {
    if (Number.isFinite(salaries[prop])) {
      salary += salaries[prop];
    }
  }
  return salary;
}
