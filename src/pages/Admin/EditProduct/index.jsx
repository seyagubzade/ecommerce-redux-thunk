import React, { useEffect, Fragment } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Select, Typography, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleProduct, UpdateProduct } from '../../../redux/Products/api_actions';
import { useNavigate, useParams } from 'react-router';

const { Option } = Select;
const { Title } = Typography;

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProduct, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetSingleProduct(id));
  }, [dispatch, id]);

  const [form] = Form.useForm();

  useEffect(() => {
    if (!loading && currentProduct) {
      form.setFieldsValue(currentProduct);
    }
  }, [currentProduct, loading, form]);

  const handleSubmit = (values) => {

    dispatch(UpdateProduct({ id, item: {...currentProduct, ...values} }));

    navigate('/admin/books');
  };

  return (
    <Fragment>
      {loading ? (
        <Spin />
      ) : currentProduct ? (
        <Form
          form={form}
          onFinish={handleSubmit}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          initialValues={currentProduct}
        >
          <Typography>
            <Title level={3}>Edit Product</Title>
          </Typography>

          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]}>
            <Input name="title" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea rows={5} name="description" />
          </Form.Item>

          <Form.Item label="Image URL" name="imageUrl">
            <Input name="imageUrl" />
          </Form.Item>

          <Form.Item label="Author" name="author">
            <Input name="author" />
          </Form.Item>

          <Form.Item label="Page Size" name="pageSize">
            <InputNumber name="pageSize" />
          </Form.Item>

          {/* <Form.Item label="Published Date" name="publishedDate">
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item> */}

          <Form.Item label="Genre" name="genre">
            <Select name="genre">
              <Option value="Fiction">Fiction</Option>
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Romance">Romance</Option>
              <Option value="Poetry">Epic Poetry</Option>
              <Option value="Philosophical">Philosophical Fiction</Option>
              <Option value="Adventure">Adventure</Option>
              <Option value="ChildrenLiterature">Children's Literature</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Price" name="price">
            <InputNumber name="price" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 14 }}>
            <Button type="primary" htmlType="submit">
              Update Product
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <p>Not found</p>
      )}
    </Fragment>
  );
};

export default EditProduct;
