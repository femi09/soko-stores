import React, { useRef } from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import "./index.css";

const RelatedProducts = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <div className="my-10">
      <div className="flex justify-between items-center my-6">
        <h1 className="text-gray-400 text-xl">RELATED PRODUCTS</h1>
        <div className="related_icon flex align-center">
          <div
            onClick={() => scroll(-200)}
            className="arrow_backward flex justify-center px-3 mx-2 text-center items-center rounded-full"
          >
            <ArrowBackIosOutlinedIcon />
          </div>
          <div
            onClick={() => scroll(200)}
            className="arrow_forward  justify-center text-center items-center rounded-full"
          >
            <ArrowForwardIosOutlinedIcon />
          </div>
        </div>
      </div>
      <div ref={divRef} className="related_products .disable-scrollbars flex items-center xl:justify-between overflow-x-scroll">
        <div className="related_product mr-6">
          <div className="related_product_image">
            <img
              className="rounded-md"
              src="/assets/images/holiday_print_flannel_sheet.jpg"
              alt=""
            />
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Holiday Print Flannel Sheet Set...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image relative">
            <img
              className="rounded-md"
              src="/assets/images/norbury_scandinavian.jpg"
              alt=""
            />
            <div className="badge text-white absolute bottom-0 text-sm rounded-tl-md rounded-br-md right-0 py-1 px-4 bg-red-500">
              -20%
            </div>
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Norbury Scandinavian...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image">
            <img
              className="rounded-md"
              src="/assets/images/jersey_weighted_throw.jpg"
              alt=""
            />
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            50" x 70" Jersey Weighted Throw...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image">
            <img
              className="rounded-md"
              src="/assets/images/flannel_herringbone_comforter.jpg"
              alt=""
            />
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Flannel Herringbone...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image">
            <img
              className="rounded-md"
              src="/assets/images/heavyweight_linen_blend_quilt.jpg"
              alt=""
            />
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Heavyweight Linen Blend Quilt...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image">
            <img
              className="rounded-md"
              src="/assets/images/holiday_print_flannel_sheet.jpg"
              alt=""
            />
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Holiday Print Flannel Sheet Set...
          </div>
        </div>

        <div className="related_product mr-6">
          <div className="related_product_image relative">
            <img
              className="rounded-md"
              src="/assets/images/norbury_scandinavian.jpg"
              alt=""
            />
            <div className="badge text-white absolute bottom-0 text-sm rounded-tl-md rounded-br-md right-0 py-1 px-4 bg-red-500">
              -20%
            </div>
          </div>
          <div className="related_product_name text-gray-900 text-m my-4">
            Norbury Scandinavian...
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
