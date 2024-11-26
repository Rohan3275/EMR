import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../src/components/Appointments/PatientList/patientListSlice'
import doctorsReducers from '../src/components/Doctor/doctorsSlice'
import testReducers from '../src/components/Doctor/Test/testSlice'
import labReducer from '../src/components/Lab/labSlice'
import donorReducer from '../src/components/Blood_Donor/BloodDonorListSlice'

export const store =configureStore({
    reducer:{
        patient:patientReducer,
        doctors:doctorsReducers,
        testpatient:testReducers,
        labpatient:labReducer,
        donor:donorReducer,
        
    }
})