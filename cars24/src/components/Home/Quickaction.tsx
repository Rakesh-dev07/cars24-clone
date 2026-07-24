import Link from "next/link";
import {
  Search,
  Car,
  DollarSign,
  ClipboardCheck,
  History,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Buy Used Car",
    description: "Explore verified used cars",
    icon: Search,
    href: "/buy-car",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Sell Your Car",
    description: "Get the best resale value",
    icon: Car,
    href: "/sell-car",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Car Finance",
    description: "Easy EMI & instant approval",
    icon: DollarSign,
    href: "/Upcoming/finance",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Book Test Drive",
    description: "Drive before you decide",
    icon: ClipboardCheck,
    href: "/Upcoming/test-drive",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Car Inspection",
    description: "200+ Point Quality Check",
    icon: CheckCircle,
    href: "/Upcoming/car-inspection",
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Vehicle History",
    description: "Check ownership & records",
    icon: History,
    href: "/Upcoming/vehicle-history",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export default function QuickActions() {
  return (
    <section className="relative z-20 px-4 sm:px-6 -mt-4 md:mt-2 lg:mt-8 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-gray-50"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${action.color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {action.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6 min-h-[48px]">
                    {action.description}
                  </p>

                  <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}