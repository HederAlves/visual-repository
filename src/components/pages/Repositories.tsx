import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../redux/actions/actions';
import { GET_REPOSITORIES } from '../../graphql/queries';
import { Repository } from '../../interfaces';
import { RootState } from '../../interfaces';
import { TableRepositories } from '../repositories/TableRepositories';
import { Modal } from '../repositories/ModalRepositories';
import { Header } from '../layout/header';

export function Repositories() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, selectedRepository } = useSelector((state: RootState) => state.modal);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRepositoryClick = (repository: Repository) => {
    dispatch(openModal(repository));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro!</p>;

  const filteredRepositories = data.viewer.repositories.nodes.filter(
    (repository: Repository) =>
      repository.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TableRepositories repositories={filteredRepositories} onRepositoryClick={handleRepositoryClick} />
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title={selectedRepository ? selectedRepository.name : ''}
        description={"Estatística do repositório"}
        firstText="Commits"
        secondText="Issues Abertas"
        thirdText="Pull Requests"
        firstData={selectedRepository ? selectedRepository.defaultBranchRef.target.history.totalCount : 0}
        secondData={selectedRepository ? selectedRepository.issues.totalCount : 0}
        thirdData={selectedRepository ? selectedRepository.pullRequests.totalCount : 0}
      />
    </>
  );
}
