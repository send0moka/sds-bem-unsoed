type Testimonial = {
    name: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Naufal Satria",
        text: "Pelatihan Microsoft Office ini sangat membantu! Dari yang hanya bisa dasar, kini saya menguasai banyak fitur canggih. Instruktur berpengalaman dan materi mudah dipahami. Terima kasih, kini pekerjaan saya jadi lebih efisien dan produktif!",
        image: "/assets/naufal.png",
    },
    {
        name: "Edryan Hasan",
        text: "Sangat puas dengan pelatihan ini! Fasilitas lengkap dan nyaman. Banyak trik dan tips baru yang mempercepat pekerjaan di kantor. Excel yang dulunya rumit sekarang jadi lebih mudah digunakan. Sangat direkomendasikan!",
        image: "https://media.licdn.com/dms/image/D5603AQG56um-zJ5Syw/profile-displayphoto-shrink_800_800/0/1693654231751?e=1724889600&v=beta&t=QDgJRwZfY9Xq4qNXAHXM0XYE1HSlBtk1pQE0s_E3nmg",
    },
    {
        name: "Regita Rahman",
        text: "Pelatihan luar biasa! Saya lebih percaya diri menggunakan Microsoft Office setelah sesi yang komprehensif dan praktis. Materi jelas dan banyak latihan membantu. Instruktur responsif dan sabar. Sangat bermanfaat!",
        image: "/assets/regita.png",
    },
];

export default function TestiMO() {
    return (
        <div className='space-y-4 px-6 lg:px-52'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Testimonials👩‍💻</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-sm w-fit flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-lg">
                        <p className="text-justify text-tremor-content">{testimonial.text}</p>
                        <div className="flex items-center">
                            <img src={testimonial.image} alt={`testi-${index}`} className="h-11 w-11 border object-cover rounded-full" />
                            <div className="ml-4">
                                <p className="font-medium leading-tight">{testimonial.name}</p>
                                <p className="text-tremor-content leading-tight">Best Student</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
