const getToken = (): string => {
    return Math.floor(Math.random() * 1000000000).toString();
};

export { getToken };
