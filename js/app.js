var myLayout = new dhtmlXLayoutObject({

    parent:     "layoutObj",    // id/object, parent container for layout
    pattern:    "3L",           // string, layout's pattern
    skin:       "dhx_skyblue",  // optional,"dhx_skyblue"/"dhx_web"/"dhx_terrace"

    offsets: {          // optional, offsets for fullscreen init
        top:    10,     // you can specify all four sides
        right:  10,     // or only the side where you want to have an offset
        bottom: 10,
        left:   10
    },

    cells: [    // optional, cells configuration according to the pattern
        // you can specify only the cells you want to configure
        // all params are optional
        {
            id:             "a",        // id of the cell you want to configure
            text:           "Text",     // header text
            collapsed_text: "Text 2",   // header text for a collapsed cell
            header:         false,      // hide header on init
            width:          100,        // cell init width
            height:         100,        // cell init height
            collapse:       true        // collapse on init
            fix_size:       [true,null] // fix cell's size, [width,height]
        },
        {}, // other cell if any
    ]
});
