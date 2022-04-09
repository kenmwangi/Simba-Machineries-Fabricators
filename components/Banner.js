import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  /* background-color: teal; */
  background-color: #000;
  opacity: 0.8;
  color: #fff;
`;
const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const Contact = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

function Banner() {
  return (
    <Wrapper>
      <WorkingHours>
        <p>
          <strong>Opening Hours: </strong> Mon - Sat: 8:00 am - 5:00 pm |{" "}
          <strong>Closed:</strong> Sundays
        </p>
        <p></p>
      </WorkingHours>
      <Contact>
        <BiPhoneCall />

        <p>Call Us Now</p>
        <p>+254 711 165132</p>
      </Contact>
    </Wrapper>
  );
}

export default Banner;
