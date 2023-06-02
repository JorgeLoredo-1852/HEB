import { createContext } from "react";

const DiscountContext = createContext({
    discountInfo: [],
    setDiscountInfo: () => [],
})

export default DiscountContext;