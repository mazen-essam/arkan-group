import Image from "next/image";
import Brands from "./Brands";
import Rent from "./Rent";
// import ScrollToUp from "./ScrollToUp";
import Service from "./Service";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Pathways from "./Path";
import BannerContainer from "app/componenets/banner/BannerContainer";
import NewLunch from "app/componenets/newLunches/NewLunch";
import SellHome from "app/componenets/sellcardshome/SellHome";

export default function Home() {
  return (
    <>
      <section>
        <main className=" w-full  relative bg-transparent mb-44 ">
          <div className="max-h-[500px] w-full h-screen relative flex flex-col items-center justify-center">
            <div className="relative w-full h-screen ">
              <Image
                src="/background3.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
            </div>

            <div className="absolute bottom-[-110px] flex flex-col items-center w-full text-base container">
              <p className="text-5xl text-white w-full  mb-12">
                Let's find a villa That's Perfect for you
              </p>
              <div className="inputs p-8 bg-white rounded-lg w-full shadow-xl">
                <div className="input">
                  <label className="text-lg font-bold" htmlFor="first-input">
                    Looking for
                  </label>
                  <input
                    type="email"
                    className="mt-4 peer block min-h-[auto] bg-transparent px-2 py-3 leading-[1.6] dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary w-full border border-gray-300 rounded-lg"
                    id="first-input"
                    placeholder="What are you look for?"
                  />
                </div>
                <div className="justify-between items-center mt-16 grid grid-cols-4">
                  <div className="input col-span-1">
                    <label className="text-lg font-bold" htmlFor="first-input">
                      Type
                    </label>
                    <input
                      type="email"
                      className="mt-3 lg:w-3/4 peer block min-h-[auto] bg-transparent px-2 py-3 leading-[1.6] dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border border-gray-300 rounded-lg"
                      id="first-input"
                      placeholder="What are you look for?"
                    />
                  </div>
                  <div className="input col-span-1">
                    <label className="text-lg font-bold" htmlFor="first-input">
                      Price
                    </label>
                    <input
                      type="email"
                      className="mt-3 lg:w-3/4 peer block min-h-[auto] bg-transparent px-2 py-3 leading-[1.6] dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border border-gray-300 rounded-lg"
                      id="first-input"
                      placeholder="What are you look for?"
                    />
                  </div>
                  <div className="input col-span-1">
                    <label className="text-lg font-bold" htmlFor="first-input">
                      Location
                    </label>
                    <input
                      type="email"
                      className="mt-3 lg:w-3/4 peer block min-h-[auto] bg-transparent px-2 py-3 leading-[1.6] dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border border-gray-300 rounded-lg"
                      id="first-input"
                      placeholder="What are you look for?"
                    />
                  </div>
                  <div className="input col-span-1 text-end mt-6">
                    <button className="searchButton rounded-md  font-medium text-white px-12 py-3 bg-gradient-to-b from-[rgba(75,2,75,0.655)] to-[rgba(213,56,213,0.852)] text-lg ">
                      <i className="fa-solid fa-magnifying-glass mr-5 "></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Brands />
        <div className="container mx-auto">
          <div className="sc-ac835cae-0 RfLWL">
            <h1 className="font-bold text-2xl mb-6">
              What Are You Looking For ?
            </h1>
            <Pathways />
          </div>
        </div>
        <Rent />
        {/* <BannerContainer /> */}
        <SellHome />
        <NewLunch />
        <Service />
      </section>
    </>
  );
}
