// import logo from './logo.svg';
import "./Jobs.css";
// import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./Navbar";
import datas from "../assets/jobs.json";

// import b_d from './images/b_d.png';
// import d_d from './images/d_d.jpg';
// import b_i from './images/b_i.png';
// import m_c from './images/m_c.png';
// import p_m from './images/p_m.png';
// import c_s from './images/c_s.png';
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';

function Introduction() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <div className="into-info">
          <p className="intro-element1">
            Find Your <span className="different"> Dream Job</span>
            <br /> Now It's Easy.
          </p>
        </div>
        <img className="intro-pic" src="home3.png" alt="intro"></img>
      </div>
    </>
  );
}

function JobCategory() {
  return (
    <div className="job-cat">
      <p className="category-title">
        Let's help you<span className="different"> choose</span> the
        <br /> category you want
      </p>
      <div className="card1">
        <div className="row">
          <div className="column" id="column">
            <div className="card" id="card">
              <div className="icon-box">
                <img
                  className="center"
                  src="client/public/computer-16.png"
                  alt="icon"
                ></img>
              </div>
              <div className="card-text">
                <p className="text-1">IT/Computer</p>
                <p className="text-2">100+ New Jobs</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-box2">
                <img className="center" src="combo-16.png" alt="icon"></img>
              </div>
              <div className="card-text">
                <p className="text-1">Finance Associate</p>
                <p className="text-2">200+ New Job</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-box3">
                <img className="center" src="solutions-16.png" alt="icon"></img>
              </div>
              <div className="card-text">
                <p className="text-1">Advertising/Media</p>
                <p className="text-2">100+ New Job</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-box4">
                <img
                  className="center"
                  src="alternative-medicine-16.png"
                  alt="icon"
                ></img>
              </div>
              <div className="card-text">
                <p className="text-1">Nurse</p>
                <p className="text-2">150+ New Job</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card2">
              <div className="icon-box5">
                <img
                  className="center"
                  src="businessman-16.png"
                  alt="icon"
                ></img>
              </div>
              <div className="card-text">
                <p className="text-1">Office Executive</p>
                <p className="text-2">100+ New Jobs</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card2">
              <div className="icon-box6">
                <img
                  className="center"
                  src="engineering-16.png"
                  alt="icon"
                ></img>
              </div>
              <div className="card-text">
                <p className="text-1">Engineer</p>
                <p className="text-2">200+ New Job</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card2">
              <div className="icon-box7">
                <img className="center" src="t-shirt-16.png" alt="icon"></img>
              </div>
              <div className="card-text">
                <p className="text-1">Garments</p>
                <p className="text-2">100+ New Job</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card2">
              <div className="icon-box8">
                <img className="center" src="hotel-2-16.png" alt="icon"></img>
              </div>
              <div className="card-text">
                <p className="text-1">Receptionist</p>
                <p className="text-2">150+ New Job</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="extra">
                <p className="text">See all category</p>
                <img className="img" src="arrow-11-24.png" alt="true"></img>
            </div> */}
    </div>
  );
}

function YourJob() {
  return (
    <div>
      <div className="job-listing">
        <div>
          <p className="list-head" aria-label="newest jobs listing">
            Newest Job<span className="different"> Listing</span>
          </p>
          <p className="list-para">
            Narrow down your applications and let the most appearing <br /> and
            matching companies show off
          </p>
        </div>
        <button className="list-button">View All Listing</button>
      </div>
      <div className="options">
        <ul className="list-menu">
          <li className="list-item">
            <a href="#allcategories">All Categories</a>
          </li>
          <li className="list-item">
            <a href="#design">Design</a>
          </li>
          <li className="list-item">
            <a href="#technology">Technology</a>
          </li>
          <li className="list-item">
            <a href="#marketing">Marketing</a>
          </li>
        </ul>
      </div>

      <div className="list-card">
        <div className="list-row">
          {datas.map((data, index) => (
            <div className="list-column">
              <div className="cardl">
                <div className="card-head " aria-label="rahul">
                  <p className="txt1">{data.company}</p>
                  <p className="txt2">{data.date}</p>
                </div>
                <div>
                  <p
                    className="head-title"
                    aria-label={`${index + 1} ${data.title}`}
                  >
                    {data.position}
                  </p>
                </div>
                <div className="features">
                  <p className="type">Full-time</p>
                  <p className="job">Finance</p>
                </div>

                <p className="loct">{data.location}</p>
                <p className="more-info">{data.desc}</p>
                <div className="cardbtn">
                  <button className="contact">Contact</button>
                  <button className="apply">Apply </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Full Stack</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Electrical Engineer</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Marketing Manager</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">UX Designer</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Front End</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Marketing Manager</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div>
                     <div className="list-column">
                       <div className="cardl">
                       <div className="card-head">
                            <p className="txt1">Figma</p>
                            <p className="txt2">10 Mar</p>
                         </div>
                        <div >
                            <p className="head-title">Software Developer</p>
                        </div>
                        <div className="features">
                                    <p className="type">Full-time</p>
                                    <p className="job">Finance</p>
                        </div>
                         
                            <p className="loct">Mumbai, India</p>
                            <p className="more-info">
                            Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa galisum
                            et voluptatem autem qui cupiditate nesciunt. 
                            </p>
                            <div className="cardbtn">
                            <button className="contact">Contact</button>
                            <button className="apply">Apply  </button>
                            </div>
                        </div>  
                     </div> */}
        </div>
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <></>
      <Navbar />
      <Introduction />
      <JobCategory />
      <YourJob />
    </div>
  );
}
export default Jobs;
