import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginForm.module.scss';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    classname?: string
}

export const LoginModal = ({ isOpen, onClose, classname }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [classname])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
