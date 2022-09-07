import axiosInstance from '.';

export const getData = async (inputTitle, freeStatus, offset) => {
  const filter_conditions = JSON.stringify({
    $and: [{ title: `%${inputTitle}%` }, { $or: freeStatus }],
  });

  const res = await axiosInstance.get(
    `?filter_conditions=${filter_conditions}
    &offset=${offset}&count=20`,
  );
  console.log(res);
  return res.data;
};
