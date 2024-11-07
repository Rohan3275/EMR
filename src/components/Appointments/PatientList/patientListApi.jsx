import axios from "axios";

export function getList() {
    return axios.get("http://localhost:3000/appointment")
}

// get Doctors 
export function getpDoctors() {
    return axios.get("http://localhost:3000/doctors")
}

// 

export function deleteList(id) {
    return axios.delete(`http://localhost:3000/appointment/${id}`)
}

export function updateList(id, value) {
    return axios.put(`http://localhost:3000/appointment/${id}`, value);
}