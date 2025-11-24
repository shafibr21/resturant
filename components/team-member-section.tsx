"use client"

import Image from "next/image"

const teamMembers = [
  {
    name: "Mark Henry",
    role: "Owner",
    image: "/member-1.jpg",
  },
  {
    name: "Lucky Helen",
    role: "Chef",
    image: "/member-1.jpg",
  },
  {
    name: "Moon Henry",
    role: "Founder",
    image: "/member-1.jpg",
  },
  {
    name: "Tom Morrow",
    role: "Specialist",
    image: "/member-1.jpg",
  },
]

export default function TeamMemberSection() {
  return (
    <section className="relative w-full py-24 bg-white">
      {/* Red background with texture overlay */}
      <div className="absolute inset-0 bg-[url('/Bg.png')] h-1/2" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">Team Member</h2>
          <p className="text-white text-center max-w-2xl mx-auto font-poppins text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col">
              {/* Image Container */}
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>

              {/* Member Info */}
              <div className="bg-white rounded-lg p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 font-poppins mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm font-poppins">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
