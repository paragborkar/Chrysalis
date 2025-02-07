import { Marquee } from "@/components/ui/marquee";

export default function Event3D({
    logos,
}: {
    logos: { name: string; img: string }[];
}) {
    return (
        <div className="relative h-[600px] flex w-4/5 mx-auto mb-32 flex-col items-center justify-center gap-4 overflow-hidden px-20 md:shadow-xl">
            <div className="flex flex-row gap-4 [perspective:300px]">
                <Marquee
                    className="h-full w-[200px] justify-center overflow-hidden [--duration:60s] [--gap:1rem] md:w-3/4"
                    vertical
                    style={{
                        transform:
                            "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
                    }}
                >
                    {logos.map((data, idx) => (
                        <img
                            key={idx}
                            src={data.img}
                            alt={data.name}
                            className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300  hover:ring-1 hover:ring-neutral-300"
                        />
                    ))}
                </Marquee>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-gray-950 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-950 dark:from-background"></div>
        </div>
    );
}
