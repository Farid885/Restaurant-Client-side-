import React from "react";

function Manager() {
  return (
    <div>
      <section id="manager" className="">
        <div className="text-primaryText font-bigText bg-dark">
          <div className="mx-8 lg:mx-28 pt-10 pb-28 lg:py-28 anim in-left">
            <p className="text-lg lg:text-2xl tracking-widest">
              RESTAURANT MANAGER
            </p>
            <h3 className="text-5xl lg:text-8xl mt-4">Shannon Dwyer</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mx-8 lg:mx-28 lg:py-28 anim in-up">
            <div className="mb-8 lg:mb-0">
              <p className="text-2xl tracking-widest">ABOUT</p>
              <h3 className="text-8xl mt-4 font-logo">Sakura</h3>
            </div>
            <div className="flex flex-col gap-6 font-miniText text-xs lg:w-[36rem] mb-8 lg:mb-0 anim in-right">
              <p>
                If you’re looking for the best sushi in Michigan, look no
                further than Sakura restaurant in Birmingham. Our globally
                influenced Japanese-inspired restaurant is located in the
                beautiful Victorian Peabody Mansion and led by Executive Chef
                Lloyd Roberts, who brings years of experience and innovative
                technique to the kitchen.
              </p>
              <p>
                At Sakura, we offer a wide range of gastronomic adventures with
                small and large plates, specialty craft cocktails, and a full
                sushi bar featuring sashimi and nigiri options flown fresh from
                Japan. Our commitment to quality is evident in the fresh,
                locally and internationally sourced ingredients we use in all of
                our dishes.
              </p>
              <p>
                We take a vibe-driven approach to fine dining, emphasizing the
                social experience in our dining room, sushi lounge, and cocktail
                bar. Our chic ambiance and decor create a fun atmosphere that’s
                perfect for any occasion, whether you’re joining us for dinner,
                cocktails, a private party, or a special event.
              </p>
              <p>
                At Sakura, we pride ourselves on world-class hospitality and
                promise to make your experience special and memorable. Join us
                today and taste the best sushi in Michigan!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Manager;
