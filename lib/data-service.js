export const URL = process.env.HOST;

async function fetchData(postFix) {
  const res = await fetch(`${URL}/${postFix}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export async function getSocials() {
  return await fetchData("social");
}

export async function getCategories() {
  return await fetchData("category");
}

export async function getNews(type) {
  const data = await fetchData("news/type?type=" + type);

  return data;
}

export async function getLatestNews() {
  const data = await fetchData("news/latest");
  return data;
}

export async function getNewsByCategory(id) {
  const data = await fetchData("news/category?catId=" + id);
  return data;
}

export async function searchNews(keyword) {
  const data = await fetchData(`news/search?keyword=${keyword}`);
  return data;
}

export async function getNewsDetails(id) {
  const data = await fetchData("news/details?id=" + id);
  return data;
}

export async function getPolicies(keyword) {
  const data = await fetchData(`policy?type=${keyword}`);
  return data.data.at(0);
}

export async function getComments(id) {
  const data = await fetchData(`comments/news?newsId=${id}`);
  return data;
}

export async function getUserComments(cookie) {
  const options = {
    method: "GET",
    headers: { cookie: cookie },
    cache: "no-store",
  };

  const res = await fetch(`${URL}/comments/manage`, options);
  const data = await res.json();
  return data;
}

export async function getUserProfile(cookie) {
  const options = {
    method: "GET",
    headers: { cookie: cookie },
    cache: "no-store",
  };

  const res = await fetch(`${URL}/user/profile`, options);
  const data = await res.json();
  return data;
}
