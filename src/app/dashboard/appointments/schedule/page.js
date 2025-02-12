import ScheduleAppointment from "@/components/dashboard/Admin/appointments/ScheduleAppointment";
import getAllScheduleDates from "@/utils/getAllScheduleDates.mjs";

const page = async () => {
  const dates = await getAllScheduleDates();
  return <ScheduleAppointment dates={dates?.dates || []} />

};

export default page;
