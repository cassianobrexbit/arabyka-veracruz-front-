import React from "react";

export default function Footer({ batch }) {
  

  // Render the UI for your table
  return (
    <>
      <div className="footer col-12">
        <div></div>
        <div>
          <span>Developed by </span>
          <a href="https://brexbit.com" target="_blank">brexbit</a >
        </div>
      </div>
    </>
  );
}


/**
 * Caso queira colocar o logo na esquerda, troca pela div da linha 10 a linha abaixo
 * <img  src="/arabyka.png"  alt="fireSpot" className="img-fluid col-2 col-sm-2 col-md-1 col-lg-1" />
 */