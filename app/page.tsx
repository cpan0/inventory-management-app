import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}