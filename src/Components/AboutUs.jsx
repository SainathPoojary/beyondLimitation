import styled from "styled-components";
import Navbar from "./Navbar";
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background-color: var(---primarycolor);
  color: white;
  box-shadow: 0px 7px 20px #00000051 !important;
  padding: 0.2%;
  margin-bottom: 20px;
  font-family: system-ui;
`;
const Para = styled.div`
    
    font-family:system-ui;
    font-weight: 20px;
    font-size:20px;
    display:flex;
    padding:10px;
    margin-left:10px;
    list-style
`;
const InPara = styled.div`
  font-family: system-ui;
  font-weight: 10px;
  font-size: 15px;
  display: flex;
  padding: 10px;
  margin-left: 20px;
  border-radius: 3px;
  border-left: 3px solid var(---primarycolor);
  margin: 3px;
`;
const Line = styled.div`
  width: 70px;
  height: 6px;
  background-color: var(---primarycolor);
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 15px;
`;
const Feature = styled.div`
  font-family: system-ui;
  font-weight: 20px;
  font-size: 18px;
  display: flex;
  padding: 5px;
  margin-left: 10px;
`;

function AboutUs() {
  return (
    <>
      <Navbar />
      <Head>About-Us</Head>

      <Para>
        Beyond-Limitation we are here with our web app for persons with
        Disabilities which we think should be Normal.
      </Para>
      <Line></Line>
      <Feature>We provide you with:-</Feature>
      <InPara>An Exclusive Job Portal</InPara>
      <InPara>Voice Commands for navigating</InPara>
      <InPara>Built In Resume generator</InPara>
      <InPara>Accessibility features to read Blogs</InPara>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur molestias impedit officiis eius numquam, ratione, quis
                  vero omnis aliquam, at facere. Alias atque unde sapiente et
                  odit, in ab labore eius nostrum incidunt libero.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Amrut Raote
                </h2>
                <p className="text-gray-500">AI/ML and Backend Devloper</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ratione quia est dolore blanditiis numquam
                  perspiciatis nostrum, nesciunt ut amet. Aspernatur eaque,
                  velit aliquam similique mollitia quidem, nemo, eveniet optio
                  dolor ratione incidunt porro?
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sainath Shetty
                </h2>
                <p className="text-gray-500">AI/ML dev</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with image"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  accusamus aliquam, inventore quae unde praesentium ducimus
                  nostrum animi cumque quibusdam aut blanditiis voluptas,
                  necessitatibus pariatur ea ullam dicta, tempora explicabo !
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Dharmesh Marathe
                </h2>
                <p className="text-gray-500">Backend dev</p>
              </div>
            </div>
            <div className="lg:w-1/4 lg:mb-0 p-4">
              <div
                className="h-full text-center"
                style={{
                  borderRadius: "10px",
                  padding: "30px",
                  boxShadow: "2px 5px 10px #00000051",
                }}
              >
                <img
                  alt="testimonial"
                  className="w-80 h-80 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.istockphoto.com/id/1227303423/photo/3d-illustration-of-smiling-man-with-laptop-and-bulb-over-head-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=K5VmZBgcFK40JJ1QDUJXXkLq7iKOQ6pHltlyqvm8i7w="
                  aria-label="person with lamp"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam nulla reprehenderit rerum non, magni consequatur
                  recusandae sapiente? Alias et eius molestias atque, voluptates
                  porro illum, magni exercitationem ipsum libero labore
                  voluptate.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Shubham Nakashe
                </h2>
                <p className="text-gray-500">UI/UX dev</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
