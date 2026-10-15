import { BusinessLocation } from "@/types";

export const STORE_LOCATION: BusinessLocation = {
  name: "Smart Snack Nutrition",
  streetAddress: "12516 Pines Blvd Ste A9",
  corridor: "Pines Boulevard",
  city: "Pembroke Pines",
  state: "FL",
  postalCode: "33027",
  country: "US",
  phone: "+17865547333",
  displayPhone: "+1 (786) 554-7333",
  email: "smartsnacksnutrition@gmail.com",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=12516+Pines+Blvd+Ste+A9,+Pembroke+Pines,+FL+33027",
  embedMapUrlPlaceholder: "https://maps.google.com/maps?q=12516+Pines+Blvd+Ste+A9,+Pembroke+Pines,+FL+33027&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hours: [
    {
      dayRange: "Mon, Wed, Thu, Fri",
      openTime: "07:30",
      closeTime: "18:00",
      formatted: "7:30 AM – 6:00 PM",
    },
    {
      dayRange: "Tuesday",
      openTime: "07:30",
      closeTime: "13:00",
      formatted: "7:30 AM – 1:00 PM",
    },
    {
      dayRange: "Saturday",
      openTime: "07:30",
      closeTime: "13:30",
      formatted: "7:30 AM – 1:30 PM",
    },
    {
      dayRange: "Sunday",
      openTime: "Closed",
      closeTime: "Closed",
      formatted: "Closed",
    },
  ],
};
