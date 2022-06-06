import Modal from 'react-modal';

interface SignupModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function SignupModal({ isOpen, onRequestClose }: SignupModalProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <input type="text" placeholder='Materia'/>
        </Modal>
    );
}
