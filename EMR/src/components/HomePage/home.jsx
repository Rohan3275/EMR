import {
    Button, Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'
import React from "react";
import { Card } from './Cards/card'
import { Form } from './Form/form'
export function Home() {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (<>
        <div>
            <div className="relative">
                <img src="https://cloudleapsolutions.com/assets/img/blog/blog-14938-1560320250.jpg" className="w-full md:h-[650px] h-[480px]" alt="" />

                <div className="absolute top-0 bg-black w-full h-full opacity-15">
                </div>

                <div className="absolute top-0  text-white md:p-20 p-10 space-y-2 md:w-[50%]">
                    <p className='md:text-5xl pt-serif-bold-italic md:mt-28 mt-16 text-4xl'>Empower Patients,</p>
                    <p className='md:text-5xl text-4xl pt-serif-bold-italic'>Simplyfy Records</p>
                    <p className='pt-serif-bold-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laudantium quas, id numquam eos neque fugiat accusantium atque doloremque quibusdam?</p>
                    <div className='mt-10'>
                        <Button color='orange'  >Explore Now</Button>
                    </div>

                </div>
            </div>

            {/* Boost Efficiency With Smart EMR */}

            <div className='mt-5'>
                <p className='text-center font-bold text-2xl'>Boost Efficiency With Smart <span className='text-blue-300'>EMR</span></p>
                <div className='flex md:flex-row flex-col gap-5 justify-around mt-5 p-5 '>
                    <div className='space-y-1 shadow-xl p-4 border-2 border-gray-200 rounded-xl'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CZBLCQ8b5ZU3GvSlJY6QXqwr36bfRTWVkw&s" alt="" className='m-auto rounded-xl w-full' />
                        <p className='text-xl pt-serif-bold-italic text-center'>Comparensive Patient Records</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='space-y-1 shadow-xl p-4 border-2 border-gray-200 rounded-xl'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CZBLCQ8b5ZU3GvSlJY6QXqwr36bfRTWVkw&s" alt="" className='m-auto rounded-xl w-full' />
                        <p className='text-xl pt-serif-bold-italic text-center'>Real-Time Data Access</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='space-y-1 shadow-xl p-4 border-2 border-gray-200 rounded-xl'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CZBLCQ8b5ZU3GvSlJY6QXqwr36bfRTWVkw&s" alt="" className='m-auto rounded-xl w-full' />
                        <p className='text-xl pt-serif-bold-italic text-center'>Customizable WorkFlow Solutions</p>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>

            {/* Cards */}
            <div className='mt-10'>
                <p className='text-center font-bold text-2xl'>Unlock The Power Of <span className='text-blue-300'>EMR</span>  Functionalies </p>
                <div>
                    <Card />
                </div>
            </div>

            {/* Examine The Benifits Of */}
            <div className='mt-5'>
                <p className='text-center font-bold text-2xl p-2'>Examine The Benifits Of <span className='text-blue-300'>EMR Software</span> </p>

                <div className='' >
                    <div className='flex md:flex-row flex-col gap-5 justify-around mt-5 p-5 '>
                        <div className='space-y-2  shadow-xl p-4 border rounded-xl '>
                            <img src="https://cdn-icons-png.freepik.com/512/4807/4807695.png" alt="" className='m-auto rounded-xl w-48 ' />
                            <p className='text-xl pt-serif-bold-italic text-center'>Better Health Management</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='space-y-2  shadow-xl p-4 border rounded-xl'>
                            <img src="https://cdn-icons-png.freepik.com/512/4441/4441162.png" alt="" className='m-auto w-48 rounded-xl' />
                            <p className='text-xl pt-serif-bold-italic text-center'>Health Survey Data</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className='space-y-2 shadow-xl p-4 border rounded-xl'>
                            <img src="https://cdn-icons-png.flaticon.com/512/3703/3703300.png" alt="" className='m-auto rounded-xl w-48' />
                            <p className='text-xl pt-serif-bold-italic text-center'>Sharing Clinical Information </p>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Form */}
            <div className='mt-10'>
                <Form />
            </div>
            {/* Frequently Asked Quetions */}
            <div className=' m-5 md:ms-52 md:me-52 mt-10 bg-gray-200 border border-gray-200 rounded-xl'>
                <p className='text-center font-bold text-2xl mt-10'>Frequently Asked Quetions</p>

                <div className='p-5 md:ps-72 md:pe-72'>
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(1)}>What is the importance of EMR Software ?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(2)}>
                            What is tpo-tier EMR Software for doctors ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(3)}>
                            What are the considered factors while using choosing hospital electronics medical records software ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 4}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(4)}>
                            What is the leading electronics medical record software for best medical practices ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 5}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(5)}>
                            What are the vital functions to look for the best EMR sofware in India ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(6)}>
                            What are the Key Benifits of patients helath portal ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 7}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(7)}>
                            Does healthray's EMR Software provide the facility of capturing radiology images ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 8}>
                        <AccordionHeader className='text-[16px] font-normal' export onClick={() => handleOpen(8)}>
                            How does EMR Software assist in tracking medical treatment ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 9}>
                        <AccordionHeader className='text-[16px] font-normal' onClick={() => handleOpen(9)}>
                            Does EMR Software Support Managing healthcare revenue ?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>

    </>)
}