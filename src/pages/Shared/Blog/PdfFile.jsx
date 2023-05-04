import { Document, Page, Text } from "@react-pdf/renderer";

const PdfFile = () => {
  return (
    <Document>
      <Page size="A4">
        <Text>
          <article className="my-8 mx-5">
            <h2 className="text-3xl font-bold">
              Differences between uncontrolled and controlled components?
            </h2>
            <p className="my-6 text-lg leading-8">
              In React, a component is said to be a &quot;controlled
              component&quot; if React controls the state of its form elements,
              such as input fields or checkboxes. On the other hand, an
              &quot;uncontrolled component&quot; is one where the state of its
              form elements is controlled by the DOM itself.
            </p>
            <div className="ms-10 leading-8">
              <div>
                <h3 className="text-lg font-semibold">Controlled component</h3>
                <ol className="list-decimal list-inside">
                  <li>React controls the state of form elements.</li>
                  <li>
                    Controlled components keep their state within the React
                    component hierarchy.
                  </li>
                  <li>
                    Any changes to the form elements are immediately reflected
                    in the components state.
                  </li>
                  <li>Useful for complex forms and user input validation.</li>
                  <li>Enables fine-grained control over form behavior.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Uncontrolled component
                </h3>
                <ol className="list-decimal list-inside">
                  <li>State of form elements is controlled by the DOM.</li>
                  <li>
                    while uncontrolled components keep their state in the DOM.
                  </li>
                  <li>
                    Changes to form elements do not immediately update component
                    state.
                  </li>
                  <li>Useful for Integrating with third-party libraries</li>
                  <li>May be simpler to implement in some cases.</li>
                </ol>
              </div>
            </div>
          </article>
        </Text>
        <Text>
          <article className="my-8 mx-5">
            <h2 className="text-3xl font-bold">
              How to validate React props using PropTypes?
            </h2>
            <div className="my-6 text-lg leading-8">
              In React, you can use the PropTypes library to validate the props
              passed to a component. PropTypes allows you to specify the
              expected types of the props, as well as any additional constraints
              or validations. When a prop does not meet the specified type or
              validation criteria, React will log a warning in the console. This
              can help you catch and fix errors early in the development
              process. <br />
              1. install dependency for use PropTypes in your project. <br />
              2. Then, in your React component file, you can import PropTypes
              and define the expected prop types for your component.
            </div>
          </article>
        </Text>
        <Text>
          <article className="my-8 mx-5">
            <h2 className="text-3xl font-bold">
              Differences between nodejs and express js?
            </h2>
            <div className="ms-10 my-6 leading-8">
              <div>
                <h3 className="text-lg font-semibold">Node js</h3>
                <ol className="list-decimal list-inside">
                  <li>A server-side runtime environment for Javascript.</li>
                  <li>
                    Enables running Javascript code outside of a web browser.
                  </li>
                  <li>
                    Supports both synchronous and asynchronous programming
                    models.
                  </li>
                  <li>
                    Provides a range of built-in modules for server-side
                    programming, such as HTTP, file system, and OS.
                  </li>
                  <li>
                    Can be used for a variety of server-side applications,
                    including web servers, CLI tools, and network applications.
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Express js</h3>
                <ol className="list-decimal list-inside">
                  <li>A lightweight web framework built on to of Node js.</li>
                  <li>Enables building web application and APIs.</li>
                  <li>
                    Emphasizes asynchronous programming and supports promises
                    and async/await syntax.
                  </li>
                  <li>
                    Provides a minimal set of tools for building web
                    applications, such as routing, middleware, and template
                    engines.
                  </li>
                  <li>
                    Primarily designed for building web applications and APIs.
                  </li>
                </ol>
              </div>
            </div>
          </article>
        </Text>
        <Text>
          <article className="my-8 mx-5">
            <h2 className="text-3xl font-bold">
              What is a custom hook? And why will you create a custom hook?
            </h2>
            <div className="my-6 text-lg leading-8">
              <p className="mb-7">
                A custom Hook is a JavaScript function which we create by
                ourselves and whose name starts with &quot;use&quot; and that
                may call other Hooks. <br /> A custom hook has following
                features: <br />
                1. As a function, it takes input and returns output. <br />
                2. Its name starts with use like useQuery, useMedia etc. <br />
                3. Unlike functional components, custom hooks return a normal,
                non-jsx data.
                <br /> 4. Unlike normal functions, custom hooks can use other
                hooks such as useState, useRef. and other custom hooks. <br />
                <span className="font-semibold">
                  why will you create a custom hooks?
                </span>
                <br />
                1. completely separate logic from user interface. <br />
                2. Reusable in many different components with the same
                processing logic. Therefore, the logic only needs to be fixed in
                one place if it changes. <br />
                3. When the logic is too long and complicated, we can write it
                in another file, so that the component is shorter and easier to
                read.
              </p>
            </div>
          </article>
        </Text>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PdfFile;
