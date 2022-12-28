export const apiUrl = process.env.REACT_APP_API_URL;

export const requestHeader = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const requestHeaderFormData = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

export const bookingTimeSlot = [
  {
    label: "10:00 - 11:00",
    isActive: false
  },
  {
    label: "11:00 - 12:00",
    isActive: false
  },
  {
    label: "12:00 - 13:00",
    isActive: false
  },
  {
    label: "13:00 - 14:00",
    isActive: false
  },
  {
    label: "14:00 - 15:00",
    isActive: false
  },
  {
    label: "15:00 - 16:00",
    isActive: false
  },
]