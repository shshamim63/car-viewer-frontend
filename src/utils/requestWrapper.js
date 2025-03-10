export const safeApiCall = async (axiosCallback) => {
  try {
    const { data } = await axiosCallback();
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
};
