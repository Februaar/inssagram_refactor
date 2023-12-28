import { useState, useEffect } from "react";
import { NotificationData } from "@/types/NotificationTypes";
import getNotiAll from "@/services/notificationInfo/getNotiAll";
import { PageHeader } from "@/components/atoms/Header";
import AlarmItem from "@/components/Items/Alarm";

const NotificationsPage: React.FC<NotificationData> = () => {
  const pageTitle = "알림";
  const [notifications, setNotifications] = useState<
    NotificationData[] | undefined
  >();

  useEffect(() => {
    fetchNotiAllData();
  }, []);

  const fetchNotiAllData = async () => {
    try {
      const res = await getNotiAll();
      setNotifications(res.data);
    } catch (err) {
      console.error("error fetching alarm:", err);
    }
  };

  return (
    <>
      <PageHeader title={pageTitle} />
      {notifications &&
        notifications.map((notification) => (
          <AlarmItem key={notification.id} noti={notification} />
        ))}
    </>
  );
};

export default NotificationsPage;
