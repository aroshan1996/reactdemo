import { axiosinstance } from "../instance";

export const login = (data) => {
 return axiosinstance.post("auth/login",data);
};
