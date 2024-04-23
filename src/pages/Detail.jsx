import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const select = useSelector((state) => state.detailFilmSlice.detail);
  const res = select.find((i) => i.id === +id);
  console.log(res);
  const {
    title,
    description,
    src,
    subject,
    year,
    country,
    time,
    actor,
    creator,
  } = res;

  return (
    <div>
      <span>{title}</span>
      <img src={src} alt="" />
      <p>{description}</p>
      <p>{subject}</p>
    </div>
  );
}
