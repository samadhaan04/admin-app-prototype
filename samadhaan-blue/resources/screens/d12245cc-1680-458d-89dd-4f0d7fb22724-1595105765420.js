jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(103,180,193,0.75)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button": {
                      "attributes-ie": {
                        "-pie-background": "rgba(103,180,193,0.75)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "rgba(103,180,193,0.4)",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button": {
                      "attributes-ie": {
                        "-pie-background": "rgba(103,180,193,0.4)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/258827c8-c1ec-446a-99f2-5fe2d1009c29",
                    "transition": {
                      "type": "slideup",
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