function showSalary(users, age) {
  let usersAgeFiltered = users.filter( (user) => user.age <= age)
  return usersAgeFiltered.map((user) => `${user.name}, ${user.balance}`).join('\n');
}
