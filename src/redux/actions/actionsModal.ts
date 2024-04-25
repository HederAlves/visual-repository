import { Repository } from "../../interfaces";

export const openModal = (repository: Repository) => ({
    type: 'OPEN_MODAL',
    payload: repository,
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL',
});
