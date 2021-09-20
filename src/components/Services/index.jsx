import {
  ServiceCard,
  ServiceContainer,
  ServiceH1,
  ServiceH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./Services.styles";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-4.svg";

export default function Services() {
  return (
    <ServiceContainer id="services">
      <ServiceH1>Our Services</ServiceH1>
      <ServicesWrapper>
        <ServiceCard>
          <ServicesIcon src={Icon1} />
          <ServiceH2>Reduce expenses</ServiceH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon2} />
          <ServiceH2>Virtual offices</ServiceH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServiceCard>
        <ServiceCard>
          <ServicesIcon src={Icon3} />
          <ServiceH2>Premium Benefits</ServiceH2>
          <ServicesP>
            Unlock our special membership card that return 5% cash back.
          </ServicesP>
        </ServiceCard>
      </ServicesWrapper>
    </ServiceContainer>
  );
}
