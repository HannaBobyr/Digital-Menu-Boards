import { Button, Form, Input } from "antd";
import { Formik } from "formik";

const CategoryForm = ({ onFinish, initialValues }) => (
  <Formik initialValues={initialValues} onSubmit={(value) => onFinish(value)}>
    {({ handleSubmit, touched, errors, getFieldProps }) => (
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 8 }}
        style={{ paddingTop: "100px" }}
        onFinish={handleSubmit}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          help={touched.name && errors.name ? errors.name : ""}
          validateStatus={touched.name && errors.name ? "error" : undefined}
        >
          <Input {...getFieldProps("name")} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )}
  </Formik>
);

export default CategoryForm;
