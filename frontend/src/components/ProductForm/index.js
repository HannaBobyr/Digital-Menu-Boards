import { Button, Form, Input, Select, Checkbox, Upload } from "antd";
import { Formik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "components/Loader";
import schema from "./validationSchema";

const { TextArea } = Input;
const { Option } = Select;

const ProductForm = ({ onFinish, initialValues }) => {
  const [list, setList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4444/categories")
      .then(({ data }) => setList(data));
  }, []);

  if (!list) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(value) => {
        const array = fileList[0];
        value.image = array.response.url;
        onFinish(value);
      }}
    >
      {({ handleSubmit, touched, errors, getFieldProps, setFieldValue }) => (
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
            label="Title"
            name="title"
            help={touched.title && errors.title ? errors.title : ""}
            validateStatus={touched.title && errors.title ? "error" : undefined}
          >
            <Input {...getFieldProps("title")} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            help={
              touched.description && errors.description
                ? errors.description
                : ""
            }
            validateStatus={
              touched.description && errors.description ? "error" : undefined
            }
          >
            <TextArea
              showCount
              maxLength={500}
              {...getFieldProps("description")}
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            help={touched.price && errors.price ? errors.price : ""}
            validateStatus={touched.price && errors.price ? "error" : undefined}
          >
            <Input type="number" min="0" {...getFieldProps("price")} />
          </Form.Item>

          <Form.Item label="Image">
            <Upload
              name="image"
              action="http://localhost:4444/uploads"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Active"
            name="state"
            help={touched.state && errors.state ? errors.state : ""}
            validateStatus={touched.state && errors.state ? "error" : undefined}
            valuePropName="checked"
          >
            <Checkbox
              onChange={(e) => setFieldValue("state", e.target.checked)}
            ></Checkbox>
          </Form.Item>

          <Form.Item
            label="Category"
            htmlFor="category"
            help={touched.category && errors.category ? errors.category : ""}
            validateStatus={
              touched.category && errors.category ? "error" : undefined
            }
          >
            <Select
              {...getFieldProps("category")}
              onChange={(value) => setFieldValue("category", value)}
            >
              {list.map((item) => {
                return (
                  <Option value={item.name} key={item.name}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
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
};

export default ProductForm;
