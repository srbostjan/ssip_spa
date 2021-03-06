const SsipResource = module.exports;

const axios = require('axios');

const BASE_URL = 'https://ssip-backend.herokuapp.com/api/ssip';

SsipResource.getAllUsers = async () => {
    const url = `${BASE_URL}/user`;

    try {
        const response = await axios.get(url);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.getUserById = async (userId) => {
    const url = `${BASE_URL}/user/${userId}`;

    try {
        const response = await axios.get(url);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.createUser = async (userData) => {
    const url = `${BASE_URL}/user/new`;

    try {
        const response = await axios.post(url, userData);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.updateUser = async (userId, userData) => {
    const url = `${BASE_URL}/user/${userId}`;

    try {
        const response = await axios.put(url, userData);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};


SsipResource.deleteUserById = async (userId) => {
    const url = `${BASE_URL}/user/${userId}`;

    try {
        const response = await axios.delete(url);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.loginUser = async (userAuth) => {
    const url = `${BASE_URL}/user/auth`;

    try {
        const response = await axios.post(url, userAuth);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.twoFactor = async (userAuth, headers) => {
    const url = `${BASE_URL}/user/2fa`;

    try {
        const response = await axios.post(url, userAuth, { headers });

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};

SsipResource.logoutUser = async () => {
    const url = `${BASE_URL}/user/logout`;

    try {
        const response = await axios.post(url);

        return response;
    } catch (error) {
        console.log('fetch error', error);
    }
};