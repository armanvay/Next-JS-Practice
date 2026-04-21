import Image from "next/image";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <section className="py-16 px-5 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Next.js App 
        </h1>
        <p className="text-gray-500 mb-10">
          I am learning Next.js and building modern web applications.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaCode className="text-4xl mx-auto text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Clean Code</h2>
            <p className="text-gray-500">
              Writing clean and maintainable code using modern tools.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-4xl mx-auto text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-500">
              Building responsive and fast web applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <FaRocket className="text-4xl mx-auto text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Fast Performance</h2>
            <p className="text-gray-500">
              Optimized apps with great performance and UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
