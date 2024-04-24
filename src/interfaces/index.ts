/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Repository {
    name: string;
    description: string;
    updatedAt: string;
    collaborators: any;
    pullRequests: any;
    issues: any;
    defaultBranchRef: any;
}

export interface RootState {
    repositories: Repository[];
    searchQuery: string;
    modal: {
        isOpen: boolean;
        selectedRepository: Repository | null;
    };
}

export interface Action {
    payload: Repository[];
    type: string;
}

export interface Repository {
    name: string;
    description: string;
}

export interface ModalState {
    isOpen: boolean;
    selectedRepository: Repository | null;
}
