"use client";

import { useState } from "react";

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
}

function computeStoreStatus(): StoreStatus {
  try {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/New_York",
      hour12: false,
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    };
    const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);

    let weekday = "";
    let hour = 0;
    let minute = 0;

    parts.forEach((p) => {
      if (p.type === "weekday") weekday = p.value;
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    });

    const currentTimeDecimal = hour + minute / 60;
    let openNow = false;
    let closing = "6:00 PM";
    let opensNext = "7:30 AM";

    if (weekday === "Sun") {
      openNow = false;
      opensNext = "Mon 7:30 AM";
    } else if (weekday === "Tue") {
      openNow = currentTimeDecimal >= 7.5 && currentTimeDecimal < 13;
      closing = "1:00 PM";
      opensNext = "Wed 7:30 AM";
    } else if (weekday === "Sat") {
      openNow = currentTimeDecimal >= 7.5 && currentTimeDecimal < 13.5;
      closing = "1:30 PM";
      opensNext = "Mon 7:30 AM";
    } else {
      // Mon, Wed, Thu, Fri
      openNow = currentTimeDecimal >= 7.5 && currentTimeDecimal < 18;
      closing = "6:00 PM";
      opensNext = "7:30 AM";
    }

    if (openNow) {
      return {
        isOpen: true,
        statusText: `Open Now • Closes at ${closing}`,
        nextEventText: `Closes at ${closing}`,
      };
    }

    return {
      isOpen: false,
      statusText: `Closed Now • Opens at ${opensNext}`,
      nextEventText: `Opens at ${opensNext}`,
    };
  } catch {
    return {
      isOpen: true,
      statusText: "Pembroke Pines, FL \u2022 Open Today",
      nextEventText: "Closes at 6:00 PM",
    };
  }
}

export function useStoreHours(): StoreStatus {
  // Lazy initializer: computeStoreStatus() runs once at mount,
  // no useEffect or cascading setState needed.
  const [status] = useState<StoreStatus>(computeStoreStatus);
  return status;
}
