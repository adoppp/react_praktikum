import { useEffect, type RefObject } from 'react';

// VARIANT 01:
// type EventType =
//   | 'mousedown'
//   | 'mouseup'
//   | 'touchstart'
//   | 'touchend'
//   | 'focusin'
//   | 'focusout'

// export const useOnClickOutside = <
//   T extends HTMLElement = HTMLElement
// >(
//   ref: RefObject<T> | RefObject<T>[],
//   handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
//   eventType: EventType = 'mousedown',
//   eventListenerOptions: AddEventListenerOptions = {},
// ): void => {
//   useEffect(() => {
//     const listener = (event: MouseEvent | TouchEvent | FocusEvent) => {
//       const target = event.target as Node | null;

//       if (!target || !target.isConnected) return;

//       const isOutside = Array.isArray(ref)
//         ?
//         ref
//           .filter(r => r.current)
//           .every(r => r.current && !r.current.contains(target))
//         :
//         ref.current
//           ?
//           !ref.current.contains(target)
//           :
//           false

//       if (isOutside) handler(event);
//     }

//     document.addEventListener(eventType, listener, eventListenerOptions);

//     return () => {
//       document.removeEventListener(eventType, listener, eventListenerOptions);
//     }
//   }, [ref, eventType]);
// };

// VARIANT 02:
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>, handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};