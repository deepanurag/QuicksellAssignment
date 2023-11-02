import React, { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../Actions/DataAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const [groupValue, setGroupValue] = useState(() => {
    return localStorage.getItem("group") || "status";
  });
  const [orderValue, setOrderValue] = useState(() => {
    return localStorage.getItem("order") || "priority";
  });

  const handleGroupValue = (e, valueBool) => {
    const { value } = e.target;
    if (valueBool) {
      setGroupValue(value);
      setDisplayOnClick(prevState => !prevState);
      localStorage.setItem("group", value);
    } else {
      setOrderValue(value);
      setDisplayOnClick(prevState => !prevState);
      localStorage.setItem("order", value);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      if (groupValue === "user") {
        dispatch(selectData(groupValue, { allTickets, allUser }, orderValue));
      } else {
        dispatch(selectData(groupValue, allTickets, orderValue));
      }
    };

    fetchData();
  }, [allTickets, allUser, dispatch, groupValue, orderValue]);

  return (
    <div className="top-header">
      <div className="display-button">
        <button
          className="button-style"
          onClick={() => setDisplayOnClick(prevState => !prevState)}
        >
          <BsSliders2 /> Display <AiOutlineDown className="dropDownIcon" />
        </button>
        {displayOnClick && (
          <div className="drop-on-click">
            <div className="select-group">
              <span>Grouping</span>
              <select
                value={groupValue}
                onChange={(e) => handleGroupValue(e, true)}
                className="select-style"
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="select-group">
              <span>Ordering</span>
              <select
                value={orderValue}
                onChange={(e) => handleGroupValue(e, false)}
                className="select-style"
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
