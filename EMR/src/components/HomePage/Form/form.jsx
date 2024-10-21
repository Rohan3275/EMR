import { Button, Input, Textarea } from "@material-tailwind/react";

export function Form() {
    return (<>
        <div className="border border-gray-200 rounded-xl md:p-10 p-5 m-5 md:ms-52 md:me-52 bg-gray-200 shadow-xl">
            <p className="font-bold text-2xl text-center">Get in Touch for Solutions</p>
            <p className="text-center text-sm text-gray-600 mt-2">Contact EMR in Pune to enhance your medical record system </p>
            <div className="md:p-7 p-5 md:ps-72 md:pe-72 space-y-10 ">
                <div className="md:flex  gap-8 md:space-y-0 space-y-4">
                    <Input label="Name" type="text" />
                    <Input label="Email" type="email" />

                </div>
                <div>
                    <Textarea label="Message" />
                    <div className="flex justify-center mt-7">
                        <Button color="orange" className="">Submit</Button>
                    </div>

                </div>
            </div>


        </div>

    </>)
}