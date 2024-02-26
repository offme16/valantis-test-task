import { api } from "../service/api";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
    'get_product',
    async (data, thunkAPI) => {
        try {
            const response = await api.post('', data);
            if (!response.data) {
                throw new Error();
            }
            return response.data.result;
        } catch (e) {
            console.log(e.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);