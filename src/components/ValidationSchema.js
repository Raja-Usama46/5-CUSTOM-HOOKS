import * as Yup from "yup";

const noStartSpaces = (value) => {
  if (typeof value !== "string") return false;
  return value.trimStart().length === value.length;
};

const postSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .test("no-leading-space", "Cannot start with space", noStartSpaces)
    .min(3, "Title must be at least 3 characters"),
  body: Yup.string()
    .required("Content is required")
    .test("no-leading-space", "Cannot start with space", noStartSpaces)
    .min(10, "Content must be at least 10 characters"),
});

export default postSchema;
