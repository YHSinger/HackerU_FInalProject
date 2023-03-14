import { Fragment } from "react";
import ButtonMailToComponent from "../components/ButtonMailTo/ButtonMailTo.component";

const ContactUsPage = () => {
  return (
    <Fragment>
      <h2>contact us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        reiciendis cum, eaque sapiente quidem exercitationem dolor dolore sed ex
        rerum consectetur in cupiditate et ipsum. Sunt animi quibusdam iusto
        optio?
      </p>
      <ButtonMailToComponent
        className="btn btn-primary"
        email="owner@website.com"
      >
        contact us by email
      </ButtonMailToComponent>
    </Fragment>
  );
};
export default ContactUsPage;
