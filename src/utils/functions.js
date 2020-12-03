import axios from 'axios'

// stores url parameters from window path after user logs in as an object
export const getParamValues = (url) => {
    return url 
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=')
            prev[title] = value
            return prev
        }, {});
};

// set authorization header (access token) for every axios api request
export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));

        if (params) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${params.access_token}`;
        }
    } catch (err) {
        console.log('Error setting authorization', err);
    }
};