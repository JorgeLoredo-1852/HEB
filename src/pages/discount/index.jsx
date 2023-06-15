import { useState } from "react";
import { useEffect } from "react";
import DiscountEmpty from "@/components/discountEmpty/DiscountEmpty";
import DiscountList from "@/components/discountList/DiscountList";
import DiscountContext from "@/hooks/DiscountContext";
import { useContext } from "react";

const Profile = () => {
  const { discountInfo, setDiscountInfo } = useContext(DiscountContext);
  console.log(discountInfo)
  
  return (<>
    {discountInfo.length === 0 ? <DiscountEmpty/> : <DiscountList info = {discountInfo} />}
  </>)
};

export default Profile;
