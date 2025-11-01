
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AlertContext from "../Contexts/AlertContext";
import FooterComponent from "../Components/Reusables/FooterComponent";
import Navigation from "../Components/navigation";
import "./animations.css";
import AnimationContext from "../Contexts/AnimationContext";

function MainScreen() {
  const { showWaiting } = useContext(AlertContext);
  const location = useLocation();
  const [scrollActions, setScrollActions] = useState<any>({});

  useLayoutEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("content_frame");
      if (element) {
        element.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 500);
  }, [location.pathname]);

  useEffect(() => {

    const elementRef = document.getElementById("root");
    if (elementRef) {
      elementRef.addEventListener('scroll', handleScroll);
    }

  }, [scrollActions]);

  useEffect(() => {

    setScrollAction(50, "nav_sticky", () => { });

    handleScroll({ target: { scrollTop: 0 } });

  }, []);

  const handleScroll = (event: any) => {

    Object.values(scrollActions).forEach((action: any) => {
      if (action.effect_place === "after") {

        if (event.target.scrollTop >= action.position) {
          setScrollActions((prev: any) => ({ ...prev, [action.action_name]: { ...prev[action.action_name], state: true } }));
          action.action();
        } else {
          setScrollActions((prev: any) => ({ ...prev, [action.action_name]: { ...prev[action.action_name], state: false } }));
        }

      } else {
        if (event.target.scrollTop < action.position) {
          setScrollActions((prev: any) => ({ ...prev, [action.action_name]: { ...prev[action.action_name], state: true } }));
          action.action();
        } else {
          setScrollActions((prev: any) => ({ ...prev, [action.action_name]: { ...prev[action.action_name], state: false } }));
        }
      }
    });

  };

  const setScrollAction = (position: number, action_name: string, action: () => void, action_effect_place: ("before" | "after") = "after") => {

    setScrollActions((prev: any) => ({
      ...prev,
      [action_name]: {
        action_name,
        position,
        action,
        state: false,
        effect_place: action_effect_place
      }
    }));

  }

  const getScrollState = (action_name: string) => {
    return scrollActions[action_name] ? scrollActions[action_name].state : false;
  }


  return (
    <div className="w-full" style={{ color: "var(--text_color)", height: "max-content" }}>

      {/* Navigation Component */}
      {
        (getScrollState("nav_sticky")) ? (<Navigation isSticky={true} />) : (<Navigation isSticky={false} />)
      }
      <div className="w-full" style={{ zIndex: 1 }}>
        <AnimationContext.Provider value={{ getScrollState, setScrollAction }}>
          <Outlet />
        </AnimationContext.Provider>
      </div>
      <FooterComponent />

    </div>
  );
}

export default MainScreen;
