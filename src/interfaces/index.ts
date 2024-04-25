export interface Collaborator {
    node: {
        name: string;
    };
}

export interface BranchRef {
    target: {
        history: {
            totalCount: number;
        };
    };
}

export interface IssueConnection {
    totalCount: number;
}

export interface PullRequestConnection {
    totalCount: number;
}
export interface Repository {
    name: string;
    description: string;
    updatedAt: string;
    collaborators: {
        edges: Collaborator[];
    };
    pullRequests: PullRequestConnection;
    issues: IssueConnection;
    defaultBranchRef: BranchRef;
}

export interface RepositoryListProps {
    repositories: Repository[];
    onRepositoryClick: (repository: Repository) => void;
}

export interface HeaderProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RootState {
    repositories: RepositoryState;
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

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    firstText: string;
    secondText: string;
    thirdText: string;
    firstData: number;
    secondData: number;
    thirdData: number;
}

export interface RepositoryState {
    repositories: Repository[];
    loading: boolean;
    error: boolean;
}

export interface RepositoryAction {
    type: string;
    payload?: Repository;
}

export interface FetchRepositoriesSuccess {
    type: 'FETCH_REPOSITORIES_SUCCESS';
    payload: Repository[];
}

export interface FetchRepositoriesFailure {
    type: 'FETCH_REPOSITORIES_FAILURE';
    payload: string;
}

export interface RepositoriesAction {
    type: string;
    payload: Repository[];
}

export interface State {
    repositories: unknown[];
    loading: boolean;
    error: string | null;
}

export const initialState: State = {
    repositories: [],
    loading: false,
    error: null,
};

export interface FetchRepositoriesRequest {
    type: 'FETCH_REPOSITORIES_REQUEST';
}
