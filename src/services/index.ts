import { api } from "@/plugins/axios";
import Cookies from "js-cookie";

// START getUserData

export async function getUserData() {
  await api
    .get("/user")
    .then((res) => {
      Cookies.set("name", res.data.name);
      Cookies.set("email", res.data.email);
    })
    .catch((error) => console.error(error));
}

// END getUserData
