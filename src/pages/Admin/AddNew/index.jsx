import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Select } from 'antd';
import Typography from 'antd/es/typography/Typography';
import Title from 'antd/es/typography/Title';
import { useDispatch } from 'react-redux';
import { AddNewProduct } from '../../../redux/Products/api_actions';
import { useNavigate } from 'react-router';

const { Option } = Select;

const AddNew = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    author: '',
    pageSize: '',
    publishedDate: null,
    genre: '',
    price: ''
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: new Date().getTime()
    }));
  };

  const handleDateChange = (date, dateString) => {
    setFormData((prevData) => ({
      ...prevData,
      publishedDate: dateString,
    }));
  };

  const handleGenreChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      genre: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(AddNewProduct(formData))
    navigate('/admin/books')
  };

  return (
    <Form onFinish={handleSubmit} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}  layout="vertical">
      <Typography>
        <Title level={3}>Add new product</Title>
      </Typography>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]}>
        <Input name="title" value={formData.title} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={5} name="description" value={formData.description} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Image URL" name="imageUrl">
        <Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Author" name="author">
        <Input name="author" value={formData.author} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Page Size" name="pageSize">
        <InputNumber name="pageSize" value={formData.pageSize} onChange={(value) => handleChange({ target: { name: 'pageSize', value } })} />
      </Form.Item>

      <Form.Item label="Published Date" name="publishedDate">
        <DatePicker format="YYYY-MM-DD" onChange={handleDateChange} />
      </Form.Item>

      <Form.Item label="Genre" name="genre">
        <Select name="genre" value={formData.genre} onChange={handleGenreChange}>
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
        <InputNumber name="price" value={formData.price} onChange={(value) => handleChange({ target: { name: 'price', value } })} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 14 }}>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddNew;
