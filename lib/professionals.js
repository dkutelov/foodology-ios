import { professionals } from '../data/professionals';

export function getProfessionalsData() {
    // TODO fetch data from back end here
    return professionals;
}

export function getAllProfessionalsIds() {
    return professionals.map((professional) => {
        const id = professional.id.value;
        return {
            params: {
                id: `${id}`,
            },
        };
    });
}

export function getProfessionalData(id) {
    // TODO handle not brand found
    return professionals.find((professional) => professional.id.value === id);
}
