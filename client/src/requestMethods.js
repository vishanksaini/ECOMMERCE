import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.accessToken;
// if (
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser === null
// ) {
//   TOKEN = {};
// } else {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//     .currentUser.accessToken;
// }

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQzMGRiYWM2MjVmMGMwYzJlODBhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDczODEzNSwiZXhwIjoxNjYyNDY2MTM1fQ.RyzEQk8esB1myjlxB0RGQBt6rnWiMLbiUp6pcfJrajc";
// JSON.parse(
// JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser?.JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser.accessToken;
// JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser.accessTokenJSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).user
// ).currentUser;
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQzMGRiYWM2MjVmMGMwYzJlODBhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDczODEzNSwiZXhwIjoxNjYyNDY2MTM1fQ.RyzEQk8esB1myjlxB0RGQBt6rnWiMLbiUp6pcfJrajc";
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQzMGRiYWM2MjVmMGMwYzJlODBhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTI3MzY5NywiZXhwIjoxNjYxMDAxNjk3fQ.VZXhmi5ccrvmTGKunl7NCrjyZVXPKN9OmSHHE3Ykzrk";

//   axios.interceptors.request.use(
//     (config) => {
//       config.headers.token = `Bearer ${acessToken}`;
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
