export async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('Something wentwrong');

  return res.json();
}

export async function fetchUser(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );

  if (!res.ok) throw new Error('Something wentwrong');

  return res.json();
}
