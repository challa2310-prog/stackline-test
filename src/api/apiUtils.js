//import * as data from './data.json';
export const handleSuccess = async (response) => {
    if (response.ok) {
        return response.json();
    }
    if (response.status !== 200) {
        const err = await response.text();
        throw new Error(err);
    }
    throw new Error("Network error");
}

export const handleError = (error) => {
    throw error;
}