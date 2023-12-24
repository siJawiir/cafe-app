import React, { useEffect, useState } from "react";
import companyLogo from "../assets/company-logo.png";
import backgroundImage from "../assets/motif.png";
import { BsQrCode, BsX } from "react-icons/bs";
import CarouselImage from "../components/image-carousel";
import homeServices from "../services/homeServices";
import Loading from "../components/loading";
import formatter from "../utils/formatter";

const HomePage: React.FC = () => {
  const [homeData, setHomeData] = useState<any | null>(null);
  const [scanBarcode, setScanBarcode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await homeServices.getHomeData();
      if (response) {
        setHomeData(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScanBarcode = () => {
    setScanBarcode(!scanBarcode);
  };

  return (
    <div>
      {homeData && (
        <div className="overflow-hidden">
          <div className="mb-4">
            <img src={companyLogo} alt="Company Logo" className="w-32 h-16" />
          </div>
          <div
            className="p-2"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="bg-white p-4 rounded shadow-md m-4 md:w-1/2 lg:w-1/3">
              <h2 className="text-xl">{homeData.greeting}</h2>
              <h2 className="text-xl font-bold mb-2">{homeData.name}</h2>
              <div className="flex mt-2 items-center">
                <button
                  onClick={handleScanBarcode}
                  className="bg-white text-white p-2 rounded-full focus:outline-none hover:bg-gray-100 w-16 h-16 shadow-md flex items-center justify-center"
                >
                  <BsQrCode size={32} className="text-black" />
                </button>
                <div className="flex-1 ml-4 ">
                  <div className="flex justify-between">
                    <p>Saldo</p>
                    <p className="font-bold">
                      Rp {formatter.formatNumber(homeData.saldo)}
                    </p>
                  </div>
                  <div className=" flex justify-between">
                    <p>Points</p>
                    <p className="text-emerald-500">
                      {formatter.formatNumber(homeData.point)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 mb-32">
            <CarouselImage images={homeData.banner} />
          </div>
          {scanBarcode && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50">
              <div className="flex flex-col items-center">
                <p className="text-gray-500 text-center mb-8 text-lg">
                  Show the QR Code below to the cashier.
                </p>
                <img
                  src={homeData.qrcode}
                  alt="Company Logo"
                  className="w-64 h-64"
                />
              </div>
              <button
                onClick={handleScanBarcode}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-800"
              >
                <BsX size={36} />
              </button>
            </div>
          )}
        </div>
      )}
      <Loading isVisible={loading} />
    </div>
  );
};

export default HomePage;
