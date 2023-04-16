import { createContext } from "react";

const UserContext = createContext({
    userInfo: {},
    setUserInfo: () => {}
})

export default UserContext;