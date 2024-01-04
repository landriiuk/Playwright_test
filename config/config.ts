import dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseUrl: process.env.BASEURL ?? 'prod_url'
}

export const userCred: ICredentials = {
    password: process.env.PASSWORD ?? '12345',
    username: process.env.USERNAME ?? 'default_user'
}