import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [project] = useState([
    {
      name: 'Gobbler',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Portfolio Manager',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Weather Tracker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
  ]);

//   const currentProjects = project.filter(photo => photo.category === category);

//   const toggleModal = (image, i) => {
//     setCurrentProject({ ...image, index: i });
//     setIsModalOpen(!isModalOpen);
//   };

  return (
    <div>
      <div className="flex-row">
      <img
          src={require(`../../assets/0.png`)}
          alt="Gobbler"
          className="img-thumbnail mx-1"
          key="Gobbler"
          style={{ width: "70%" }}
        />
        <img
          src={require(`../../assets/1.png`)}
          alt="Portfolio Manager"
          className="img-thumbnail mx-1"
          key="Portfolio Manager"
          style={{ width: "70%" }}
        />
        <img
          src={require(`../../assets/2.png`)}
          alt="Weather Dashboard"
          className="img-thumbnail mx-1"
          key="Weather Dashboard"
          style={{ width: "70%" }}
        />
      </div>
    </div>
  );
};

export default PhotoList;
