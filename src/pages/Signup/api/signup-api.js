import httpService from "../../../services/http-service";

export async function signupApi(data) {
  return await httpService.post("/signup", data);
}
