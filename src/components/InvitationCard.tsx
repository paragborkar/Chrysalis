import { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import gsap from "gsap";
import { useIsPhone } from "@/hooks/isPhone";

const InvitationCard = () => {
    const envelopeRef = useRef(null);
    const letterRef = useRef(null);
    const topRef = useRef(null);
    const isMobileView = useIsPhone();
    const [played, setPlayed] = useState(false); // To track if the animation has already played

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !played) {
                    // Animation logic (runs only once)
                    const tl = gsap.timeline({
                        onComplete: () => {
                            // Ensure the letter remains scaled after animation
                            gsap.set(letterRef.current, {
                                scale: isMobileView ? 1.5 : 2.5,
                            });
                        },
                    });

                    tl.to(topRef.current, {
                        rotationX: 180,
                        transformOrigin: "top",
                        duration: 0.5,
                        zIndex: 2,
                    })
                        .to(".top", {
                            zIndex: 0,
                        })
                        .to(
                            letterRef.current,
                            {
                                y: "-100%",
                                zIndex: 2,
                                duration: 1,
                            },
                            "card"
                        )
                        .to(
                            ".card",
                            {
                                // Optional shadow or styling changes
                            },
                            "card"
                        )
                        .to(".letter", {
                            zIndex: 8,
                        })
                        .to(
                            ".letter",
                            {
                                y: "0%",
                                duration: 2.5,
                                zIndex: 6,
                                scale: isMobileView ? 1.2 : 1.4,
                            },
                            "a"
                        );

                    tl.to(".letter", {
                        rotateY: 180,
                        duration: 2,
                        scale: isMobileView ? 1.5 : 2.5,
                    });

                    setPlayed(true); // Mark the animation as played
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5, // Adjust as needed for when the animation should start
        });

        if (envelopeRef.current) {
            observer.observe(envelopeRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [played, isMobileView]); // Dependency on "played" and "isMobileView"

    return (
        <div
            className={`flex flex-col items-center h-[60vh] justify-center mt-52 mt-[25vh]`}
        >
            <div
                className={`${styles.envelope} ${
                    isMobileView ? "scale-[0.8]" : "md:scale-[1.2] scale-[0.9]"
                } flex items-center justify-center`}
                ref={envelopeRef}
            >
                <div className={`${styles.shadow}`}></div>
                <div className={`bg-slate-600 ${styles.back}`}></div>

                <div className={`letter ${styles.letter}`} ref={letterRef}>
                    {/* Backside of the letter */}
                    <div
                        className={`${styles.card_back} card-back absolute w-full h-full transform rotateY-180 backface-hidden z-[4]`}
                    >
                        <img
                            src="/assets/Invitation.svg"
                            alt="Back of invitation"
                            width={isMobileView ? "300px" : "800px"}
                            height={isMobileView ? "300px" : "800px"}
                        />
                    </div>

                    {/* Front side of the letter */}
                    <div
                        className={`${styles.card_front} absolute w-full backface-hidden z-[3] bg-black p-2 rounded-xl`}
                    >
                        <img
                            src="/assets/invitation.jpg"
                            alt="Front of invitation"
                            width={isMobileView ? "300px" : "800px"}
                            height={isMobileView ? "300px" : "900px"}
                        />
                    </div>
                </div>

                <div className={`${styles.front}`}>
                    <svg
                        width={"348"}
                        height={"248"}
                        viewBox="0 0 348 248"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                id="gradient1"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stop-color="#336699" />
                                <stop offset="100%" stop-color="#66ccff" />
                            </linearGradient>
                        </defs>
                        <g clipPath="url(#clip0_2_3)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.21848 1.34141C0.864867 2.44152 0 4.11976 0 5.99999V242C0 245.314 2.68628 248 5.99999 248H357C360.314 248 363 245.314 363 242V6C363 2.68629 360.314 0 357 0H348L278 39L249.5 104H99.5L64.5 39L2.21848 1.34141Z"
                                fill="url(#gradient1)"
                            />
                            <path
                                d="M100 103C45.7231 163.046 30.1436 180.086 29.1385 181.1L2 245"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M249 104C303.277 164.046 318.856 181.086 319.862 182.1L347 246"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_3">
                                <rect
                                    width="348"
                                    height="248"
                                    rx="5"
                                    fill="rgb(102, 102, 153)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={`top ${styles.top}`} ref={topRef}></div>
            </div>
        </div>
    );
};

export default InvitationCard;
