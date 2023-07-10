import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const Blogs = () => {
  return (
    <MainLayout>
      <div className="w-full flex h-full">
        <div className="max-w-6xl w-full px-4 mt-4 md:mt-10 md:ml-7">
        <form className="my-3">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Busca el blog aqui"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

          <h1 className="text-3xl font-bold mb-4 md:mb-10">Nuestros Blogs</h1>

          {/* LISTA DE BLOGS */}
          <div className="grid grid-cols-1">
            <ul className="grid grid-cols-1 [&>li]:my-5 divide-slate-700">
              <li>
                <Link className="w-full" to={`/blog/Noteworthy-technology-acquisitions-2021`}>
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      className="object-contain w-full md:w-[30%] aspect-[200px] rounded-t-lg h-full md:rounded-none md:rounded-l-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </div>{" "}
                </Link>
              </li>
              <li>
                <Link className="w-full" to={`/blog/Noteworthy-technology-acquisitions-2022`}>
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      className="object-contain w-full md:w-[30%] aspect-[200px] rounded-t-lg h-full md:rounded-none md:rounded-l-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2022
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </div>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};