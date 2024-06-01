const ProfileCard = () => {
  return (
    <section className="card-employee-info mt-3 my-6 p-3 rounded-xl">
      <div className="flex align-middle justify-between w-full">
        <div className="flex justify-center align-middle mr-3">
          <div className=" w-12 h-12 overflow-hidden rounded-full">
            <img
              src={
                "https://lh3.googleusercontent.com/a/ACg8ocI-4rbcXM6uaRmMOqTwvg6r8xW2PyB0ixh-aVkCRqHE7SpHSA=s96-c"
              }
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className=" text-white text-sm font-bold">Tabay</p>
            <p className=" text-white text-xs font-normal italic">
              UI/UX Designeer
            </p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white text-xs font-normal italic">
              Member Since
            </p>
            <p className=" text-white text-sm font-bold">01 Juni 2021</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 items-end">
        <div className="flex flex-col">
          <p className=" text-white text-xs font-normal">Location</p>
          <p className=" text-white text-sm font-bold">Kantor Sahid</p>
        </div>
        <p className=" text-white text-xs font-normal italic">ICO</p>
      </div>
    </section>
  );
};

export default ProfileCard;
