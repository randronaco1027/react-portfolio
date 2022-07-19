import React from 'react';

function About() {
  return (
    <>
      <section className="my-5" >
        <h1 id="about">About me</h1>
        <div className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
          </p>
        </div>
      </section>
      <img
        src={require(`../../assets/misc/developer.webp`)}
        alt="GitHub Logo"
        className="img-thumbnail mx-1 bb8"
        key="GitHub Logo"
        style={{ width: 240, height: 200 }}
      />
    </>
  );
}

export default About;