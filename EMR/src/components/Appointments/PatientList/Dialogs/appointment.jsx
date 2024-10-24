import React, { useEffect, useState } from "react";

import {
    Input,
    Option,
    Select,
    Button,
    Dialog,
    Textarea,
    IconButton,
    Typography,
    DialogBody,
    DialogHeader,
    DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles
import { format } from 'date-fns';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useDispatch, useSelector } from "react-redux";
import { getListAsynk, updateAsynk } from "../patientListSlice";
import axios from "axios";

export function Appointment(id) {

    const [open, setOpen] = React.useState(false);

    // date time
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedTime, setSelectedTime] = useState(null);
    const [isTimeOpen, setIsTimeOpen] = useState(false);

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        setValues({ ...values, time: format(time, 'HH:mm') });
        setIsTimeOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setValues({ ...values, date: format(date, 'MM/dd/yyyy') });
        setIsOpen(false); // Close the calendar after selecting
    };
    // 

    const [values, setValues] = useState({
        id: id.id,
        reason: '',
        type: '',
        time: '',
        date: '',
        doctor: '',
        notes: ''
    })

    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        axios.get("http://localhost:3000/appointment/" + id.id)
            .then(res => { setValues({ ...values, reason: res.data.reason, type: res.data.type, doctor: res.data.doctor, notes: res.data.notes, date: res.data.date, time: res.data.time }) })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:3000/appointment/" + id.id, values)
            .then(res => { alert("Appointment Shedule Successefully...."); location.reload() })
            .catch(err => console.log(err))

    }

    return (<>
        <Button onClick={handleOpen} size="sm" color="orange" variant="outlined">
            Appointment
        </Button>
        <Dialog open={open} handler={handleOpen} size="xl">
            <DialogHeader>Appointment</DialogHeader>

            <form className="p-10" onSubmit={handleSubmit}>
                <div className="flex gap-5">
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Appointment Date
                        </Typography>
                        <div className="relative">
                            <input
                                type="text"
                                value={selectedDate ? format(selectedDate, 'MM/dd/yyyy') : values.date}
                                name="date"
                                onClick={() => setIsOpen(!isOpen)}
                                className="border p-2 rounded"
                                placeholder="Select a date"
                                readOnly
                            />
                            {isOpen && (
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline
                                    className="absolute z-10 bg-white border border-gray-300 rounded shadow-md"
                                />
                            )}
                        </div>


                    </div>

                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Appointment Time
                        </Typography>
                        <div className="relative">
                            <input
                                type="text"
                                value={selectedTime ? format(selectedTime, 'HH:mm') : values.time}
                                onClick={() => setIsTimeOpen(!isTimeOpen)}
                                className="border p-2 rounded"
                                placeholder="Select time"
                                name="time"
                                onChange={e => setValues({ ...values, time: e.target.value })}
                                readOnly
                            />
                            {isTimeOpen && (
                                <DatePicker
                                    selected={selectedTime}
                                    onChange={handleTimeChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="HH:mm"
                                    inline
                                    className="absolute z-10 bg-white border border-gray-300 rounded shadow-md"
                                />
                            )}
                        </div>


                    </div>
                </div>

                <div className="flex gap-5 mt-7 ">
                    <div className="w-full">
                        <p className="mb-2">Appointment Reason</p>
                        <Input name="reason" value={values.reason} onChange={e => setValues({ ...values, reason: e.target.value })} />
                    </div>


                    <div className="w-full">
                        <p className="mb-2">Appointment Type</p>
                        <Input name="type" value={values.type} onChange={e => setValues({ ...values, type: e.target.value })} />
                    </div>
                    <div className="w-full">
                        <p className="mb-2">Consulting Doctor</p>
                        <Select
                            name="doctor"
                            value={values.doctor} // Set the current value
                            onChange={(value) => setValues({ ...values, doctor: value })} // Use the value directly
                        >
                            <Option value="Dr. Smith">Dr. Smith</Option>
                            <Option value="Dr. Johnson">Dr. Johnson</Option>
                            <Option value="Dr. Lee">Dr. Lee</Option>
                            <Option value="Dr. Brown">Dr. Brown</Option>
                            <Option value="Dr. Wilson">Dr. Wilson</Option>
                        </Select>
                    </div>

                </div>

                <div className="w-full mt-10">
                    <Textarea label="Notes" name="notes" value={values.notes} onChange={e => setValues({ ...values, notes: e.target.value })} />
                </div>




                <Button variant="gradient" color="green" onClick={handleOpen} type="submit">
                    <span>Submit</span>
                </Button>
            </form>

            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>

            </DialogFooter>
        </Dialog>
    </>)

}