import httpService from "../../../services/http-service";

export async function loginApi(data) {
  return await httpService.post("/login", data);
}
