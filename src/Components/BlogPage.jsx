import React from "react";
import data from "../assets/blogs.json";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/user-dummy.jpeg";
import Navbar from "./Navbar";

function BlogPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <a
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              aria-label="This is blog page"
            >
              Audible Blogs
            </a>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Don't only read the blogs, now listen them too!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((data) => (
              <article
                aria-label={`${data.title} by ${data.author}`}
                onClick={() => {
                  navigate("/blogs", { state: data });
                }}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" className="text-gray-500">
                    {data.date}
                  </time>
                  {data.genre.map((genre) => (
                    <a className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                      {genre}
                    </a>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    {data.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {data.desc}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={avatar}
                    alt="profile-image"
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {data.author}
                      </a>
                    </p>
                    <p className="text-gray-600">{data.position}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
