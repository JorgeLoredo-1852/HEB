import { createContext } from "react";

const ListContext = createContext({
    listInfo: {},
    setListInfo: () => {},
})

export default ListContext;