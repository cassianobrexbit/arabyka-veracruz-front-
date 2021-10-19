import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";


export default function Header({ batch }) {
  

  // Render the UI for your table
  return (
    <>
      <div className="header col-12">
        <div>
        <img  src="/arabyka.png"  alt="fireSpot" className="img-fluid col-2 col-sm-2 col-md-1 col-lg-1 arabyka" />
        <img  src="/logo_veratech.png"  alt="fireSpot" className="img-fluid col-4 col-sm-4 col-md-3 col-lg-3" />
        </div>
        <div className="batch">
          <span>Batch n°: </span>
          <span>{batch}</span>
        </div>
      </div>
    </>
  );
}
