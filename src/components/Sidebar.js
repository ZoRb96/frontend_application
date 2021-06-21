import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";

function Sidebar(props, { defaultActive, }) {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex)
    setActiveIndex(newIndex)
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname))
    changeActiveIndex(activeItem);
  }, [location])

  return (
    <>

      <SidebarParent className="shadow-lg">

        {
          SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem key={item.name} active={index === activeIndex}>
                  <p>{item.icon}{item.name}</p>
                </SidebarItem>
              </Link>
            );
          })
        }

        <div className="behind-the-scenes" />
      </SidebarParent>

    </>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
background: #00cec9;
  
a {
  text-decoration: none;
}

& > div {
  height: 100vh;
}

`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#1abc9c" : ""};
  border-bottom-right-radius: 10px;
  overflow: hidden;

  p {
    color: white;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
    
  }
  
  &:hover:not(:first-child) {
    background: #1abc9c;
  }
`;