import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { BsExclamationSquareFill } from 'react-icons/bs';
import './Card.css';

const Card = ({ id, title, tag, status }) => {
  return (
    <div className="cardContainer flex-gap-10">
      <div className="cardHeading flex-sb">
        <span className='color-grey'>{id}</span>
        <div className="imageContainer relative">
          <img
            className="userImage"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle">
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> <BsExclamationSquareFill/> </div>
        {
          tag?.map((elem, index) => {
            return <div key={index} className="tags color-grey"> <FaCircle className='circle'/> {elem}</div>
          })
        }
      </div>
    </div>
  );
}

export default Card;
