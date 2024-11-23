import img from '../../assets/images/logo-2.png'
export function Footer() {
    return (<>

        <div className="bg-black">
            <div className="flex md:flex-row flex-col justify-between ps-7 pt-7 pe-7 gap-10">
                <div className="flex items-center text-white gap-2">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/9220/9220651.png" className="h-7" alt="" />
                    </div>
                    <div>
                        <p className="text-sm">Find Us</p>
                        <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sunt rem eos voluptate? Quod, adipisci.</p>
                    </div>
                </div>

                <div className="flex items-center text-white gap-3">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747204.png" className="h-7" alt="" />
                    </div>
                    <div>
                        <p className="text-sm">Call us</p>
                        <p className="text-xs text-gray-500">+ 915875225488</p>
                    </div>
                </div>
                <div className="flex items-center text-white gap-2">
                    <div>
                        <img src="https://cdn-icons-png.freepik.com/512/8863/8863236.png" className="h-7" alt="" />
                    </div>
                    <div>
                        <p className="text-sm">Mail Us</p>
                        <p className="text-xs text-gray-500">contact@EMR.com</p>
                    </div>
                </div>

            </div>
            <hr className="mt-10" />
            <div className="text-white md:flex grid grid-rows-1 grid-cols-2 gap-5 justify-between p-10">
                <div className="space-y-3">
                    <img src={img} className='w-36 border border-blue-800' alt="" />
                    <p className="text-sm text-gray-500 md:text-justify text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ad animi quos eum sequi fugit, dolorum repudiandae voluptatem fuga?</p>
                    <div className="flex gap-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJz1MjjxjP7-m7Ija3C4teDldt-3tXd4vmg&s" alt="" className="h-7" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS1ascB5xyDklQZcMdp4ACmjwHDwOA_KGag&s" alt="" className="h-7" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTje_7Ea8yKWATa5xZKbBZ0YM_OcQMgamKow&s" alt="" className="h-7" /><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" className="h-7" alt="" /><img src="https://cdn-icons-png.flaticon.com/512/2496/2496113.png" alt="" className="h-7" />
                    </div>
                </div>

                <div className="text-white">
                    <div>
                        <p className='text-sm'>Link</p>
                        <hr className="bg-blue-600 h-1 border-none" />
                    </div>



                </div>

                <div>
                    <div>
                        <p className='text-sm'>Compare with</p>
                        <hr className="bg-blue-600 h-1 border-none" />
                    </div>



                </div>

                <div>
                    <div >
                        <p className='text-sm'>City Wise Solutions</p>
                        <hr className="bg-blue-600 h-1 border-none" />
                    </div>

                </div>
                <div>
                    <div>
                        <p className='text-sm'>Extra Links</p>
                        <hr className="bg-blue-600 h-1 border-none" />
                    </div>



                </div>
            </div>
            <hr className="" />
            <div className="text-white flex justify-between ps-10 pe-10 mt-5">
                <div className="flex gap-10 text-sm text-gray-500">
                    <p>Privacy</p>
                    <p>Terms & Condition</p>
                </div>
                <div className="text-sm text-gray-500">
                    @ All right reserved
                </div>
            </div>
        </div>
    </>)
}