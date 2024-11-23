import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../src/components/Appointments/PatientList/patientListSlice'
import doctorsReducers from '../src/components/Doctor/doctorsSlice'

export const store =configureStore({
    reducer:{
        patient:patientReducer,
        doctors:doctorsReducers
    }
})