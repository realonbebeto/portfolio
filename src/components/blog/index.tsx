import React from "react";
import { BlogType } from "../../types";
import { ThemeContext } from "../../ThemeContext";

type Props = {
  key: number;
  blog: BlogType;
};

const BlogCard = ({ key, blog }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <article
      key={key}
      className="  p-2 border border-gray-100 hover:shadow-xl rounded-lg shadow-lg  cursor-pointer sm:p-6 lg:p-8"
    >
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:h-14 sm:w-14 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border sm:border-[#1DA1F2] my-auto"
          aria-hidden="true"
        >
          <div >
            <i className="fa-solid fa-pen text-3xl text-[#1DA1F2] "></i>
          </div>
        </div>

        <div>
          <h3 className="mt-2 text-lg font-normal sm:text-lg">
            <a href={`${blog.url}`} className="hover:underline text-[#1DA1F2]">
              {" "}
              {blog.title}{" "}
            </a>
          </h3>

          <p className={theme === "dark" ? "mt-1 text-sm text-white font-thin" : "mt-1 text-sm text-gray-500 font-thin"}>{blog.description}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
