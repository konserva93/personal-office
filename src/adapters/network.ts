export const sendRequest = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(async (response) => response.json())
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
