import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
    },
    reducers: {
        employeeAdd: (state, action) => {
            state.employees.push(action.payload);
        },
        employeeUpdate: (state, action) => {
            const { id, name, age, role, sex, email, phone } = action.payload;
            const employeeToUpdate = state.employees.find(employee => employee.id === id);
            if (employeeToUpdate) {
                employeeToUpdate.name = name;
                employeeToUpdate.age = age;
                employeeToUpdate.role = role;
                employeeToUpdate.sex = sex;
                employeeToUpdate.email = email;
                employeeToUpdate.phone = phone;
            }
        }
        ,
        employeeDelete: (state, action) => {
            const { id } = action.payload;
            const existingEmployeeIndex = state.employees.filter(employee => employee.id === id);
            if (existingEmployeeIndex !== -1) {
                state.employees.splice(existingEmployeeIndex, 1);
            }
        }
    },
});

export const { employeeAdd, employeeUpdate, employeeDelete } = employeeSlice.actions;

export default employeeSlice.reducer;
