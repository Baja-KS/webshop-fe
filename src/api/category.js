import paths from "./paths";
import api from "./base";

async function allCategories(){
    try {
        const response = await api.get(paths.categories);
        return response.data;
    } catch (e) {
        return e;
    }
}

export {allCategories};