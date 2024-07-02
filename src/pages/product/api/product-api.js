import httpService from "../../../services/http-service";

export async function productApi(id) {
  return await httpService.get(`/products/${id}`);
}
