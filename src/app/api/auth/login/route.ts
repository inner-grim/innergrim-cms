/**
 * login
 * @returns {
 *  accessToken,
 *  refreshToken
 * }
 */
export async function POST() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/admin/login`,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
