import React from "react";

const CardItem = ({ data }) => {
  return (
    <>
      {
        data.map((item) => (
          <div className="bg-white shadow-md flex flex-col h-full rounded-lg lg:p-2 ">
            <>
              <div className="flex-shrink-0 lg:p-4" key={item.id}>
                <img
                  src={item.image}
                  alt="Product"
                  className="w-full h-80 rounded-md object-cover"
                />
              </div>
              <div className="px-4 flex-grow">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className={`flex px-4 py-4 ${item.price ? 'justify-between' : 'justify-center'}`}>
                {item.price && (
                  <div className={`font-semibold text-sm border-b-2 w-4/9 border-green-600 bg-green-600 text-white p-2 px-4 rounded ${item.price ? 'w-11-12' : 'w-4/9'}`}>Normal:  <span className='text-bold'>{item.price}</span></div>
                )}
                <div className={`flex justify-center gap-1 font-semibold text-sm border-b-2 border-green-600 bg-green-600 text-white p-2 px-4 rounded ${item.price ? 'w-4/9 ' : 'w-11/12'}`}>Turbo:
                  <span className='text-bold'>{item.priceTurbo}</span>
                </div>
              </div>
            </>
          </div>
        ))
      }
    </>

  );
};

export default CardItem;
