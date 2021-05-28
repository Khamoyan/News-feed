import React, { Suspense } from "react";
import PropTypes from 'prop-types';

function Suspenser({
   children,
}) {
   return (
      <Suspense fallback={<div></div>}>
         { children}
      </Suspense>
   );
}

Suspenser.propTypes = {
   children: PropTypes.any,
};

let Wraper = (WrappedComponent) => props => {
   return (
      <Suspenser>
         <WrappedComponent {...props} />
      </Suspenser>
   )
}
export default Wraper