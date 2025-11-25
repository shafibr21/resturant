import { Search } from 'lucide-react'


const Navbar = () => {
  return (
      <div className="relative flex items-center justify-between px-8 pt-8">
        <h1
          className="text-white font-poppins text-4xl font-bold z-10 hidden md:block"
          style={{
            width: "211px",
            height: "48px",
            top: "51px",
            left: "65px",
          }}
        >
          RESTAURANT
        </h1>
        <div
          className="flex items-center bg-white rounded-full px-6 py-3 w-96 shadow-lg"
          style={{
            width: "821px",
            height: "61px",
            top: "50px",
            left: "1039px",
          }}
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent outline-none text-gray-900 w-full placeholder-gray-400"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          />
        </div>
      </div>
  )
}

export default Navbar