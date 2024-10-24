import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export function ViewDialog({ id, profile, name, doctor, type, reason, time, date, notes, email }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open); console.log(id);

    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/7324/7324909.png" alt="" className="h-5" onClick={handleOpen} />

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Appointment Details</DialogHeader>
                <DialogBody>
                    <Card className="border border-yellow-800 ">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2 flex items-center  gap-2 ">
                                <img src={profile} className="h-12 rounded-full " alt="" />
                                <div className="">
                                    <p className="text-sm">{name}</p>
                                    <p className="text-xs text-gray-500">{email}</p>
                                </div>

                            </Typography>

                            <table className="w-full mt-7   ">
                                <tbody className="">
                                    <tr className="">
                                        <td>Consulting Doctor</td>
                                        <td>{doctor}</td>

                                    </tr>
                                    <tr>
                                        <td>Appointment Type</td>
                                        <td>{type}</td>
                                    </tr>
                                    <tr>
                                        <td>Reason</td>
                                        <td>{reason}</td>
                                    </tr>

                                    <tr>
                                        <td>Appointment Date</td>
                                        <td>{date}</td>
                                    </tr>

                                    <tr>
                                        <td>Appointment Time </td>
                                        <td>{time}</td>
                                    </tr>

                                    <tr>
                                        <td>Doctor Notes</td>
                                        <td>{notes}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <Typography>
                                <div className="flex justify-around">
                                    <p>Doctor</p>
                                    <p>{doctor}</p>
                                </div>

                                <div className="flex justify-around ">
                                    <p className="">Appoitment Type</p>
                                    <p>{type}</p>
                                </div>

                                <div className="flex justify-around ">
                                    <p className="">Reason</p>
                                    <p>{reason}</p>
                                </div>

                                <div className="flex justify-around ">
                                    <p className="">Date</p>
                                    <p>{date}</p>
                                </div>
                                <div className="flex justify-around ">
                                    <p className="">Time</p>
                                    <p>{time}</p>
                                </div>

                                <div className="flex justify-around ">
                                    <p className="">Notes</p>
                                    <p>{notes}</p>
                                </div>
                            </Typography> */}
                        </CardBody>

                    </Card>
                </DialogBody>
                <DialogFooter>

                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Done</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}