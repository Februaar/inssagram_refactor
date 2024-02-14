export const createEventSource = (
  memberId: string | undefined,
  onMessage: any
) => {
  const eventSource = new EventSource(
    `${process.env.SERVER_URL}/notification/subscribe/${memberId}`
  );

  eventSource.addEventListener("sse", (e) => {
    const alarmData = JSON.parse(e.data);
    onMessage(alarmData);
  });

  eventSource.onerror = (err) => {
    console.error("error connection to SSE:", err);
    eventSource.close();
  };

  return eventSource;
};
