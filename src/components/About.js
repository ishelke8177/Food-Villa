
const About = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-9 mt-6 mb-6">
        <div className="h-[290px] sm:h-[120px] flex flex-wrap overflow-hidden mt-3 justify-center bg-pink-50 shadow-lg">
          <h1 className="text-bold text-2xl text-red-500">Welcome to Food Villa – Where Flavor Meets Convenience!</h1>
          <p className="p-3 w-full">
            At Food Villa, we're on a mission to make every meal memorable. Our
            app connects food enthusiasts with diverse cuisines, local
            favorites, and curated recipes. With a user-friendly interface,
            endless variety, and a thriving community, Food Villa is your go-to
            for delicious experiences. Join us on this culinary adventure –
            download the app today and savor the flavors that matter to you!
          </p>
        </div>
        <div className="h-[270px] sm:h-[120px] flex flex-wrap overflow-hidden mt-4 justify-center bg-pink-50 shadow-lg">
          <h1 className="text-bold text-2xl text-red-500">Our Mission</h1>
          <span className="p-2">
            At the heart of Food Villa's mission is the commitment to redefine
            how you experience food. We strive to empower you with an extensive
            array of choices, from diverse cuisines to carefully curated
            recipes, all accessible at your fingertips. Our mission is to make
            good food effortlessly accessible, so you can focus on savoring the
            moments that matter.
          </span>
        </div>
        <div className="col-12 h-[330px] sm:h-[120px] overflow-hidden mt-4 bg-pink-50 shadow-lg">
          <div className=" ms-2 col-12 justify-center">
            <h1 className="text-bold text-2xl text-red-500">
              Why Choose Food Villa
            </h1>
          </div>
          <div>
            <ul className="ms-2 mt-1 ">
              <li>
                <text className="text-bold text-[#6A1B9A]">Endless Variety:</text>
                From hearty comfort foods to exotic delicacies, our diverse
                range of options caters to all tastes and preferences.
              </li>
              <li>
                <text className="text-bold text-[#6A1B9A]">Effortless Ordering:</text>
                Order with ease, track your deliveries, and customize your meals
                – all within a few taps
              </li>
              <li>
                <text className="text-bold text-[#6A1B9A]">Chef's Corner:</text>
                Unlock your inner chef with our Chef's Corner, featuring
                recipes, tips, and tricks from culinary experts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;