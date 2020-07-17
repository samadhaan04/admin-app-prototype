(function(window, undefined) {
  var dictionary = {
    "67c129b4-51d3-4c6f-b3bc-62b3533636f8": "blue-complaint",
    "258827c8-c1ec-446a-99f2-5fe2d1009c29": "admin-dashboard",
    "ad6749b7-07b3-421f-a9b1-f216ce711f44": "other_complaints",
    "a2a1fe88-f2bf-46c2-b05c-e61b91f60b75": "invalid_complaints",
    "c76e410e-33ef-4b12-8a0a-416471c07933": "red-complaint",
    "49e625ec-e44e-42de-8235-6d28b0d97ca4": "invalid-green-complaint",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login Screen",
    "5c8c66e0-08e7-4830-b419-1b9a9798c225": "ELE_complaints",
    "3f144bc4-e050-497e-a223-6f4089cc1b99": "WATER_complaints",
    "c033ece7-45f4-4c75-a41e-f562669ea681": "green-complaint",
    "6bea3797-e8c3-47fa-b515-bc37a244e841": "yellow-complaint",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);