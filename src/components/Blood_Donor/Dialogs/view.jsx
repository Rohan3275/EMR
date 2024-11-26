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

export function ViewDialog({ id, profile, name, DOB, email, contact, gender, age, address, blood_group,  }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open); console.log(id);

    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/7324/7324909.png" alt="" className="h-5" onClick={handleOpen} />

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>donor Details</DialogHeader>
                <DialogBody>
                    <Card className="border border-yellow-800 ">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2 flex items-center gap-5 ">
                                <img src={profile} className="w-14 h-14 rounded-full " alt="" />
                                <div className="">
                                    <div className="flex gap-5">
                                        <h3 className="text-sm">Name :</h3>
                                        <p className="text-sm text-gray-600">{name}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <h3 className="text-sm">Email :</h3>
                                        <p className="text-sm text-gray-600">{email}</p>
                                    </div>
                                </div>

                            </Typography>

                            <table className="w-full mt-7">
                                <tbody className="">
                                    <tr>
                                        <td className="text-red-300">Contact No.</td>
                                        <td>{contact}</td>
                                    </tr>
                                    <tr className="">
                                        <td className="text-red-300">DOB</td>
                                        <td>{DOB}</td>

                                    </tr>
                                    <tr>
                                        <td className="text-red-300">Gender</td>
                                        <td>{gender}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300">Address</td>
                                        <td>{address}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300">Age</td>
                                        <td>{age}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-red-300">Blood Group</td>
                                        <td>{blood_group}</td>
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