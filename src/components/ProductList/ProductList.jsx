import { useEffect } from "react";
import { getProduct } from "../../store/asyncThunk/getProduct";
import { useDispatch, useSelector } from "react-redux";
import style from "./ProductList.module.css"
export const ProductList = (props) => {
    const items = useSelector(state => state.Products.products)
    const dispatch = useDispatch();
    const ids = props.ids;
    const isLoading = useSelector(state => state.Products.isLoading)
    useEffect(() => {
        if(ids.length){
            const data = { action: 'get_items', params: { ids }};
            dispatch(getProduct(data));
        }
    }, [dispatch, props]); 
    return (
        <div>
             {!isLoading ? <ol className={style.container}>{items.map(e => <li key={e.id} className={style.card}> <>{e.brand ? e.brand : <p>Noname</p>}</> , {e.price} , {e.product}</li>)}</ol> : <h1>Loading</h1>}
        </div>
    )
}
