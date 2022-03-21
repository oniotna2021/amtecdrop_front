import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function Example() {
  const [Loading, setLoading] = useState(false);

  const cargaPagina=()=>{
    setTimeout(() => {
           return(
               <div>
                   HOLA
               </div>
           );
         }, 5000);
  }

  if (
        document.readyState === "loaded" ||
         document.readyState === "interactive" ||
          document.readyState === "complete"
     ) {
    
        cargaPagina()
     }

     return(
        <div>
            PRUEBA
        </div>
    );

}

//   var tmrReady = setInterval(isPageFullyLoaded, 100);

//   function isPageFullyLoaded() {
//     if (
//       document.readyState === "loaded" ||
//       document.readyState === "interactive" ||
//       document.readyState === "complete"
//     ) {
//       clearInterval(tmrReady);
//       return(
//           <div>
//               HOLA
//           </div>
//       )

//     } else {
//       return (
//         <div className="w-25">
//           <span class="visually-hidden">Loading...</span>
//           <div className="spinner-border" role="status"></div>
//         </div>
//       );
//     }
//   }

  

    // const cambiarEstado = () => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 5000);
    // };

    // if (Loading) {
    //   return (
    //     <div className="w-25">
    //       <span class="visually-hidden">Loading...</span>
    //       <div className="spinner-border" role="status"></div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <button className="btn btn-primary" onClick={() => cambiarEstado()}>
    //         pagina
    //       </button>
    //     </div>
    //   );
    // }

