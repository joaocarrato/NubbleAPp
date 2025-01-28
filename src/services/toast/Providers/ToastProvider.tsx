import {createContext, useState} from 'react';

import {ToastService, Toast} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    return setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}
