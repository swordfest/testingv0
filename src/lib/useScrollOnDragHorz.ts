import { useEffect, useRef, useCallback } from "react";
import invariant from "tiny-invariant";
const maxHorizontalScroll = (dom: any) => dom.scrollWidth - dom.clientWidth;
const maxVerticalScroll = (dom: any) => dom.scrollHeight - dom.clientHeight;
type ScrollParams = {
  dx: number;
};
const useScrollOnDragHorz = (
  domRef: any,
  {
    onDragStart = () => {},
    onDragEnd = () => {},
    runScroll = ({ dx }: ScrollParams) => {
      const offsetX = Math.min(
        maxHorizontalScroll(domRef.current),
        domRef.current.scrollLeft + dx
      );
      domRef.current.scrollLeft = offsetX; // eslint-disable-line no-param-reassign

       // eslint-disable-line no-param-reassign
    },
  } = {}
) => {
  const internalState = useRef({
    lastMouseX: null,
    lastMouseY: null,
    isMouseDown: false,
    isScrolling: false,
  });
  const scroll = useCallback(
    ({ dx }: ScrollParams) => {
      !(domRef.current !== null)
        ? process.env.NODE_ENV !== "production"
          ? invariant(
              false,
              `Trying to scroll to the bottom, but no element was found.
      Did you call this scrollBottom before the component with this hook finished mounting?`
            )
          : invariant(false)
        : void 0;
      runScroll({
        dx,
        
      });
    },
    [runScroll, domRef]
  );
  const onMouseDown = useCallback((e: any) => {
    internalState.current.isMouseDown = true;
    internalState.current.lastMouseX = e.clientX;
    internalState.current.lastMouseY = e.clientY;
  }, []);
  const onMouseUp = useCallback(() => {
    internalState.current.isMouseDown = false;
    internalState.current.lastMouseX = null;
    internalState.current.lastMouseY = null;
    if (internalState.current.isScrolling) {
      internalState.current.isScrolling = false;
      onDragEnd();
    }
  }, [onDragEnd]);
  const onMouseMove = useCallback(
    (e: any) => {
      if (!internalState.current.isMouseDown) {
        return;
      }
      if (!internalState.current.isScrolling) {
        internalState.current.isScrolling = true;
        onDragStart();
      }

      // diff is negative because we want to scroll in the opposite direction of the movement
      const dx = -(e.clientX - internalState.current.lastMouseX!);
      const dy = -(e.clientY - internalState.current.lastMouseY!);
      internalState.current.lastMouseX = e.clientX;
      internalState.current.lastMouseY = e.clientY;
      scroll({
        dx,
        
      });
    },
    [onDragStart, scroll]
  );
  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseUp, onMouseMove]);
  return {
    events: {
      onMouseDown,
    },
  };
};
//# sourceMappingURL=index.js.map

export default useScrollOnDragHorz;
