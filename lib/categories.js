import { categories } from '../data/categories';
import { professionals } from '../data/professionals';

export function getCategoriesData() {
    // TODO fetch data from back end here
    // Limit 6
    return categories;
}

export function getAllCategoriesIds() {
    return categories.map((category) => {
        const id = category.id;
        return {
            params: {
                id: `${id}`,
            },
        };
    });
}

export function getCategory(id) {
    return categories.find((category) => category.id === id);
}

export function getProfessionalsForCategory(id) {
    return professionals.filter((professional) =>
        professional.categories.includes(id)
    );
}
