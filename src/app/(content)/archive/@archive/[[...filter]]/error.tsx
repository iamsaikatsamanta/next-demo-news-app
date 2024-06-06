"use client";
import React from "react";

const FilterError = ({ error }: { error: { message: string } }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default FilterError;
