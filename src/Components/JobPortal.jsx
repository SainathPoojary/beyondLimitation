// import logo from './logo.svg';
import "./style.css";
// import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./Navbar";
// import b_d from './images/b_d.png';
// import d_d from './images/d_d.jpg';
// import b_i from './images/b_i.png';
// import m_c from './images/m_c.png';
// import p_m from './images/p_m.png';y
// import c_s from './images/c_s.png';
// import home1 from './images/home1.jpg';
// import home3 from './images/home3.jpg';
// import home4 from './images/home4.jpg';

// function Navbar()
// {
//     return(
//         <nav className="navbar">
//             {/* <img className="logo" src="simple.jpg" width="70px" alt="logo"></img> */}
//             <div className="name">Normal.</div>
//             <ul className="nav-menu">
//             <li className="nav-item"><a href="#jobs">Jobs</a></li>
//             <li className="nav-item"><a href="#companies">Companies</a></li>
//             <li className="nav-item"><a href="#aboutus">About Us</a></li>
//             <li className="nav-item"><a href="#contact">Contacts</a></li>

//             </ul>
//             <button className="nav-btn">Sign in</button>

//         </nav>

//     )
// }
const disability = localStorage.getItem("disability")
  ? localStorage.getItem("disability").toLowerCase()
  : "visual";
const jobs = [
  {
    title: "Finance Manager",
    date: "10 Mar",
    location: "Mumbai",
    Country: "India",
    disability: "visual",
    link: "https://online.hbs.edu/subjects/finance-accounting/?c1=GAW_SE_NW&source=IN_T_FIN_ACC&cr2=search__-__nw__-__in__-__finance__AMP__accounting&kw=how_to_get_a_job_in_finance_phm&cr5=652515006385&cr7=c&hsa_cam=12707360102&hsa_grp=122301686524&hsa_mt=p&hsa_src=g&hsa_ad=652515006385&hsa_acc={792-723-8641}&hsa_net=adwords&hsa_kw=how%20to%20get%20a%20job%20in%20finance&hsa_tgt=kwd-299404876526&hsa_ver=3&gclid=Cj0KCQjwiZqhBhCJARIsACHHEH_tKBGys4doOoQnhQi8aSC08Ooiqn9FTeRTTISmv53oiSZjMvIovA0aAgPEEALw_wcB",
    contact: "https://online.hbs.edu/about/",
  },
  {
    title: "Braille Transcriptionist",
    date: "25 Jun",
    location: "New Delhi",
    Country: "India",
    disability: "partial-handicap",
    link: "https://www.governmentjobs.com/careers/utah/jobs/3968917/proofreader-aide-usdb",
    contact: "https://www.linkedin.com/company/state-of-utah",
  },
  {
    title: "Accessibility Consultant",
    date: "15 Aug",
    location: "Toronto",
    Country: "Canada",
    disability: "visual",
    link: "https://www.naukri.com/job-listings-consultant-insight-advisors-mumbai-0-to-2-years-310323904588?src=seo_srp&sid=16803284102216173&xp=1&px=1",
    contact:
      "https://www.naukri.com/job-listings-consultant-insight-advisors-mumbai-0-to-2-years-310323904588?src=seo_srp&sid=16803284102216173&xp=1&px=1",
  },
  {
    title: "Sign Language Interpreter",
    date: "12 Sep",
    location: "Sydney",
    Country: "Australia",
    disability: "partial-handicap",
    link: "https://in.linkedin.com/jobs/sign-language-interpreter-jobs?currentJobId=3534264813&position=2&pageNum=0",
    contact: "https://www.dfdw.net/contactus.php",
  },
  {
    title: "Audio Describer",
    date: "28 Oct",
    location: "London",
    Country: "United Kingdom",
    disability: "visual",
    link: "https://condenast.wd5.myworkdayjobs.com/en-US/CondeCareers/job/1-World-Trade-Center-New-York-NY/Fact-Checker--The-New-Yorker_R-12339-2",
    contact: "https://condenast.wd5.myworkdayjobs.com/en-US/CondeCareers",
  },
  {
    title: "Assistive Technology Specialist",
    date: "7 Dec",
    location: "San Francisco",
    Country: "United States",
    disability: "partial-handicap",
    link: "https://www.indeed.com/q-Assistive-Technology-Specialist-jobs.html?vjk=6aa43ab24c4e77b0",
    contact: "https://www.troy.edu/contact.html",
  },
  {
    title: "Mobility Trainer",
    date: "18 Jan",
    location: "Cape Town",
    Country: "South Africa",
    disability: "visual",
    link: "https://www.indeed.com/q-Mobility-Trainer-jobs.html?vjk=f425892ece5899d9",
    contact:
      "https://www.indeed.com/q-Mobility-Trainer-jobs.html?vjk=f425892ece5899d9",
  },
  {
    title: "Special Education Teacher",
    date: "3 Feb",
    location: "Tokyo",
    Country: "Japan",
    disability: "partial-handicap",
    link: "https://in.indeed.com/jobs?q=Special+Education+Teacher&mna=&mna=&=&aceid=&gclid=Cj0KCQjwiZqhBhCJARIsACHHEH9vmeMnljPSjY6TggBXVZFyGnqcd_3idEti-TJ3uhAropyjEQ2e6noaAjo5EALw_wcB&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt&vjk=aa77ae097ae54b6a",
    contact:
      "https://amityonline.com/lp?utm_source=3&utm_campaign=Brand_Search&utm_medium={adgroup}&utm_keyword=amity%20university&gclid=Cj0KCQjwiZqhBhCJARIsACHHEH8tK7tdwnLViAnvdpwZfM-YAhU6KFp-egYQ1BrM1P8N8ui0Z14LtOcaArbPEALw_wcB",
  },
  {
    title: "Job Coach",
    date: "9 Mar",
    location: "Rio de Janeiro",
    Country: "Brazil",
    disability: "visual",
    link: "https://www.naukri.com/job-listings-part-time-swimming-coach-vibgyor-lucknow-vibgyor-group-of-schools-lucknow-1-to-6-years-220323008184?src=seo_srp&sid=16803275097755244&xp=1&px=1",
    contact: "https://www.vibgyorhigh.com/contact-us",
  },
  {
    title: "Adaptive Sports Coordinator",
    date: "22 Apr",
    location: "Vancouver",
    Country: "Canada",
    disability: "partial-handicap",
    link: "https://www.glassdoor.com/Job/adaptive-sports-coordinator-jobs-SRCH_KO0,27.htm",
    contact:
      "https://www.glassdoor.com/Job/adaptive-sports-coordinator-jobs-SRCH_KO0,27.htm",
  },
  {
    title: "visual Rehabilitation Specialist",
    date: "8 May",
    location: "Paris",
    Country: "France",
    disability: "visual",
    link: "https://www.indeed.com/q-visual-Rehabilitation-Specialist-jobs.html?vjk=1da2bf5a976ddcd1",
    contact: "https://www.va.gov/health/",
  },
];
function Introduction() {
  return (
    <div className="intro">
      <div className="into-info">
        <p className="intro-element1">
          Find Your <span className="different"> Dream Job</span>
          <br /> Now It's Easy.
        </p>
      </div>
      <img className="intro-pic" src="home3.png" alt="intro"></img>
    </div>
  );
}

