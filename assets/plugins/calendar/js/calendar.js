mobiscroll.setOptions({
  theme: "ios",
  locale: mobiscroll.localeEn,
});

var inst = mobiscroll.eventcalendar("#demo-mobile-month-view", {
  locale: mobiscroll.localeEn, // Specify language like: locale: mobiscroll.localePl or omit setting to use default
  theme: "ios", // Specify theme like: theme: 'ios' or omit setting to use default
  themeVariant: "light", // More info about themeVariant: https://docs.mobiscroll.com/5-26-0/javascript/eventcalendar#opt-themeVariant
  view: {
    // More info about view: https://docs.mobiscroll.com/5-26-0/javascript/eventcalendar#opt-view
    calendar: { type: "month" },
    agenda: { type: "month" },
  },
  onEventClick: function (event, inst) {
    // More info about onEventClick: https://docs.mobiscroll.com/5-26-0/javascript/eventcalendar#event-onEventClick
    mobiscroll.toast({
      message: event.event.title,
    });
  },
});

mobiscroll.util.http.getJson(
  "https://trial.mobiscroll.com/events/?vers=5",
  function (events) {
    inst.setEvents(events);
  },
  "jsonp"
);
