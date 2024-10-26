export function Card() {

    const cardData = [
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/5432/5432747.png",
            name: "EMR Dashboard",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/7775/7775488.png",
            name: "Indivisualized Template",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        }, {
            imgae: "https://cdn-icons-png.flaticon.com/512/2449/2449899.png",
            name: "Patient Health Portal",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        }, {
            imgae: "https://cdn-icons-png.freepik.com/512/5560/5560159.png",
            name: "Degital Presciption",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/1047/1047670.png",
            name: "Real-Time Medical Reports",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/11743/11743213.png",
            name: "Cross-System interoperability",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/610/610096.png",
            name: "Cloud-Based EMR",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
            name: "Seamless Medication Integration",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.freepik.com/512/4727/4727558.png",
            name: "Secure Virtual Monitoring ",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/5996/5996246.png",
            name: "Digital Medical Access",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/9340/9340061.png",
            name: "Population Health Management",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/256/3281/3281901.png",
            name: "Appointment Management",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/4005/4005700.png",
            name: "Pharmacy Integration",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/256/11331/11331591.png",
            name: "Automated Operational Process",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87YcyOTlkZqPU6S4IhGPD8qDfTkk99S48yg&s",
            name: "Virtual Health Monitoring",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/8238/8238757.png",
            name: "Laboratory Integration",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },

        {
            imgae: "https://cdn-icons-png.flaticon.com/512/13330/13330989.png",
            name: "AI Chatbots",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },

        {
            imgae: "https://cdn-icons-png.flaticon.com/512/825/825590.png",
            name: "E- Tests Reports",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.freepik.com/512/9599/9599636.png",
            name: "Radiology Picture Acqisition",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        },
        {
            imgae: "https://cdn-icons-png.flaticon.com/512/214/214687.png",
            name: "Compiling Large Hospital Data",
            discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda numquam eaque placeat, aliquid laudantium?"
        }
    ]
    return (<>
        <div className="grid grid-rows-1 md:grid-cols-4  gap-6 p-10 cursor-pointer ">
            {
                cardData.map((item) => (
                    <div className="space-y-2 bg-gray-200 p-5 rounded-xl shadow-xl transition duration-300 ease-in-out hover:scale-105 border border-red-100">
                        <img src={item.imgae} alt="" className="h-20 m-auto" />
                        <p className="text-center font-bold">{item.name}</p>
                        <p className="text-center text-sm text-gray-700">{item.discription}</p>
                    </div>
                ))
            }
        </div>

    </>)
}