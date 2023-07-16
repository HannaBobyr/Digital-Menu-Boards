import { Button, Form, Input } from "antd";
import { Formik } from "formik";
import schema from "./validationSchema";
import { Link } from "react-router-dom";

const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 16,
  },
};

const AuthForm = ({ onFinish, initialValues, login }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(value) => onFinish(value)}
  >
    {({ handleSubmit, touched, errors, getFieldProps }) => (
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 8 }}
        style={{ paddingTop: "2 0px" }}
        onFinish={handleSubmit}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          help={touched.email && errors.email ? errors.email : ""}
          validateStatus={touched.email && errors.email ? "error" : undefined}
        >
          <Input {...getFieldProps("email")} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          help={touched.password && errors.password ? errors.password : ""}
          validateStatus={
            touched.password && errors.password ? "error" : undefined
          }
        >
          <Input.Password {...getFieldProps("password")} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {login && (
            <Button type="link" htmlType="button">
              <Link to="/register">Create account</Link>
            </Button>
          )}
        </Form.Item>
      </Form>
    )}
  </Formik>
);

export default AuthForm;
