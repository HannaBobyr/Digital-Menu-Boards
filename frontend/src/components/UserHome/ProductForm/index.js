import React, { useState } from "react";
import { Form, Input, Button, Select, Upload, message } from "antd";
import { Formik } from "formik";
import schema from "./validationSchema";

const { TextArea } = Input;
const { Option } = Select;

function ProductForm({ initialValues, submit }) {
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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(value) => console.log(value)}
    >
      {({
        handleSubmit,
        touched,
        errors,
        getFieldProps,
        setFieldValue,
      }) => (
        <Form
          className="ps-2 pe-2"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 8 }}
          onFinish={handleSubmit}
          layout="horizontal"
          size="large"
          autoComplete="off"
          style={{ marginTop: 20 }}
        >
          <Form.Item
            label="Title"
            htmlFor="title"
            help={touched.title && errors.title ? errors.title : ""}
            validateStatus={touched.title && errors.title ? "error" : undefined}
          >
            <Input {...getFieldProps("title")} />
          </Form.Item>

          <Form.Item
            label="Description"
            htmlFor="description"
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
            htmlFor="price"
            help={touched.price && errors.price ? errors.price : ""}
            validateStatus={touched.price && errors.price ? "error" : undefined}
          >
            <Input type="number" min="0" {...getFieldProps("price")} />
          </Form.Item>

          {/* <Form.Item
            label="Категорія"
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
              <Option disabled value="">
                Виберіть категорію
              </Option>
              <Option value="plastic">Пластик</Option>
              <Option value="metal">Метал</Option>
              <Option value="paper">Папір</Option>
              <Option value="glass">Скло</Option>
            </Select>
          </Form.Item> */}
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
            label="State"
            htmlFor="state"
            help={touched.state && errors.state ? errors.state : ""}
            validateStatus={touched.state && errors.state ? "error" : undefined}
          >
            <Select
              {...getFieldProps("state")}
              onChange={(value) => setFieldValue("state", value)}
            >
              <Option disabled value="">
                State
              </Option>
              <Option value="buy">Active</Option>
              <Option value="sell">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
            <Button
              type="text"
              htmlType="submit"
              style={{ border: "1px solid #d9d9d9" }}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}

export default ProductForm;
