import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./index.css";

const Categories = () => {
  return (
    <>
      <div className="hidden sm:block sidebar border-r-2 pt-6 pl-10 border-gray-200">
        <ul className="flex lg:w-2/3 xl:w-1/2 mx-auto flex-col">
          <li className="sidebar_options pb-4">Electronics (12)</li>
          <li className="sidebar_options pb-4">Face Masks (3)</li>
          <li className="sidebar_options pb-4">Fresh Foods (8)</li>
          <li className="sidebar_options pb-4">Grocery (6)</li>
          <li className="sidebar_options pb-4">Home (24)</li>
          <li className="sidebar_options pb-4">Kids (9)</li>
        </ul>
        <div className="sidebar_link flex items-center sidebar_link lg:w-3/4 xl:w-1/2 my-2 mx-auto">
          <p className="mx-1 xl:mr-2">View all categories</p>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className="categories p-4 my-4 sm:hidden .disable-scrollbars flex items-center xl:justify-between overflow-x-scroll">
        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md h-full"
              src="/assets/images/electronics.jpg"
              alt=""
            />
            <div className="category_name  absolute text-white inset-x-0 bottom-0 text-center text-m p-2">
              Electronics (12)
            </div>
          </div>
        </div>

        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md h-full"
              src="/assets/images/face_masks.jpg"
              alt=""
            />
            <div className="category_name  absolute inset-x-0 bottom-0 text-center text-m p-2">
              Face Masks (3)
            </div>
          </div>
        </div>

        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md relative h-full"
              src="/assets/images/fresh_foods.jpg"
              alt=""
            />
            <div className="category_name  absolute bottom-0 inset-x-0 text-center text-m p-2">
              Fresh Foods (8)
            </div>
          </div>
        </div>

        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md h-full"
              src="/assets/images/groceries.jpg"
              alt=""
            />
            <div className="category_name absolute inset-x-0 bottom-0 text-center text-m p-2">
              Grocery (6)
            </div>
          </div>
        </div>

        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md h-full"
              src="/assets/images/home_products.jpg"
              alt=""
            />
            <div className="category_name absolute inset-x-0 bottom-0 text-center text-m p-2">
              Home (24)
            </div>
          </div>
        </div>

        <div className="category mr-4">
          <div className="category_image relative">
            <img
              className="rounded-md  h-full"
              src="/assets/images/kids.jpg"
              alt=""
            />
            <div className="category_name  absolute inset-x-0 bottom-0 text-center text-m p-2">
              Kids (9)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
