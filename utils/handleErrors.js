export const handleErrors = (res, error) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};