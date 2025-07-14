import { useEffect, type RefObject } from 'react';

type EventType =
  | 'mousedown'
  | 'mouseup'
  | 'touchstart'
  | 'touchend'
  | 'focusin'
  | 'focusout'

export const useOnClickOutside = <
  T extends HTMLElement = HTMLElement
>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent | FocusEvent) => void,
  eventType: EventType = 'mousedown',
  eventListenerOptions: AddEventListenerOptions = {},
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | FocusEvent) => {
      const target = event.target as Node | null;

      if (!target || !target.isConnected) return;

      const isOutside = Array.isArray(ref)
        ?
        ref
          .filter(r => r.current)
          .every(r => r.current && !r.current.contains(target))
        :
        ref.current
          ?
          !ref.current.contains(target)
          :
          false

      if (isOutside) handler(event);
    }

    document.addEventListener(eventType, listener, eventListenerOptions);

    return () => {
      document.removeEventListener(eventType, listener, eventListenerOptions);
    }
  }, [ref, eventType]);
};