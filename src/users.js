import "./types.js";

/**
 * Gets users from JSON Placeholder
 * @returns {Promise<User[]>}
 */
export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

/**
 * Acts like a simple search
 * @param {User[]} users
 * @param {string} name
 * @returns {User[]}
 */
export function filterUsers(users, name) {
  return users.filter((u) => u.name.toLowerCase().trim().match(name.toLowerCase().trim()));
}
