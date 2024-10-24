import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../src/components/Appointments/PatientList/patientListSlice'

export const store =configureStore({
    reducer:{
        patient:patientReducer
    }
})