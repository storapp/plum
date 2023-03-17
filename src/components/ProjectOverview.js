import { useState } from "react";
import { useLocation } from "react-router";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const product = {
  name: "We follow plumbing best practices and industry trends.",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/project-page-02-secondary-project-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/project-page-02-tertiary-project-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/project-page-02-tertiary-project-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/project-page-02-featured-project-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description: `Plumbing work in a new building construction site involves installing, repairing, and maintaining the pipes, valves, and fixtures that supply water, gas, and waste removal systems in the building.

  The following are some common tasks performed in plumbing work on a new building site:`,
  highlights: [
    "Rough-in plumbing",
    "Fixture installation",
    "Water supply and distribution",
    "Waste removal and venting",
  ],
  details: `It is important for plumbing work to be done by licensed and experienced professionals to ensure that the plumbing systems are installed and maintained properly. Additionally, all our plumbing work comply with local building codes and regulations.`,
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const { state } = useLocation();
  const { project } = state;
  console.log(project);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="pt-6">
          <div
            className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3
          lg:gap-x-8 lg:px-8"
          >
            <div className="md:aspect-w-3 my-4 md:my-0 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
              <img
                src={project.overview[0]}
                alt={project.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className=" my-4 md:my-0 md:aspect-w-3 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                <img
                  src={project.overview[1]}
                  alt={project.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className=" my-4 md:my-0 md:aspect-w-3 md:aspect-h-2 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
                <img
                  src={project.overview[2]}
                  alt={project.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div
              className=" my-4 md:my-0 aspect-w-4 aspect-h-5 sm:overflow-hidden
           sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4"
            >
              <img
                src={project.overview[3]}
                alt={project.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Pr info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">project information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                Duration:{" "}
              </p>

              {/* status */}
              <div className="mt-6">
                <h3 className="sr-only">Project Status</h3>
                <div className="flex items-center">
                  <div className="flex items-center">Work Status:</div>
                  <p className="ml-3 text-sm font-medium text-indigo-600">
                    Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
