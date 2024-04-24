/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../redux/actions/actions';
import { Repository, RootState } from '../interfaces';
import { GET_REPOSITORIES } from '../graphql/queries';

export function Repositories() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRepositoryClick = (repository: Repository) => {
    dispatch(openModal(repository));
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro!</p>;

  const filteredRepositories = data.viewer.repositories.nodes.filter(
    (repository: Repository) =>
      repository.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Meus Repositórios:</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar"
      />
      <ul>
        {filteredRepositories.map((repository: Repository) => (
          <li key={repository.name} onClick={() => handleRepositoryClick(repository)}>
            <strong>{repository.name}</strong>
            {repository.description}

            {repository.collaborators.edges.map((edge: any) => (
              <span key={edge.node.name}>{edge.node.name}</span>
            ))}

          </li>
        ))}
      </ul>
      <Modal />
    </div>
  );
}

function Modal() {
  const dispatch = useDispatch();
  const { isOpen, selectedRepository } = useSelector((state: RootState) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !selectedRepository) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h2>{selectedRepository.name}</h2>
        <p>{selectedRepository.description}</p>
        <p>Total de Commits: {selectedRepository.defaultBranchRef.target.history.totalCount}</p>
        <p>Total de Issues Abertas: {selectedRepository.issues.totalCount}</p>
        <p>Total de Pull Requests: {selectedRepository.pullRequests.totalCount}</p>
      </div>
    </div>
  );
}
