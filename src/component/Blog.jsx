import React from 'react';
import { Accordion } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  const options = {
    orientation: 'landscape',
  };
  return (
    <div className='container ' >
      <div className='w-100' ref={ref}>
        <h1 className='text-center pb-5'>Common questions</h1>

        <Accordion defaultActiveKey="0" className='container mb-5   pb-5'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What does a chef do?</Accordion.Header>
            <Accordion.Body>
              <p>
                A chef is a culinary professional responsible for preparing and cooking food. They often design menus, create recipes, manage kitchen staff, and ensure the quality and presentation of dishes.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do you become a chef?</Accordion.Header>
            <Accordion.Body>
              To become a chef, you can start by enrolling in a culinary school to learn the basics of cooking and food preparation. After that, gaining hands-on experience in a professional kitchen is essential. Many chefs work their way up from entry-level positions, such as line cooks.


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What skills are important for a chef?</Accordion.Header>
            <Accordion.Body>
              mportant skills for a chef include culinary knowledge, knife skills, creativity, time management, communication, teamwork, and the ability to work well under pressure.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What's the difference between a chef and a cook?</Accordion.Header>
            <Accordion.Body>
              While both chefs and cooks prepare food, chefs typically have more advanced culinary skills, often oversee the kitchen, create menus, and make important culinary decisions. Cooks, on the other hand, may focus on specific tasks and follow established recipes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='text-center'>
        <Pdf targetRef={ref} options={options} filename="code-example.pdf">
          {({ toPdf }) =>
            <p className=' fs-5 btn  fw-bold' onClick={toPdf}>Print as Pdf</p>}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;