import { filterUsers, getUsers } from "./users.js";

async function main() {
  const users = await getUsers();
  console.log(users);
  console.log(filterUsers(users, "le"));
}

main()
  .catch(console.error);
