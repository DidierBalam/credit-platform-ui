const generateId = (): number => {
  return Math.floor(Math.random() * 1000000000);
};

export { generateId };
