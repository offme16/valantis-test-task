import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIds } from "../../store/asyncThunk/getIds";
import { ProductList } from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { idsActions } from "../../store/idsSlice";

const Main = () => {
    const limit = useSelector(state => state.idProducts.limit);
    const ids = useSelector(state => state.idProducts.ids);
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.idProducts.currentPage);

    useEffect(() => {
        const data = { action: 'get_ids', params: { offset: 0, limit }};
        dispatch(getIds(data));
    }, [dispatch, limit]); 
    
    const handleChangePage = (page) => {
        const newOffset = (page - 1) * 50;
        const data = { action: 'get_ids', params: { offset: newOffset, limit }};
        dispatch(getIds(data));
    dispatch(idsActions.updateOffsetAndPage({ offset: newOffset, currentPage: page }));
    };

    return (
        <div>
            <ProductList ids={ids}/>
            <Pagination 
                currentPage={currentPage}
                onChangePage={handleChangePage}
            />
        </div>
    );
}

export default Main;
