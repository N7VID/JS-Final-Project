import httpService from "../../../services/http-service";

export async function homePageApi() {
  return await httpService.get("/products");
}

export async function homePageCategoryApi(content) {
  if (content !== "ALL") {
    return await httpService.get(`/products?q=${content}`);
  } else {
    return await httpService.get(`/products`);
  }
}
