import Event from "@/components/Event";
import Event3D from "@/components/Event3D";

const events = [
    {
        title: "INAUGRAL",
        images: [
            "/assets/event1.jpeg",
            "/assets/event2.jpeg",
            "/assets/event3.jpeg",
            "/assets/event4.jpg",
            "/assets/event5.jpg",
            "/assets/event6.jpg",
            "/assets/event7.jpg",
            "/assets/event8.jpg",
        ],
        vertical: false,
    },
    {
        title: "SPORTS",
        images: [
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857905/20250205_161825_aaqren.jpg",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857886/20250205_162222_cr0gvz.jpg",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857867/20250205_162444_ofp2mm.jpg",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857826/20250205_161556_t7xdf3.jpg",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857774/WhatsApp_Image_2025-02-06_at_15.04.34_d0fa28ba_ghreel.jpg",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738857742/Screenshot_2025-02-06_210653_qydzwf.png",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738859009/Screenshot_2025-02-06_215226_q9look.png",
            "https://res.cloudinary.com/dcpugzrqm/image/upload/v1738859383/Chrysalis3-2017_ts4p48.jpg",
        ],
        vertical: true,
    },
];
const events3d = [
    {
        name: "Microsoft",
        img: "/assets/event1.jpeg",
    },
    {
        name: "Apple",
        img: "/assets/event2.jpeg",
    },
    {
        name: "Google",
        img: "/assets/event3.jpeg",
    },
    {
        name: "Facebook",
        img: "/assets/event4.jpg",
    },
    {
        name: "LinkedIn",
        img: "/assets/event5.jpg",
    },
    {
        name: "Twitter",
        img: "/assets/event6.jpg",
    },
];
export default function EventsPage() {
    return (
        <div className="bg-black">
            {events.map((event) => (
                <div className="min-h-screen" key={event.title}>
                    <Event
                        key={event.title}
                        title={event.title}
                        images={event.images}
                        vertical={event.vertical}
                    />
                </div>
            ))}
            <div className="flex flex-col-reverse justify-center items-center md:flex-row">
                <Event3D logos={events3d} />
                <h1
                    className="text-4xl mb-5 text-white md:text-6xl ml-10 lg:mr-36"
                    style={{ fontFamily: "Bodoni Moda" }}
                >
                    CULTURAL
                </h1>
            </div>
        </div>
    );
}
