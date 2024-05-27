import { atom } from "recoil";

export const snackbarState = atom({
    key: 'snackbarState',
    default: {
        isSnackbarOpen: false,
        snackbarMessage: '',
        snackbarType: 'info',
        snackbarIcon: undefined,
        vertical: '',
        horizontal: ''
    },
});

export const popupState = atom({
    key: 'popupState',
    default: {
        open: false,
        icon: '',
        heading: '',
        message: '',
        onConfirm: () => { },
        onClose: () => { },
    },
});

export const loadingState = atom({
    key: 'loadingState',
    default: false,
});



export const userState = atom({
    key: 'userState',
    default: {},
});
