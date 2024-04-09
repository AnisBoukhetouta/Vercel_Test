import React from "react";
const cachedImages = {};
export default function ImageCach(url) {
  console.log('vvvvvvvvvvvvvvvvv', url)
  const img = new Image();
  cachedImages[url] = img;
  img.onload = () => {
    console.log(`~~~~~${img}~~~~~image loaded`);
  };
}
