import { createPortal } from "react-dom"


function PortalDemo() {
  return createPortal(
    <div>PortalDemo</div>,
    document.getElementById("portal-root")
  )
}

export default PortalDemo