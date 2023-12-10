import axios from 'axios';

export default class Api {
    private static instance: Api;
    private service: any;

    private constructor({ baseURL }: { baseURL: string }) {
        this.service = axios.create({
            baseURL: baseURL,
            timeout: 1000,
        });
    }

    public static getInstance({ baseURL }: { baseURL: string }): Api {
        if (!Api.instance) {
            Api.instance = new Api({ baseURL: baseURL });
        }
        return Api.instance;
    }

    public get(endpoint: string, params?: any) {
        return this.service.get(endpoint, { params });
    }

    public post(endpoint: string, data: any) {
        return this.service.post(endpoint, data);
    }

    // Add other methods for PUT, DELETE etc. as needed
}
