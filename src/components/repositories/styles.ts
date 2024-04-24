import styled from "styled-components";

//Table
export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  border: 1px solid #ccc;
  width: 10%;
`;

export const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px 0px;
`;

export const TableData = styled.td<{ $alignText?: string }>`
  padding: 10px 5px;
  text-align: ${(props) => props.$alignText || "left"};
  border: 1px solid #ccc;
`;

export const TABLE_DATA: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '14px',
  border: 'none'
};

// Modal
export const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 2px;
  border: 1px solid #888;
  width: 50%;

    @media (max-width: 950px) {
      margin-top: 140px;
      width: 80%;
  }
`;

export const CloseButton = styled.span`
  color: red;
  float: right;
  font-weight: bold;
  font-size: 28px;
  padding: 5px 10px;
  &:hover,
  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h1`
  background-color: #333;
  color: greenyellow;
  vertical-align: middle;
  padding: 18px 0px 18px 10px;
`;

export const ModalDescription = styled.p`
  text-align: center;
  vertical-align: middle;
  padding: 8px 0px;
  background: #f0f0f0;
`;

export const ModalBody = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
  padding: 20px 0px;

  @media (max-width: 750px) { 
    flex-direction: column; 
    align-items: center;
  }
`;
