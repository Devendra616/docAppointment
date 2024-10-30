import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Context for Doctor login and token
const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${backEndUrl}/api/doctor/appointments`,
        {
          headers: { dToken },
        }
      );
      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    dToken,
    setDToken,
    backEndUrl,
    getAppointments,
    appointments,
  };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export { DoctorContextProvider, DoctorContext };
