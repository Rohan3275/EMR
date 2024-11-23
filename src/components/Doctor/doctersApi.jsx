import axios from "axios";

export function getDoctors()
{
    return axios.get("http://localhost:3000/doctors")
}

export function deleteDoctorList(id) {
    return axios.delete(`http://localhost:3000/doctors/${id}`)
}

export function addDoctors(data)
{
    return axios.post(`http://localhost:3000/doctors`,data)
}