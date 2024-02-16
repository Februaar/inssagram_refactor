import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setAlarms } from "@/redux//alarmSlice";
import { NotificationData } from "@/types/NotificationTypes";
import { PageHeader } from "@/components/atoms/Header";
import AlarmItem from "@/components/Items/Alarm";
import Error from "@/components/atoms/Error";
import getNotiAll from "@/services/notificationInfo/getNotiAll";

const NotificationsPage: React.FC<NotificationData> = () => {
  const pageTitle = "알림";
  const dispatch = useDispatch();
  const alarms = useSelector((state: RootState) => state.alarm.alarms);

  const fetchNotiAllData = useCallback(async () => {
    try {
      const res = await getNotiAll();
      dispatch(setAlarms(res.data));
    } catch (err) {
      console.error("error fetching alarm:", err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchNotiAllData();
  }, [fetchNotiAllData]);

  return (
    <section>
      <PageHeader title={pageTitle} />
      <div>
        {alarms ? (
          alarms.map((alarm, index) => <AlarmItem key={index} alarm={alarm} />)
        ) : (
          <Error message="조회할 알림이 없습니다" />
        )}
      </div>
    </section>
  );
};

export default NotificationsPage;
