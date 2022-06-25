import request from "./request"

export default {
    getNews: (path: string) => (request.get(`/api/4/news/${path}`)),
    getBefore: (date: Date) => {
        const url = '/api/4/news/before';
        const true_date = new Date(date);
        true_date.setDate(true_date.getDate() + 1);
        const year = true_date.getFullYear();
        const true_month = true_date.getMonth() + 1;
        const month = true_month > 9 ? true_month : `0${true_month}`;
        const day = true_date.getDate() > 9 ? true_date.getDate() : `0${true_date.getDate()}`;
        return request.get(`${url}/${year}${month}${day}`); 
    },

    getCss: (path: string) => (request.get(`/css/${path}`)),

    getLatest: () => (request.get('/api/4/news/latest')),
}