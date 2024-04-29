import React from "react";

export const emptyText = "데이터가 없습니다";

export const Title = ({ title }) => {
  if (!title) return <p id="title">{emptyText}</p>;
  return <h1 id="title">{title}</h1>;
};
