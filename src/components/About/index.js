import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="my-5" >
        <h1 id="about">About me</h1>
        <div className="my-2">
          <p>
            My name is a Ray Andronaco and I am studying to become a full stack developer. I love to learn about the newest technologies and create my own applications. My top priorities are writing clean, organized code that all can follow.
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