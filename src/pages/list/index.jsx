import { useContext } from 'react';
import ListContext from '@/hooks/ListContext';

const ShoppingList = () => {

    const { listInfo, setListInfo } = useContext(ListContext)


    return (
        <div style={{marginTop:"6rem"}}>
            {Object.keys(listInfo).map((key) => {
                return (
                    <div>
                        {key} // {listInfo[key]}
                    </div>
                )
            })}
        </div>)
}

export default ShoppingList