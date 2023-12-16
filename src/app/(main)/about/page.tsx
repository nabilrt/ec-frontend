const AboutPage = () => {
  return (
    <div className="p-4 w-full flex flex-col justify-center">
      <div className="w-1/2 m-auto text-center">
        <h1 className="font-semibold text-3xl mt-7">
          What Makes us different?
        </h1>
        <small className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At architecto
          earum aliquam optio? Placeat praesentium consectetur beatae magnam
          maxime accusamus repellat quam quae, illum maiores? Odio atque debitis
          velit? Officia consequatur quasi culpa debitis?
        </small>
      </div>
      <div className="w-3/4 flex flex-row  m-auto mt-7 space-x-3">
        <div className="p-4 shadow-xl flex flex-col border border-[#fc8eac] border-solid">
          <img src="/24-7-96.png" alt="" className="mb-5 h-[96px] w-[96px] " />
          <h1 className="font-semibold text-xl mb-4">24/7 Service</h1>
          <small className="text-xs leading-7 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            architecto earum aliquam optio? Placeat praesentium consectetur
            beatae magnam maxime accusamus repellat quam quae, illum maiores?
            Odio atque debitis velit? Officia consequatur quasi culpa debitis?
          </small>
        </div>
        <div className="p-4 shadow-lg text-start flex flex-col border border-[#fc8eac] border-solid">
          <img src="/trophy.png" alt="" className="mb-5 h-[96px] w-[96px] " />
          <h1 className="font-semibold text-xl mb-4">Award Winner</h1>
          <small className="text-xs leading-7 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            architecto earum aliquam optio? Placeat praesentium consectetur
            beatae magnam maxime accusamus repellat quam quae, illum maiores?
            Odio atque debitis velit? Officia consequatur quasi culpa debitis?
          </small>
        </div>
        <div className="p-4 shadow-lg text-start flex flex-col border border-[#fc8eac] border-solid">
          <img src="/top.png" alt="" className="mb-5 h-[96px] w-[96px] " />
          <h1 className="font-semibold text-xl mb-4">Top Quality</h1>
          <small className="text-xs leading-7 mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            architecto earum aliquam optio? Placeat praesentium consectetur
            beatae magnam maxime accusamus repellat quam quae, illum maiores?
            Odio atque debitis velit? Officia consequatur quasi culpa debitis?
          </small>
        </div>
      </div>
      <div className="w-1/2 m-auto text-center">
         <h1 className="font-semibold text-2xl mt-5 uppercase">Developed By</h1>
         <img src="/logo.png" alt="" />
      </div>
    </div>
  );
};

export default AboutPage;
