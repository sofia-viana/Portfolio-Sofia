export default async function getService() {
  const res = await fetch("https://api.quotable.io/random", {
    cache: "no-store",
  });

  return res.json();
}