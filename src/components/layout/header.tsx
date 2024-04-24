import React from 'react';
import { HeaderContainer, SearchContainer, SearchInput, SearchLabel, TitleHeader } from './styles';
import { HeaderProps } from '../../interfaces';

export const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <HeaderContainer>
      <TitleHeader>GitHub Repositories</TitleHeader>
      <SearchContainer>
        <SearchLabel>Buscar pelo repositório :</SearchLabel>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Nome do repositório..."
        />
      </SearchContainer>
    </HeaderContainer>
  );
};
