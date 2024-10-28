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

export function ViewDialog({ id, profile, name, DOB, email, contact, gender, age, address, blood_group,appoitment }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open); console.log(id);

    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/7324/7324909.png" alt="" className="h-5" onClick={handleOpen} />

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Patient Details</DialogHeader>
                <DialogBody>
                    <Card className="border border-yellow-800 ">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2 flex items-center gap-3 ">
                                <img src={profile} className="w-14 h-14 rounded-full " alt="" />
                                <div className="">
                                    <div className="flex gap-4">

                                        <p className="text-sm">{name}</p>
                                    </div>
                                    <div className="flex gap-5">

                                        <p className="text-sm text-gray-600">{email}</p>
                                    </div>
                                </div>

                            </Typography>

                            <table className="w-full mt-7">
                                <tbody className="">
                                    <tr>
                                        <td className="text-red-300 font-bold">Contact No.</td>
                                        <td className="font-bold">{contact}</td>
                                    </tr>
                                    <tr className="">
                                        <td className="text-red-300 font-bold">DOB</td>
                                        <td className="font-bold">{DOB}</td>

                                    </tr>
                                    <tr>
                                        <td className="text-red-300 font-bold">Gender</td>
                                        <td className="font-bold">{gender}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300 font-bold">Address</td>
                                        <td className="font-bold">{address}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300 font-bold">Age</td>
                                        <td className="font-bold">{age}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300 font-bold">Blood Group</td>
                                        <td className="font-bold">{blood_group}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-red-300 font-bold">Appointment Status</td>
                                        <td className="font-bold">{appoitment}</td>
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