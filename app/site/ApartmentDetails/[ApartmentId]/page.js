import Image from "next/image";
import Link from "next/link";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import ImageSlider from "../ImgSlider";
import ImgGallery from "app/componenets/img-gallary/imgGallary";

export default function ApartmentDetails() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      <main
        style={{ paddingTop: "10px", width: "100%", background: "transparent" }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <ImgGallery />
          </div>
        </div>

        {/* Apartment Details Section */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Apartment Details</h2>
          <p className="text-gray-700">
            This luxurious apartment in Abudhabi offers stunning city views,
            modern furnishings, and top-class amenities. Featuring spacious
            rooms, a fully equipped kitchen, and a cozy living space, this is an
            ideal choice for families and professionals.
          </p>
          <ul className="mt-4 flex  gap-6 justify-between items-center mb-6">
            <ul className=" flex gap-6">
              <li>
                <i className="fa-solid fa-bed text-purple-500"></i> 4 Bedrooms
              </li>
              <li>
                <i className="fa-solid fa-bath text-purple-500"></i> 5 Bathrooms
              </li>
              <li>
                <i className="fa-solid fa-car text-purple-500"></i> Private
                Parking
              </li>
              <li>
                <i className="fa-solid fa-swimming-pool text-purple-500"></i>{" "}
                Swimming Pool
              </li>
              <li>
                <i className="fa-solid fa-wifi text-purple-500"></i> Free Wi-Fi
              </li>
            </ul>
            <li className="flex gap-4 justify-end">
              <a href="tel:+971500000000" className="">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded bg-gray-400 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:bg-green-600 transition duration-150"
                >
                  <i className="fa fa-phone"></i> Call Now
                </button>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+971500000000"
                target="_blank"
                className=""
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded bg-green-600 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:bg-green-700 transition duration-150"
                >
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="apartmentDetails"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0 15px 0",
          }}
        >
          <div className="gallery" style={{ width: "64%" }}>
            <div>
              <p style={{ fontSize: "large" }}>Griya Asri tamansari</p>
              <p style={{ margin: "20px 0 20px 10px" }}>
                <i
                  style={{ color: "gray", marginRight: "10px" }}
                  className="fa-solid fa-location-dot"
                ></i>
                Abudhabi
              </p>
              <p style={{ marginBottom: "20px" }}>
                <span style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Description:
                </span>
                This luxurious apartment is situated in the heart of Abu Dhabi,
                offering breathtaking city views, state-of-the-art facilities,
                and world-class amenities. With close proximity to shopping
                centers, parks, and entertainment hubs, it ensures an unmatched
                living experience.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    style={{ position: "relative", height: "25vh" }}
                  >
                    <Image
                      src="/background3.jpg"
                      alt="Apartment View"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="brief" style={{ width: "34%" }}>
            <div
              style={{
                width: "100%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white p-5"
            >
              <div>
                <p>Brief Information</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "large",
                    margin: "15px 0",
                  }}
                >
                  Owner: Dubi Real Estate Agency
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                className="bg-gray-200 text-color"
              >
                <div style={{ marginRight: "20px" }}>
                  <p>
                    {" "}
                    <i className="fa fa-bed"></i> 4
                  </p>
                </div>
                <div style={{ marginRight: "20px" }}>
                  <p>
                    {" "}
                    <i className="fa-solid fa-bath"></i> 5
                  </p>
                </div>
                <div>
                  <p>
                    {" "}
                    <i className="fa-solid fa-arrows-left-right-to-line"></i>{" "}
                    200,000 M
                  </p>
                </div>
              </div>

              <div
                className="rentalPeriod"
                style={{
                  display: "flex",
                  border: "2px solid #ccc",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "500px",
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                  margin: "20px 0",
                }}
              >
                <div style={{ flex: 1, padding: "20px", background: "#fff" }}>
                  <p>1-week rental:</p>
                  <strong>500,000 AED</strong>
                </div>

                <div style={{ width: "2px", background: "#ccc" }}></div>

                <div style={{ flex: 1, padding: "20px", background: "#fff" }}>
                  <p>1-Year rental:</p>
                  <strong>6,000,000 AED</strong>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <Link href="/site/Plans">
                  <button
                    type="button"
                    className="w-full rounded bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:opacity-90 transition duration-150"
                  >
                    View more plans <i className="fa fa-arrow-right ml-2"></i>
                  </button>
                </Link>

                {/* Call Button */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
