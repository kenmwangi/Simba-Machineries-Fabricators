import Link from "next/link";
import React from "react";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import styled from "styled-components";
import { sliderItems } from "../components/Data/SliderData";

const Container = styled.div`
  padding-top: 7rem;
  width: 100%;

  height: 100vh;
  display: flex;
  overflow: hidden;
  z-index: 200;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--blue-color);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "2rem"};
  right: ${(props) => props.direction === "right" && "2rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;

  flex: 1;
  background: #fff;
`;
const Image = styled.img`
  height: 80%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1.5;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 4rem 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Button = styled.button`
  /* padding: 10px;
  font-size: 20px;
  background-color: transparent;
  background-color: var(--blue-color);
  color: #fff;
  opacity: 0.9;
  border-radius: 8px;
  cursor: pointer; */
  padding: 0.75rem 1rem;
  background: var(--blue-color);
  border: 1px solid var(--blue-color);
  color: var(--white-color);
  font-family: inherit;
  /* margin: 0 auto; */
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
  opacity: 0.9;
  transition: 0.3s ease, color;
  transition: 0.2s ease, color 0.2s ease;

  &:hover {
    background: transparent;
    color: var(--blue-color);
    /* opacity: 1; */
    transform: scale(1.05);
  }
  & > a {
    color: #fff;
    &:hover {
      background: transparent;
      color: var(--blue-color);
    }
  }
`;
function Home() {
  // managing sliding options using usestate
  const [slideIndex, setSlideIndex] = React.useState(0);

  const slideClickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => slideClickHandler("left")}>
          <BiArrowBack />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((sliderItem) => (
            <Slide bg={sliderItem.bg} key={sliderItem.id}>
              <ImageContainer>
                <Image src={sliderItem.img} alt="profile Overview" />
              </ImageContainer>
              <InfoContainer>
                <Title>{sliderItem.title}</Title>
                <Desc>{sliderItem.desc}</Desc>
                <Button>
                  <Link href="/products">
                    <a>SHOP NOW</a>
                  </Link>
                </Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => slideClickHandler("right")}>
          <BiRightArrowAlt />
        </Arrow>
      </Container>
    </>
  );
}

export default Home;
