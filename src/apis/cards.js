import axiosInstance from '.';

export const getData = async (title, isfree) => {
  const filter_conditions = {
    and: [{ title: '%c언어%' }, { or: [{ enroll_type: 0, is_free: isfree }] }],
  };
  const res = await axiosInstance.get(
    `?filter_conditions=${filter_conditions}&offset=0&count=20`,
  );
  console.log(res.data.courses);
  return res.data.courses;
};
