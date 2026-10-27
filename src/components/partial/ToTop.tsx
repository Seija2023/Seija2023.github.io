import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/top.stylus";
export default function ToTop() {
  const [visible, setVisible] = useState(false);
  const scrollHandler = useCallback(() => setVisible(window.scrollY > 200), []);
  useEffect(() => {
    scrollHandler(); window.addEventListener("scroll", scrollHandler, {passive:true});
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);
  return <button className="sidebar-top" type="button" aria-label="返回顶部"
    onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
    style={{opacity:visible?1:0, pointerEvents:visible?"auto":"none"}}>
    <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
  </button>;
}
