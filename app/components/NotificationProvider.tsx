import {createContext, useState} from 'react';
let timeout: any;
const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData: any) => {},
  hideNotification: () => {},
});
export function NottificationContextProvider(props: any) {
  const [activeNotification, setActiveNotification]: any = useState();
  const showNotificationHandler = (notificationData: any) => {
    setActiveNotification(notificationData);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      hideNotificationHandler();
    }, 5000);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
export default NotificationContext;
