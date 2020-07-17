jQuery("#simulation")
  .on("click", ".s-258827c8-c1ec-446a-99f2-5fe2d1009c29 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-solved-complaints")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#FD999A",
                        "border-right-color": "#FD999A",
                        "border-bottom-color": "#FD999A",
                        "border-left-color": "#FD999A"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints span": {
                      "attributes": {
                        "color": "#FD999A"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints": {
                      "attributes-ie": {
                        "border-top-color": "#FD999A",
                        "border-right-color": "#FD999A",
                        "border-bottom-color": "#FD999A",
                        "border-left-color": "#FD999A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DD3214",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DD3214",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DD3214",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DD3214",
                        "border-radius": "22px 22px 22px 22px"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints span": {
                      "attributes": {
                        "color": "#DD3214",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DD3214",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DD3214",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DD3214",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DD3214",
                        "border-radius": "22px 22px 22px 22px"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-solved-complaints-per-day")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-solved-complaints-per-day": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-user-rating")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-258827c8-c1ec-446a-99f2-5fe2d1009c29 #s-user-rating": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5c8c66e0-08e7-4830-b419-1b9a9798c225",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3f144bc4-e050-497e-a223-6f4089cc1b99",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad6749b7-07b3-421f-a9b1-f216ce711f44",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad6749b7-07b3-421f-a9b1-f216ce711f44",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad6749b7-07b3-421f-a9b1-f216ce711f44",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Department_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a2a1fe88-f2bf-46c2-b05c-e61b91f60b75",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slidedown",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });