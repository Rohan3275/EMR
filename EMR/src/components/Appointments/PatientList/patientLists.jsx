import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsynk, getListAsynk } from "./patientListSlice";
import { ViewDialog } from "./Dialogs/view";
import { Appointment } from "./Dialogs/appointment";

export function PatientList() {
    const TABLE_HEAD = ["Profile", "Full Name", "Gender", "Email", "Contact Number", "Appointment Type", "Appointment Date", "Actions", "Appointment"];

    const patient = useSelector(state => state.patient.patient)
    const dispatch = useDispatch()

    // Image zoom
    const [zoomedIndex, setZoomedIndex] = useState(null);
    const handleClick = (index) => {
        setZoomedIndex(zoomedIndex === index ? null : index);
    };

    //   

    useEffect(() => {
        dispatch(getListAsynk())

    }, [dispatch])

    // Search patient 
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPatients, setFilteredPatients] = useState(patient);
    useEffect(() => {
        const results = patient.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPatients(results);
    }, [searchTerm, patient])

    // 

    return (<>

        <div className="mt-32 p-4">
            <div className="relative mb-5">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 pl-12 border border-blue-400  rounded-full"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <img src="https://cdn-icons-png.freepik.com/512/861/861627.png" className="h-5 w-5" alt="search icon" />
                </span>
            </div>

            <Card className="h-full w-full overflow-scroll rounded-none">
                <table className="w-full min-w-max table-auto text-left ">
                    <thead className="font-bold">
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((item, index) => {
                            const isLast = index === patient.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            <div key={index}
                                                className={`  cursor-pointer  ${zoomedIndex === index ? 'z-10' : ''}`}
                                                onClick={() => handleClick(index)}>

                                                <img src={item.profile} className={`max-h-10 rounded-full transition-transform duration-300 ${zoomedIndex === index ? 'scale-[4] ms-20' : 'scale-100'}`} alt="" />
                                            </div>


                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.gender}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.email}
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.contact}
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.type}
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.date}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            <div className="flex gap-2">
                                                <ViewDialog id={item.id} profile={item.profile} doctor={item.doctor} time={item.time} reason={item.reason} type={item.type} name={item.name} date={item.date} notes={item.notes} email={item.email} />
                                                <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" className="h-4" onClick={() => dispatch(deleteAsynk(item.id))} alt="" /><img src="" alt="" className="h-5" />
                                            </div>
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            <div className="flex gap-2">
                                                <Appointment id={item.id} />
                                            </div>
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>


    </>)
}