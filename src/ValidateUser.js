import { atom } from "recoil";

const ValidateUser = atom({
  key: "validate-user",
  default: false,
});

export default ValidateUser;
