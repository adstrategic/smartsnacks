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
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=12516+Pines+Blvd+Ste+A9,+Pembroke+Pines,+FL+33027",
  embedMapUrlPlaceholder: "https://maps.google.com/maps?q=12516+Pines+Blvd+Ste+A9,+Pembroke+Pines,+FL+33027&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hours: [
    {
      dayRange: "Monday – Saturday",
      openTime: "07:00",
      closeTime: "18:00",
      formatted: "7:00 AM – 6:00 PM",
    },
    {
      dayRange: "Sunday",
      openTime: "09:00",
      closeTime: "15:00",
      formatted: "9:00 AM – 3:00 PM",
    },
  ],
};
