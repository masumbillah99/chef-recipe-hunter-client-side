const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-10 my-32 border border-t-0 bg-gray-50 hover:bg-gray-100">
      <div className="ms-0">
        <img
          className="w-3/4"
          src="https://i.ibb.co/vCNpxDB/person-2.png"
          alt=""
        />
      </div>
      <div>
        <p className="leading-8 text-lg">
          <span className="font-bold">Assalamualikum</span> Everyone. I hope you
          are well by the grace of Almighty Allah. <br />I am Muhammad Masum
          Billah. I am student of Cumilla Polytechnic Institute. I am studying
          in Diploma Engineering in Computer Science and Technology. Currently,
          I also a student of Programming Hero batch-7. Currently I am learning
          Web Development.
        </p>
      </div>
    </div>
  );
};

export default About;
