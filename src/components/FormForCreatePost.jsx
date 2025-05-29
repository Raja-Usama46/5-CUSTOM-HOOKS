import { Formik, Form, Field, ErrorMessage } from "formik";
import postSchema from "./ValidationSchema";

const FormForCreatePost = () => {
  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validationSchema={postSc}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <label className="block text-gray-700 mb-1">Title</label>
            <Field
              name="title"
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.title && touched.title ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Content</label>
            <Field
              name="body"
              as="textarea"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.body && touched.body ? "border-red-500" : ""
              }`}
              rows="3"
            />
            <ErrorMessage
              name="body"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  Creating...
                </>
              ) : (
                "Create"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormForCreatePost;
