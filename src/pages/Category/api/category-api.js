import httpService from "../../../services/http-service";

export async function categoryApi(content) {
  return await httpService.get(`/products?brand=${content.toUpperCase()}`);
}
