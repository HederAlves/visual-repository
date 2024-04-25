import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Repository } from '../../interfaces';
import { RootState } from '../../interfaces';
import { TableRepositories } from '../repositories/TableRepositories';
import { Modal } from '../repositories/ModalRepositories';
import { Header } from '../layout/header';
import { fetchRepositories } from '../../redux/actions/actionsRepositories';
import { closeModal, openModal } from '../../redux/actions/actionsModal';
import { UnknownAction } from 'redux';

export function Repositories() {
  const dispatch = useDispatch();
  const { repositories, loading, error } = useSelector((state: RootState) => state.repositories);
  const { isOpen, selectedRepository } = useSelector((state: RootState) => state.modal);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchRepositories() as unknown as UnknownAction);
  }, [dispatch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRepositoryClick = (repository: Repository) => {
    dispatch(openModal(repository));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const filteredRepositories = repositories.filter(
    (repository: Repository) =>
      repository.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro!</p>;

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
