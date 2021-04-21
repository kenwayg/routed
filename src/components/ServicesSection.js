import React from "react";
import car from "../img/pexels-garvin-st-villier-3972755.jpg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import SpeedIcon from "@material-ui/icons/Speed";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const ServicesSection = () => {
  return (
    <Service>
      <Description>
        <h2>
          High <span>quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <AccessAlarmIcon />

              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <GroupWorkIcon />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <SpeedIcon />
              <h3>Diaphram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <AccountBalanceWalletIcon />

              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={car} alt="  " />
      </Image>
    </Service>
  );
};

const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 7rem;
  .icon {
    display: flex;
    align-items: center;
    background: #23d997;
    margin: 5px;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
