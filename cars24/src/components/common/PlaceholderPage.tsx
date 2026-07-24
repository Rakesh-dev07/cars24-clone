import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
}

export default function PlaceholderPage({
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-200 p-10 text-center">

        <div className="text-6xl mb-6">
          {icon}
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          {description}
        </p>

        <div className="inline-flex items-center gap-2 mt-8 px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-medium">
          <Wrench className="w-4 h-4" />
          Coming Soon
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/buy-car"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 text-black px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
            Browse Used Cars
          </Link>

        </div>
      </div>
    </main>
  );
}