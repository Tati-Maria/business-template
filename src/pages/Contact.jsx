import { useEffect } from "react";
import Aside from "../components/Aside";
import HeaderTitle from "../components/common/HeaderTitle"
import Title from "../components/common/Title";
import Form from "../components/Form";

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Us'
  }, []);

  return (
    <div className="mb-20">
      <HeaderTitle title='Contact Us' />
      <section className="flex items-center flex-col gap-20 lg:flex-row pt-16">
        <Form />
        <Aside />
      </section>
    </div>
  )
}

export default Contact;