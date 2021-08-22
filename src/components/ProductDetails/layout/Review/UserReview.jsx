import React from "react";

const UserReview = () => {
  return (
    <>
      {/* User review */}
      <div className="mt-8">
        {/* UserInfo */}
        <div className="flex items-center my-2">
          {/* user img */}
          <img
            className="w-14 h-14"
            src="https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png"
            alt="ded"
          />
          <div className="mx-2">
            {/* username + stars */}
            <h1 className="font-semibold ">Dio Joestar</h1>
            <div>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="text-yellow-500 mr-1 text-3 fas fa-star"
                ></i>
              ))}
            </div>
          </div>
        </div>
        <div>
          {/* review text */}
          <p className="leading-6 text-gray-700 italic pb-6 border-b-2">
            I love how versatile the website is. I don't even feel like I'm
            shopping online anymore. I'm glad I found this site. Products are
            great too, and I love how easy it is to add to my cart.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserReview;
