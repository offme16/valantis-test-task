import { useEffect } from "react";
import { getProduct } from "../../store/asyncThunk/getProduct";
import { useDispatch, useSelector } from "react-redux";

export const ProductList = (props) => {
    const items = useSelector(state => state.Products.products)
    const dispatch = useDispatch();
    const ids = props.ids;

    
    useEffect(() => {
        if(ids.length){
            const data = { action: 'get_items', params: { ids }};
            dispatch(getProduct(data));
        }
    }, [dispatch, props]); 
    return (
        <div>
             {items ? <ol>{items.map(e => <li key={e.id}> {e.brand} , {e.price} , {e.product}</li>)}</ol> : <h1>Loading</h1>}
        </div>
    )
}
