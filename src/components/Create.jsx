import React, { useState } from 'react';
import { Button, Input, Form, Select } from "antd";
import { employeeAdd } from './redux/slices/employeeSlices';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"


const { Option } = Select;

const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");
    const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleName = (e) => setName(e.target.value);
    const handleAge = (e) => setAge(e.target.value);
    const handleRole = (value) => setRole(value);
    const handleSex = (value) => setSex(value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);


    const handleFinish = () => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const userData = {
            id: id,
            name,
            age,
            role,
            sex,
            email,
            phone
        };
        dispatch(employeeAdd(userData));
        navigate("/")
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Add Employee</h1>
            </div>
            <div className='FormSection_main'>
                <Form
                    layout='vertical'
                    onFinish={handleFinish}

                >
                    <Form.Item label="Name">
                        <Input value={name} onChange={handleName} />
                    </Form.Item>
                    <Form.Item label="Age">
                        <Input type="number" value={age} onChange={handleAge} />
                    </Form.Item>
                    <Form.Item label="Role">
                        <Select value={role} onChange={handleRole}>
                            <Option value="manager">Manager</Option>
                            <Option value="employee">Employee</Option>
                            <Option value="supervisor">Supervisor</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Sex">
                        <Select value={sex} onChange={handleSex}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input type="email" value={email} onChange={handleEmail} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input type="tel" value={phone} onChange={handlePhone} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Create;
