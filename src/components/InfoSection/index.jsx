import {
  InfoContainer,
  InfoRow,
  Img,
  ImgWrap,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrrap,
  Subtitle,
} from "./InfoSections.styles";
import { Button } from "../Button";
// import Image from "../../images/";

export default function InfoSection({
  lightText,
  lightBg,
  topLine,
  imgStart,
  headline,
  description,
  bottomLabel,
  darkText,
  img,
  alt,
  id,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark ? 1 : 0}
                  >
                    {bottomLabel}
                  </Button>
                </BtnWrrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
