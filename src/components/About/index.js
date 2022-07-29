import React from 'react';

// About page, this is the landing page
function About() {
  return (
    <div className="about">
      <section className="my-5" >
        <h1 id="about">About me</h1>
        <div className="my-2">
          <p>
          Full-stack web developer, with a career in finance, looking to begin a new career in software. Through my course, I have developed skills in various front-end, back-end and database languages. These languages include but are not limited to: HTML, CSS, JavaScript, Node JS, Express JS, MongoDB, Handlebars and most recently React. I have worked with several different groups to build applications from the ground up. Organized, clean, and concise code is something I take a lot of pride in. I am truly passionate about software development and cannot wait for what lies ahead.
          </p>
        </div>
      </section>
      <img
        src={require(`../../assets/misc/developer.webp`)}
        alt="GitHub Logo"
        className="img-thumbnail mx-1 avatar"
        key="GitHub Logo"
        style={{ width: 240, height: 200 }}
      />
    </div>
  );
}

export default About;