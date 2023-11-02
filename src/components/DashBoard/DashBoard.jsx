import React from "react";
import { useSelector } from "react-redux";
import { BsExclamationSquareFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";
import { BiSignal3, BiSignal2, BiSignal1 } from "react-icons/bi";
import "./DashBoard.css";
import Card1 from "../Card/Card1";
import Card from "../Card/Card";

const DashBoard = () => {
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  return selectedData ? (
    <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
      {selectedData.map((elem, index) => (
        <div key={index} className="dashCardContainer">
          <div className="dashCardHeading flex-sb">
            <div className="leftView">
              {!user ? (
                (elem[index]?.title === "Urgent" && <BsExclamationSquareFill className="exclamation" />) ||
                (elem[index]?.title === "High" && <BiSignal3 className="high" />) ||
                (elem[index]?.title === "Medium" && <BiSignal2 className="medium" />) ||
                (elem[index]?.title === "Low" && <BiSignal1 className="medium" />) || <BsThreeDots />
              ) : (
                <div className="imageContainer relative" style={{ width: "15px", height: "15px", display: 'inline-block' }}>
                  <img
                    style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="UserImage"
                  />
                </div>
              )}
              <span>
                {elem[index]?.title} {elem[index]?.value?.length}
              </span>
            </div>
            <div className="rightView">
              <AiOutlinePlus /> <BsThreeDots />
            </div>
          </div>
          <div className="dashList flex-gap-10">
            {elem[index]?.value?.map((item, ind) =>
              !user ? <Card key={ind} id={item.id} title={item.title} tag={item.tag} /> : <Card1 key={ind} id={item.id} title={item.title} tag={item.tag} />
            )}
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default DashBoard;
