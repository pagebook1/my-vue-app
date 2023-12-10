import Api from "./api";

export async function getProduct() {
    const { data } = await Api.getInstance({ baseURL: 'https://dummyjson.com' }).get('/products');
    return data;
}