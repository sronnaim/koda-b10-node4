import "./types.js"

/**
 * @returns {Promise<User[]>}
 */
export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return data
}

/**
 * @param {User[]} users 
 * @param {string} name
 * @returns {User[]}
 */
export function filterUsers(users, name) {
  return users.filter(u => u.name.toLowerCase() === name.toLowerCase())
}