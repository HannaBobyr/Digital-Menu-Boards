import { Space, Spin } from "antd";

const Loader = () => (
  <Space>
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  </Space>
);
export default Loader;
