import { createPortal } from 'react-dom';
import { useState, useLayoutEffect } from 'react';



function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
  const [wrapperElement, setWrapperElement] = useState(null);
  useLayoutEffect(() => {
    var element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);
  if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
}

export default ReactPortal;