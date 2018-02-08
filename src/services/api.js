// import { stringify } from "qs";
import request from "../utils/request";

export async function getDraft({ query }) {
  return request(`http://localhost:3000/api/draft/get`, {
    query
  });
}

export async function postDraft({ query }) {
  return request(`http://localhost:3000/api/draft/post`, {
    query
  });
}

export async function removeRule({ query }) {
  return request(`http://localhost:3000/api/draft/post`, {
    query
  });
}

export async function getUserInfo() {
  return request(`http://localhost:3000/api/user/get`);
}

export async function addRule(params) {
  return request("/api/rule", {
    method: "POST",
    body: {
      ...params,
      method: "post"
    }
  });
}

export async function fakeSubmitForm(params) {
  return request("/api/forms", {
    method: "POST",
    body: params
  });
}

export async function fakeChartData() {
  return request("/api/fake_chart_data");
}
