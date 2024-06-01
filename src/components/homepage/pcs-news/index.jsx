import { Carousel } from "flowbite-react";

const PCSNews = () => {
  return (
    <section className="mt-3 -mr-4 pb-3">
      <p className="text-black font-semibold text-base">{`PCS News`}</p>
      <div className="h-56 sm:h-32 xl:h-32 2xl:h-3 mb-4">
        <Carousel
          leftControl=" "
          rightControl=" "
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="flex flex-col items-center bg-white shadow-md p-4">
            <div className="w-full shadow-md p-4 rounded-lg h-auto">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <div className=" w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={
                        "https://lh3.googleusercontent.com/a/ACg8ocI-4rbcXM6uaRmMOqTwvg6r8xW2PyB0ixh-aVkCRqHE7SpHSA=s96-c"
                      }
                    />
                  </div>
                  <p className="text-xs font-bold text-[#F82C17]">
                    Ana Riswati
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-black text-xs font-normal">Senin</p>
                  <p className="text-black text-xs font-normal">30 Mei 2022</p>
                </div>
              </div>
              <div className="flex flex-col w-full mt-2">
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4">
            <div className="w-full shadow-md p-4 rounded-lg h-auto">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <div className=" w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={
                        "https://lh3.googleusercontent.com/a/ACg8ocI-4rbcXM6uaRmMOqTwvg6r8xW2PyB0ixh-aVkCRqHE7SpHSA=s96-c"
                      }
                    />
                  </div>
                  <p className="text-xs font-bold text-[#F82C17]">
                    Ana Riswati
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-black text-xs font-normal">Senin</p>
                  <p className="text-black text-xs font-normal">30 Mei 2022</p>
                </div>
              </div>
              <div className="flex flex-col w-full mt-2">
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-4">
            <div className="w-full shadow-md p-4 rounded-lg h-auto">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <div className=" w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={
                        "https://lh3.googleusercontent.com/a/ACg8ocI-4rbcXM6uaRmMOqTwvg6r8xW2PyB0ixh-aVkCRqHE7SpHSA=s96-c"
                      }
                    />
                  </div>
                  <p className="text-xs font-bold text-[#F82C17]">
                    Ana Riswati
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-black text-xs font-normal">Senin</p>
                  <p className="text-black text-xs font-normal">30 Mei 2022</p>
                </div>
              </div>
              <div className="flex flex-col w-full mt-2">
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-black text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PCSNews;
