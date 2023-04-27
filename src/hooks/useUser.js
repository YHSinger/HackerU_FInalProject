import { useState } from "react";
import userService from "../services/user";

const useUser = () => {
  const [user, setUser] = useState(userService.getCurrentUser());
  return [user, setUser];
};
export default useUser;
