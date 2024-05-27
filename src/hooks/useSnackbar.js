import { useRecoilState } from "recoil";
import { snackbarState } from "../recoil/state";
import { DeleteOutline, FileDownload, FileUpload, PublishedWithChanges } from '@mui/icons-material';

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = useRecoilState(snackbarState);

    const {
        isSnackbarOpen,
        snackbarMessage,
        snackbarType,
        snackbarIcon,
        vertical,
        horizontal,
    } = snackbar;

    const iconComponents = {
        // 'success': <CheckCircleOutlineOutlined />,
        // 'error': <CheckCircleOutlineOutlined />,
        'download': <FileDownload />,
        'upload': <FileUpload />,
        'delete': <DeleteOutline />,
        'password': <PublishedWithChanges />,
    };
    const handleSnackbarClose = () => setSnackbar({ ...snackbar, isSnackbarOpen: false });

    const handleSnackbarOpen = (message, type = 'info', icon, v = 'top', h = 'center') => {
        const updatedIcon = icon ? iconComponents[icon] : null;

        setSnackbar({
            ...snackbar,
            isSnackbarOpen: true,
            snackbarMessage: message,
            snackbarType: type,
            snackbarIcon: updatedIcon,
            vertical: v,
            horizontal: h,
        });
    };



    return {
        isSnackbarOpen,
        snackbarMessage,
        snackbarType,
        snackbarIcon,
        vertical,
        horizontal,
        handleSnackbarOpen,
        handleSnackbarClose,
    };
};