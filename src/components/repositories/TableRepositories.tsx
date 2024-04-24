import { Collaborator, Repository, RepositoryListProps } from '../../interfaces';
import { TableData, TableHeader, TableRow, TableContainer, TABLE_DATA } from './styles';

export function TableRepositories({ repositories, onRepositoryClick }: RepositoryListProps) {
    return (
        <TableContainer>
            <thead>
                <TableRow>
                    <TableHeader>Respositórios</TableHeader>
                    <TableHeader>Colaboradores</TableHeader>
                    <TableHeader>Descrição</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {repositories.map((repository: Repository) => (
                    <TableRow key={repository.name} onClick={() => onRepositoryClick(repository)}>
                        <TableData>
                            <strong>{repository.name}</strong>
                        </TableData>
                        <TableData $alignText='center' style={TABLE_DATA}>
                            {repository.collaborators.edges.map((edge: Collaborator) => (
                                <span key={edge.node.name}>{edge.node.name}</span>
                            ))}
                        </TableData>
                        <TableData $alignText='center'>
                            {repository.description}
                        </TableData>
                    </TableRow>
                ))}
            </tbody>
        </TableContainer>
    );
}
