import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required").min(1, "Title is required"),
});
