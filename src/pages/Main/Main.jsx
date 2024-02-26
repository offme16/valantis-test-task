import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getIds } from "../../store/asyncThunk/getIds";
import { ProductList } from "../../components/ProductList/ProductList";


const Main = () => {
    const offset = useSelector(state => state.idProducts.offset);
    const limit = useSelector(state => state.idProducts.limit);
    const ids = useSelector(state => state.idProducts.ids);
    const dispatch = useDispatch();
    
    useEffect(() => {
            const data = { action: 'get_ids', params: { offset, limit }};
            dispatch(getIds(data));
    }, [dispatch, limit, offset]); 
    
    return (
        <div>
             <ProductList ids={ids}/>
        </div>
    );
}

export default Main;
