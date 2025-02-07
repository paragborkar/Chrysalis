import Event from "@/components/Event";

const events = [
    {
        title: "Inaugral",
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
        title: "Sports",
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
        vertical: true,
    },
    // {
    //     title: "Sports",
    // },
    // {
    //     title: "Traditional",
    // },
    // {
    //     title: "Cultural",
    // },
];
export default function Events() {
    return events.map((event) => (
        <div key={event.title}>
            <Event
                key={event.title}
                title={event.title}
                images={event.images}
                vertical={event.vertical}
            />
        </div>
    ));
}
