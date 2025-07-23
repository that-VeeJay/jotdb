export async function fetchUserCategories(userId: string) {
  const response = await fetch(`/api/categories?userId=${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user categories");
  return response.json();
}
