import Image from "next/image";

const teamMembers = [
    { name: "Sanithu G.", image: "/images/member1.jpeg", delay: "" },
    { name: "Malindu A.", image: "/images/member2.jpeg", delay: "delay-100" },
    { name: "Amsanaa S.", image: "/images/member3.jpeg", delay: "delay-200" },
    { name: "Aneeshvara S.", image: "/images/member4.2.png", delay: "delay-300" },
    { name: "Adheeb A.", image: "/images/member5.jpeg", delay: "delay-300" },
];

export default function TeamSection() {
    return (
        <section
            id="team"
            className="py-24 bg-primary-light/30 border-t border-white/5"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-on-scroll fade-in-up">
                    <span className="text-teal text-sm font-bold tracking-widest uppercase mb-2 block">
                        The Minds Behind Nyaya
                    </span>
                    <h2 className="text-4xl font-serif font-bold">Meet Our Team</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className={`group relative w-64 animate-on-scroll fade-in-up ${member.delay}`}
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-4 relative ring-1 ring-white/10 group-hover:ring-teal/50 transition-all">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="256px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white font-bold text-lg">{member.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
