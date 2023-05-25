import { useState } from "react";
import { useEffect } from "react";
import DiscountEmpty from "@/components/discountEmpty/DiscountEmpty";
import DiscountList from "@/components/discountList/DiscountList";

const arr = [{
    discount: "15%",
    expires: "27/06/2023"
},
{
    discount: "25%",
    expires: "27/06/2023"
},
{
    discount: "10%",
    expires: "27/06/2023"
}]

const Profile = () => {
  const [isEmptyList, setEmptyList] = useState(false)
  
  return (<>
    {isEmptyList ? <DiscountEmpty/> : <DiscountList info = {arr} />}
  </>)
};

export default Profile;
