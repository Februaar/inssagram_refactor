import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setAlarms } from "@/redux//alarmSlice";
import { NotificationData } from "@/types/NotificationTypes";
import { PageHeader } from "@/components/atoms/Header";
import AlarmItem from "@/components/Items/Alarm";
import getNotiAll from "@/services/notificationInfo/getNotiAll";

const NotificationsPage: React.FC<NotificationData> = () => {
  const pageTitle = "알림";
  const dispatch = useDispatch();
  const alarms = useSelector((state: RootState) => state.alarm.alarms);

  useEffect(() => {
    fetchNotiAllData();
  }, []);

  const fetchNotiAllData = async () => {
    try {
      const res = await getNotiAll();
      dispatch(setAlarms(res.data));
    } catch (err) {
      console.error("error fetching alarm:", err);
    }
  };

  return (
    <section>
      <PageHeader title={pageTitle} />
      <div>
        {alarms &&
          alarms.map((alarm) => <AlarmItem key={alarm.id} alarm={alarm} />)}
      </div>
    </section>
  );
};

export default NotificationsPage;
