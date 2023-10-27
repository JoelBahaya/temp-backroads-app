import Title from "./Title";
import { services } from "../data";
import Serv from "./Serv";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Serv key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}
export default Services;
