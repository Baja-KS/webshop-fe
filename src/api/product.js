import api from "./base";
import paths from "./paths";

async function search(query,page = 0,perPage = 5,category = null,minPrice = null,maxPrice = null){
    const params = {
        search:query,
        page:page,
        perPage:perPage
    };
    if (category) {
        params.category = category;
    }
    if (minPrice) {
        params.minPrice = minPrice;
    }
    if (maxPrice) {
        params.maxPrice = maxPrice;
    }
    try {
        const response = (await api.get(paths.search, {
            params: params
        })).data;
        response.content = response.content.map((item) => {
            item.imgUrl = `${process.env.REACT_APP_API_BASE_URL}${paths.content}/${item.img}`;
            return item;
        });
        return response
    } catch (e) {
     return e;
    }
}

async function details(id) {
    try {
        const response = await api.get(`${paths.details}/${id}`);
        const data = response.data;
        data.imgUrl = `${process.env.REACT_APP_API_BASE_URL}${paths.content}/${data.img}`;
        return data;
    } catch (e) {
        return e;
    }
}

export {search,details};