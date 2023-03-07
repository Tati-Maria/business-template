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
    <div>
      <HeaderTitle title='Contact Us' />
      <section className="grid grid-cols-1 gap-20 lg:grid-cols-2 pt-16">
        <Form />
        <Aside />
      </section>
      <Title subtitle='' title='' />
    </div>
  )
}

export default Contact;