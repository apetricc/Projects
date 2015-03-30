var toDoObjects = [
    {
        "description" : "Get groceries",
        "tags" : ["shopping", "chores"]
    },
    {
        "description" : "Make up some ToDos",
        "tags" : ["writing", "work"]
    },
    {
        "description" : "Catch up with this class",
        "tags" : ["reading", "writing code", "this is a 3rd thing", "this is a 4th thing in this little array"]
    }
    ];

var main = function () {
    "use strict";
    
    var organizeByTags = function (toDoObjects) {
        //create an empty tags array
        var tags = [];
        
        // iterate over all toDos
        toDoObjects.forEach(function (toDo) {
            toDo.tags.forEach(function (tag) {
                
                // make sure the tag is not already in the tag array
                if (tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            });
        });
        console.log(tags);
        
        var tagObjects = tags.map(function (tag) {
            //find all the toDo objects that contain a tag
           var toDosWithTag = [];
            toDoObjects.forEach(function (toDo) {
                // check that result of indexOf !== -1
                if (toDo.tags.indexOf(tag) !== -1) {
                    toDosWithTag.push(toDo.description);
                }
            });
            
            // we map each tag to an object that contains the name
            // of the tag and an array
            return { "name": tag, "toDos": toDosWithTag };
        }); 
        console.log(tagObjects);
        
    };
    
    organizeByTags(toDoObjects);
};

$(document).ready(main);