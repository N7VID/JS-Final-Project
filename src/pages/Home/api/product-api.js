import httpService from "../../../services/http-service";

export async function homePageApi() {
  return await httpService.get("/products");
}
