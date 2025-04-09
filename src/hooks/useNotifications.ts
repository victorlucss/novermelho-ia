
import { useEffect, useState } from 'react';
import { notificationService } from '@/services/NotificationService';

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  
  useEffect(() => {
    // Check if notifications are supported
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications");
      return;
    }
    
    // Set initial permission state
    setPermission(Notification.permission);
    
    // Check for notifications that need to be shown
    const checkNotifications = async () => {
      await notificationService.checkForDueRecurrentExpenses();
      await notificationService.checkForBudgetAlerts();
    };
    
    // Run immediately once
    checkNotifications();
    
    // Set up interval to check regularly (every hour)
    const intervalId = setInterval(checkNotifications, 60 * 60 * 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const requestPermission = async () => {
    try {
      const permission = await notificationService.requestPermission();
      setPermission(permission);
      return permission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return "denied" as NotificationPermission;
    }
  };
  
  return {
    permission,
    requestPermission,
    showNotification: notificationService.showNotification.bind(notificationService)
  };
};
