import { api } from "../service/api";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getIds = createAsyncThunk(
    'get_ids',
    async (data, thunkAPI) => {
        try {
            const response = await api.post('', data);
            if (!response.data) {
                throw new Error('Пустой ответ от сервера');
            }
            return response.data.result;
        } catch (e) {
            console.error('Ошибка при выполнении запроса:', e.message);
            return thunkAPI.retry('Произошла ошибка');
        }
    },
);
