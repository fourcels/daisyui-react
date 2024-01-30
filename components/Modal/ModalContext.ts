import React, { useContext } from 'react';

export const ModalContext = React.createContext<React.RefObject<HTMLDialogElement> | null>(null)

export function useModal() {
    const dialogRef = useContext(ModalContext)
    if (!dialogRef) {
        throw new Error("useModal must be used within a ModalContext.Provider")
    }
    return dialogRef
}
