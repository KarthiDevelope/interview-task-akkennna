import React, { useState, useEffect } from 'react';
import { Button, Input, Form, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { employeeUpdate } from './redux/slices/employeeSlices';
import styled from 'styled-components';

const { Option } = Select;

const Update = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employee.employees);
    console.log(employees)
    const { id } = useParams();
    const existedEmployee = employees.find(f => f.id === id);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        if (existedEmployee) {
            form.setFieldsValue(existedEmployee);
        }
    }, [existedEmployee, form]);

    const handleFinish = (values) => {
        dispatch(employeeUpdate({
            id: id,
            ...values,
        }));
        navigate("/");
    };

    return (
        <FormAlign>

            <div className="container">
                <div className="row">
                    <h1>Edit Employee</h1>
                </div>
                <div className='FormSection_main'>
                    <Form
                        layout='vertical'
                        onFinish={handleFinish}
                        form={form}
                        className='forms'
                    >
                        <Form.Item label="Name" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Age" name="age">
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item label="Role" name="role">
                            <Select>
                                <Option value="manager">Manager</Option>
                                <Option value="employee">Employee</Option>
                                <Option value="supervisor">Supervisor</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Sex" name="sex">
                            <Select>
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Phone" name="phone">
                            <Input type="tel" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Save</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </FormAlign>
    );
};

export default Update;

const FormAlign = styled.div`
.FormSection_main .forms {
    width: 800px;
    padding: 0 20px;
}

`
