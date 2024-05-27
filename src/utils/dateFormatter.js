export function dateFormatter(dateString) {
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    };
    return dateString ? new Date(dateString).toLocaleDateString('en-US', options) : 'N/A';
}
