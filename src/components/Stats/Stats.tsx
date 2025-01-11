const Stats = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        "
        >
          <div className="text-accent text-center xl:border-r xl:border-accent mb-4">
            <h3 className="h1 font-primary text-accent">12</h3>
            <p className="text-black">Years Of Experience</p>
          </div>
          <div className="text-accent text-center xl:border-r xl:border-accent mb-4">
            <h3 className="h1 font-primary text-accent">59</h3>
            <p className="text-black">Projects Completed </p>
          </div>
          <div className="text-accent text-center xl:border-r xl:border-accent mb-4">
            <h3 className="h1 font-primary text-accent">15</h3>
            <p className="text-black">Active Projects</p>
          </div>{" "}
          <div className="text-accent text-center ">
            <h3 className="h1 font-primary text-accent">95</h3>
            <p className="text-black">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
