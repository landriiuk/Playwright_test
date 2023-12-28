import dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseUrl: process.env.BASEURL ?? 'prod_url',
    password: process.env.PASSWORD ?? '12345',
    userName: process.env.USERNAME ?? 'default_user',
}