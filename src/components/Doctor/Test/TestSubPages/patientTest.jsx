import { useLocation } from "react-router-dom";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";

export function PatientTest() {
    const location = useLocation();
    const { id, name } = location.state || {};

    const [selectedTests, setSelectedTests] = useState([]);
    const [message, setMessage] = useState('');
    const [values, setValues] = useState({
        id: id,
        name: name,
        test: "",
        tdescription: "",
        reportheading: "",

    });

    const [labid, setLabid] = useState([])

    useEffect(() => {
        // Get the existing test from the backend when the component loads
        axios.get("http://localhost:3000/appointment/" + id)
            .then(res => {
                // If there's an existing test data, set it

                setValues({ ...values, test: res.data.test, tdescription: res.data.tdescription, reportheading: res.data.reportheading });
            })
            .catch(err => console.log(err));

    }, [id]);

    useEffect(() => {
        console.log(labid)
        // Get the existing test from the backend when the component loads
        axios.get("http://localhost:3000/test")
            .then(res => {

                const ids = res.data.map(item => item.id);
                setLabid(ids)
                console.log(ids)


                // setValues({ ...values, test: res.data.test, tdescription: res.data.tdescription, reportheading: res.data.reportheading });
            })
            .catch(err => console.log(err));



    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(values.test);
        window.location.reload(); // Logs { test: values.test }
        axios.patch("http://localhost:3000/appointment/" + id, values)
            .then(res => {
                alert("Test Submitted");
               
            }).catch(err => console.log(err));


        if (labid != id) {
            axios.post("http://localhost:3000/test", values)
                .then(res => {
                    
                }).catch(err => console.log(err));
            console.log("id is not present")
        } else {
            axios.patch("http://localhost:3000/test/" + id, values)
                .then(res => {
                    
                }).catch(err => console.log(err));
            console.log("id is present")
        }

      

    };

    // Handler for Select option change
    const handleSelectChange = (value) => {
        console.log('Selected Tests:', value);

        // Ensure value is always an array, even if it's a single selection
        const selectedValues = Array.isArray(value) ? value : [value];

        // Update selected tests
        setSelectedTests(selectedValues);
    };

    // Handler for the "Add test" button click
    const handleAddTestClick = () => {
        if (selectedTests.length === 0) {
            return;
        }

        // Format the selected tests as a string, separated by a newline
        const formattedMessage = selectedTests
            .map((test) => ` ${test}`)
            .join('\n');

        // Append selected tests to the existing message
        const updatedMessage = message ? `${message}\n${formattedMessage}` : formattedMessage;

        // Update both message and the test field in the values state
        setMessage(updatedMessage);
        setValues({ ...values, test: updatedMessage });

        // Clear the selected tests
        setSelectedTests([]);
    };

    return (
        <div className="mt-28 p-5">

            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="flex gap-2">
                    <Input label="Id" value={id} disabled className="text-red-700" />
                    <Input label="Name" value={name} disabled />

                    <Input label="Name" value={labid} disabled />
                </div>

                <div className="grid grid-flow-row grid-cols-2 gap-5 mt-5">
                    <Input label="Test Description" name="tdescription" value={values.tdescription} onChange={e => setValues({ ...values, tdescription: e.target.value })} />

                    <Input label="Report Heading" type="text" value={values.reportheading} name="reportheading" onChange={e => setValues({ ...values, reportheading: e.target.value })} />
                    <Input label="Charges" type="text" />
                    <Input label="Carry Out " type="text" />
                </div>
                <div className="">
                    <div className="mt-5 w-[50%] flex gap-5  ">
                        <Select
                            label="Select Test's"
                            multiple
                            value={selectedTests} // The value is now an array of selected items
                            onChange={handleSelectChange} // Directly pass selected values
                        >
                            <Option value="Blood tests">Blood tests</Option>
                            <Option value="Colonoscopy">Colonoscopy</Option>
                            <Option value="CT scan">CT scan</Option>
                            <Option value="Blood glucose test">Blood glucose test</Option>
                            <Option value="Material Tailwind Svelte">Material Tailwind Svelte</Option>
                        </Select>
                        <Button onClick={handleAddTestClick} size="sm" className="w-36">Add test</Button>
                    </div>

                    <div className="w-full mt-5">
                        <Textarea
                            label="Test's"
                            value={values.test} // The textarea value is bound to the message state
                            onChange={(e) => {
                                setMessage(e.target.value); // When the user types, the state is updated
                                setValues({ ...values, test: e.target.value }); // Update values.test
                            }}
                            rows={4}
                            className="resize-none" // Prevent resizing
                        />
                    </div>

                </div>



                <Button variant="gradient" color="green" type="submit">
                    <span>Submit</span>
                </Button>
            </form>
        </div>
    );
}
