import React from 'react';
import { Button, Table, Popconfirm } from "antd";
import styled from 'styled-components';
import { GoPlus } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { data } from './data';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { employeeDelete } from './redux/slices/employeeSlices';

const Home = () => {
    const navigate = useNavigate();
    const employees = useSelector((state) => state.employee.employees);
    const dispatch = useDispatch();

    const TableData = employees?.map((item, index) => ({
        key: index,
        id: index + 1,
        name: item?.name,
        role: item?.role,
        age: item?.age,
        sex: item?.sex,
        email: item?.email,
        phone: item?.phone,
        action: item?.id,
    }));

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(employeeDelete(id));

    };

    const columns = [
        {
            title: "S no",
            dataIndex: "id",
            key: "id"
        },
        {
            title: 'Employee name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Sex',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            fixed: "right",
            width: "3%",
            render: (action, record) => (
                <div style={{ display: "flex" }}>
                    <p className="action_btn edit">
                        <FiEdit style={{ fontSize: "18px", cursor: "pointer" }} onClick={() => handleEdit(record?.id)} />
                    </p>
                    <Popconfirm title="Are you sure to delete?">
                        <p className="action_btn delete">
                            <MdDeleteOutline style={{ fontSize: "22px", marginLeft: "10px", color: "red", cursor: "pointer" }} onClick={() => handleDelete(record?.id)} />
                        </p>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <HomeStyle>
            <div className='HomeSection_main'>
                <div className='Top_main'>
                    <h1>Employee Management System</h1>
                    <Button
                        type='primary'
                        shape='round'
                        onClick={() => navigate("/add")}
                    >
                        Add <GoPlus />
                    </Button>
                </div>
                <br />
                <br />
                <br />
                <Table
                    columns={columns}
                    dataSource={TableData}
                />
            </div>
        </HomeStyle>
    )
}

export default Home;

const HomeStyle = styled.div`
    .HomeSection_main {
        padding: 0 20px;
    }

    .HomeSection_main .Top_main {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;


