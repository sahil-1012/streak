
const HOST_URL = process.env.REACT_APP_HOST;

export const usePostData = async (url, body) => {
    const token = sessionStorage.getItem('token');
    try {
        const response = await fetch(HOST_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        const result = await response.json();
        
        if (result?.message && !result.success)
            throw new Error(result?.message);

        else if (!result.success)
            throw new Error('Network response was not ok, Please try again !');

        return { success: true, message: result.message, data: result.data, result };
    } catch (err) {
        return { success: false, error: err.message, message : err.message };
    }
};