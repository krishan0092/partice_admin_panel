
import users from "../data/dummyUsers";

export const loginAdmin = (email, password) => {
  if (email === "admin@gmail.com" && password === "123456") {
    return {
      token: "fake-jwt-token",
      admin: { name: "Admin" },
    };
  }
  throw new Error("Invalid Credentials");
};


export const getUsers = () => {
  return users;
};