function JobCategory() {
  return (
    <div className="job-cat">
      <p className="category-title" aria-label="This is home screen">
        Let's help you<span className="different"> choose</span> the
        <br /> category you want
      </p>
      <div className="card1">
        <div className="row">
          <div className="column" id="column">
            <div className="card" id="card">
              <div className="icon-box">
                <img className="center" src="computer-16.png" alt="icon"></img>
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
          <p className="list-head">
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
          {jobs.map((job, index) =>
            disability === job.disability ? (
              <div className="list-column">
                <div className="cardl">
                  <div className="card-head">
                    <text className="txt2">{job.date}</text>
                  </div>
                  <div>
                    <a href="#" className="head-title">
                      {job.title}
                    </a>
                  </div>
                  <div className="features">
                    <text className="type">Full-time</text>
                    <text className="job">Finance</text>
                  </div>

                  <p className="loct inline-flex">
                    {job.location}, {job.Country}
                  </p>
                  <p className="more-info">
                    Lorem ipsum dolor sit amet. Sit mollitia autem et ipsa
                    galisum et voluptatem autem qui cupiditate nesciunt.
                  </p>
                  <div className="cardbtn">
                    <button className="contact">
                      <a href={`${job.link}`} className="nav-link">
                        Contact
                      </a>
                    </button>
                    <button className="apply">
                      <a href={`${job.link}`} className="nav-link">
                        Apply
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <JobCategory />
      <YourJob />
    </div>
  );
}
export default Jobs;
