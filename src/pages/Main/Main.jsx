import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getIds } from "../../store/asyncThunk/getIds";


const Main = () => {
    const offset = useSelector(state => state.idProducts.offset);
    const limit = useSelector(state => state.idProducts.limit);
    const ids = useSelector(state => state.idProducts.ids);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchDataID = async () => {
            const data = { action: 'get_ids', params: { offset, limit }};
            await dispatch(getIds(data));
        };
        
        fetchDataID(); 
    }, [dispatch, limit, offset]); 
    

    
    return (
        <div> 
        </div>
    );
}


export default Main;
