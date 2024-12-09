import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getTestPatientListAsynk } from "./testSlice";
import { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { ViewDialog } from "../../Patient/Dialogs/view";
import { Select, Option } from "@material-tailwind/react";

export function TestPatientList() {

  const TABLE_HEAD = ["Id", "Full Name", "Gender", "Email", "Contact Number", "Appointment Type", "Appointment Date", "Actions", "Test and Prespection"];
  const testpatient = useSelector(state => state.testpatient.testpatient)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTestPatientListAsynk())
  }, [dispatch])

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(testpatient);
  useEffect(() => {
    const results = testpatient.filter(item =>
      (item.name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()) ||
      (item.id?.toLowerCase() ?? "").includes(searchTerm.toLowerCase())
  );
    setFilteredPatients(results);
  }, [searchTerm, testpatient])

  return (<>

    <div className="mt-32 p-4 ">
      {/* <Button onClick={() => { notify("") }}>Toast Message</Button> */}

      <div className="relative mb-5 flex justify-between  me-5">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" p-2 pl-12 border border-blue-400  rounded-full"
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
              const isLast = index === testpatient.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {item.id}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
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
                      className="font-normal text-purple-600"
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
                      className="font-bold"
                    >
                      {item.type}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
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
                        <ViewDialog id={item.id} profile={item.profile} DOB={item.DOB} age={item.age} gender={item.gender} contact={item.contact} name={item.name} address={item.address} blood_group={item.blood_group} email={item.email} appoitment={item.appoitment} />
                        <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" className="h-4" onClick={() => dispatch(deleteDoctorsAsynk(item.id))} alt="" /><img src="" alt="" className="h-5" />
                      </div>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >

                      <div className="w-72">
                        <Select label="Select">
                          <Option onClick={() => {
                            navigate('ptest', { state: { id: item.id, name: item.name } })
                          }} >Test</Option>
                          <Option>Preseption</Option>
                        </Select>
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