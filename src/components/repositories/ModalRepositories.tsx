import { ModalProps } from "../../interfaces";
import { ModalWrapper, ModalContent, CloseButton, ModalTitle, ModalDescription, ModalBody } from "./styles";

export function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    title,
    description,
    firstText,
    secondText,
    thirdText,
    firstData,
    secondData,
    thirdData
  } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper $isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <ModalBody>
          <p>{firstText}: {firstData}</p>
          <p>{secondText}: {secondData}</p>
          <p>{thirdText}: {thirdData}</p>
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
}
