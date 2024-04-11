import { configureStore } from "@reduxjs/toolkit";
import employeeSlices from "./slices/employeeSlices";

export default configureStore({
    reducer: {
        employee: employeeSlices
    },
});