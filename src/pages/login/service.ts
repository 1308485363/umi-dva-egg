import { $get } from '@/utils/request';

export const getInfo = async (params: object) => {
    return await $get('/api/login/info', { ...params })
}