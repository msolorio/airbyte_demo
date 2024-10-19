const getPort = function () {
    return Number(process.env.PORT) || 3000;
};
const getApiUrl = function () {
    const host = process.env.API_HOST || 'localhost';
    return `http://${host}:${getPort()}`;
};
export { getApiUrl, getPort };
//# sourceMappingURL=config.js.map