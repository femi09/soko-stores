import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../../components/SearchBox";
import "./index.css";

const ProductFeed = () => {
  return (
    <div className="feed relative p-4 sm:p-4 xl:p-6 sm:border-gray-200 sm:border-r-2">
      <SearchBox />
      <p className="my-6 feed_title">
        Electronics <span className="mx-2 px-2 text-white">12</span>
      </p>

      <div className="products flex justify-between sm:items-start sm:flex-col lg:flex-row lg:items-end mb-6 sm:mb-8 lg:mb-0">
        <div className="product flex items-center w-full lg:m-2 xl:my-4 xl:mx-2">
          <div className="mr-2 sm:mr-4 w-1/3 sm:w-1/4">
            <Link to="/product">
              <img
                className="product_image rounded-md"
                src="/assets/images/kids_2pk_cloth_face_masks.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="product_info text-sm lg:text-m w-2/3 sm:w-3/4">
            <Link to="/product">
              <h1 className="product_name mb-2 sm:my-2">
                Kids 2pk Cloth Face Masks
              </h1>
            </Link>
            <div className="flex items-center w-full justify-between">
              <p className="product_price text-gray-500">UGX 185,000</p>
              <button className="add_product sm:mb-0 sm:mt-4 lg:mt-0 lg:mb-6 px-3 xl:px-6">
                <span className="mr-2 text-lg">+</span> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="products flex justify-between sm:flex-col lg:flex-row items-end sm:items-start lg:items-end mb-6 sm:mb-8 lg:mb-0">
        <div className="product flex items-center w-full lg:m-2 xl:my-4 xl:mx-2">
          <div className="mr-2 sm:mr-4 w-1/3 sm:w-1/4 relative">
            <Link to="/product">
              <img
                className="product_image relative rounded-md"
                src="/assets/images/norbury_scandinavian.jpg"
                alt=""
              />
              <div className="badge text-white absolute bottom-0 text-sm rounded-tl-md rounded-br-md right-0 py-1 px-2 sm:px-4 bg-red-500">
                -20%
              </div>
            </Link>
          </div>

          <div className="product_info text-sm lg:text-m w-2/3 sm:w-3/4">
            <Link to="/product">
              <h1 className="product_name mb-2 sm:my-2">
                Norbury Scandinavian Wood Leg Ottoman
              </h1>
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <p className="product_price text-gray-500">UGX 118,400</p>
                <p className="text-gray-400">
                  <s>UGX 148,000</s>
                </p>
              </div>
              <button className="add_product sm:mb-0 sm:mt-4 lg:mt-0 lg:mb-6 px-3 xl:px-6">
                <span className="mr-2 text-lg">+</span> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="products flex justify-between  sm:flex-col lg:flex-row items-end sm:items-start lg:items-end mb-6 sm:mb-8 lg:mb-0">
        <div className="product flex items-center w-full lg:m-2 xl:my-4 xl:mx-2">
          <div className="mr-2 sm:mr-4 w-1/3 sm:w-1/4">
            <Link to="/product">
              <img
                className="product_image rounded-md"
                src="/assets/images/baby_carrots_1lb_good_gather.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="product_info text-sm lg:text-m w-2/3 sm:w-3/4">
            <Link to="/product">
              <h1 className="product_name mb-2 sm:my-2">
                Baby-Cut Carrots - 1lb - Good & Gather
              </h1>
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <p className="product_price text-gray-500">UGX 4,000</p>
              </div>
              <button className="add_product sm:mb-0 sm:mt-2 lg:mt-0 lg:mb-6 px-3 xl:px-6">
                <span className="mr-2 text-lg">+</span> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="products flex flex-col lg:flex-row justify-between items-end sm:items-start lg:items-end mb-6 sm:mb-8 lg:mb-0">
        <div className="product flex items-center w-full lg:m-2 xl:my-4 xl:mx-2">
          <div className="mr-2 sm:mr-4 w-1/3 sm:w-1/4">
            <Link to="/product">
              <img
                className="product_image rounded-md"
                src="/assets/images/48-metal-country-chalet-charm.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="product_info text-sm lg:text-m w-2/3 sm:w-3/4">
            <Link to="/product">
              <h1 className="product_name mb-2 sm:my-2">
                Metal Country Chalet Charm and Wood Bench - Saracina Home
              </h1>
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <p className="product_price text-gray-500">UGX 34,000</p>
              </div>
              <button className="add_product sm:mb-0 sm:mt-2 lg:mt-0 lg:mb-6 px-3 xl:px-6">
                <span className="mr-2 text-lg">+</span> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="products flex justify-between flex flex-col lg:flex-row items-end sm:items-start lg:items-end mb-6 sm:mb-8 lg:mb-0">
        <div className="product flex items-center w-full lg:m-2 xl:my-4 xl:mx-2">
          <div className="shadow-md rounded-md mr-2 sm:mr-4 w-1/3 sm:w-1/4">
            <Link to="/product">
              <img
                className="product_image rounded-md"
                src="/assets/images/alternative_protein_ground_16oz_good_gather.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="product_info text-sm lg:text-m w-2/3 sm:w-3/4">
            <Link to="/product">
              <h1 className="product_name mb-2 sm:my-2">
                Alternative Protein Ground - 16oz - Good & Gather
              </h1>
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <p className="product_price text-gray-500">UGX 8,000</p>
              </div>
              <button className="add_product sm:mb-0 sm:mt-2 lg:mt-0 lg:mb-6 px-3 xl:px-6">
                <span className="mr-2 text-lg">+</span> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeed;
