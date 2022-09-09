import axiosInstance from '.';

const getData = async (
  inputTitle: string,
  freeStatus: object[],
  offset: number,
) => {
  const filterConditions = JSON.stringify({
    $and: [{ title: `%${inputTitle}%` }, { $or: freeStatus }],
  });

  const res = await axiosInstance.get(
    `?filter_conditions=${filterConditions}
    &offset=${offset}&count=20`,
  );
  return res.data;
};

export default getData;
