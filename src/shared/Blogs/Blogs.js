import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Frequently Asked Question</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is cors ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p className="fs-5">
              Cross-origin resource sharing is a mechanism that allows
              restricted resources on a web page to be requested from another
              domain outside the domain from which the first resource was
              served. A web page may freely embed cross-origin images,
              stylesheets, scripts, iframes, and videos.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>Why we use firebase? What are the Alternative of firebase?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br />
              <li>
                <strong>Parse</strong> : Parse is a complete open-source
                application stack and backend framework that offers a collection
                of tools and features to help you develop your apps. The
                features include a spreadsheet-like database, dashboard, push
                notifications, APIs, object and file storage, user
                authentication, and more out of the box. The software can be
                deployed to any infrastructure running Node.js, and uses MongoDB
                or PostgreSQL as a database, compared to Firebase, which only
                offers the NoSQL databases. You can also develop and test your
                app locally using Node.
              </li>
              <br />
              <li>
                <strong>AWS</strong> : AWS is a cloud platform by Amazon that
                provides a set of tools and services, which can be used on their
                own or together. Mobile and front-end developers can use AWS
                Amplify to build scalable full-stack apps powered by the
                platform. You can configure app backends and within minutes
                connect your app, deploy static web apps in a matter of clicks,
                and manage app content outside of the console. The platform
                supports React, JavaScript, Vue, Angular, Next.js, and other
                popular web frameworks. It also supports mobile platforms like
                Flutter, iOS, Android, Ionic, and React Native so you can get to
                market faster.
              </li>
              <li>
                <strong>Kuzzle</strong> : uzzle is another open source
                alternative to Firebase that helps you solve several digital
                needs such as single sign-on, collaboration, messaging,
                secondary screens, and more. This cross-technology and
                cross-industry platform is useful in various projects including
                building web or mobile apps, IoT apps, and middleware.
              </li>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>How does the private route work?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p className="fs-5">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            <h4>What is Node? How does Node work?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <p className="fs-5">
              A node is a basic unit of a data structure, such as a linked list
              or tree data structure. Nodes contain data and also may link to
              other nodes. Links between nodes are often implemented by pointers
              <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
