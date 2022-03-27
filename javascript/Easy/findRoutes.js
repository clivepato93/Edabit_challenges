// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript

function findRoutes(routes) {
    //Your code here...
    if(routes.length==1) return routes[0].join(' ')

    const cities = [...new Set(routes.flat())];
    const routeToTake = [];

    // while(routeToTake.length != 2){
    //     routes.forEach(row => {
    //         const [a,b] = row;
    //         let [aTotal,bTotal]=[0,0];
    //         routes.forEach(row=>{
    //             const [first,second] =row;
    //             if(a==first) aTotal++;
    //             if(b==second) bTotal++;
    //         })

    //         console.log(a,aTotal,b,bTotal)
    //     });

    for (let i = 0; i < 1; i++) {
        routes.forEach(row => {
                    const [a,b] = row;
                    let [aTotal,bTotal]=[0,0];
                    console.log(a,b)
                    routes.forEach(row=>{
                        const [first,second] =row;
                        console.log(first,second)
                        if(a==first|| a==second) aTotal++;
                        if(b==first||b==second) bTotal++;
                    })
        
                    console.log(a,aTotal,b,bTotal)
        
    })

    }

    // console.log(cities)
    // return routes.flat()
  }

// console.log(findRoutes([["HQ", "SH"]]));
console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"],
                        ["TAG", "CEB"], ["TAC", "BOR"]]),
                        ("MNL, TAG, CEB, TAC, BOR"));
// console.log(findRoutes([["San Policarpo", "Oras"], 
//                             ["Balangiga", "Lawaan"],
//                              ["Borongan", "Maydolong"],
//                               ["Jipapad", "Maslog"],
//                                ["Balangkayan", "Llorente"],
//                                 ["Mercedes", "Guiuan"],
//                                  ["Taft", "Sulat"],
//                                   ["Sulat", "San Julian"],
//                                    ["Arteche", "San Policarpo"],
//                                     ["Oras", "Dolores"],
//                                      ["Dolores", "Can-avid"],
//                                       ["Can-avid", "Taft"],
//                                        ["San Julian", "Borongan"],
//                                         ["Maydolong", "Balangkayan"],
//                                          ["Llorente", "Hernani"],
//                                           ["Hernani", "General MacArthur"],
//                                            ["General MacArthur", "Giporlos"],
//                                             ["Giporlos", "Balangiga"],
//                                              ["Lawaan", "Salcedo"]
//                                              , ["Salcedo", "Mercedes"],
//                                               ["Maslog", "Arteche"]]))

//   var routes8 = findRoutes([["San Policarpo", "Oras"], 
//                             ["Balangiga", "Lawaan"],
//                              ["Borongan", "Maydolong"],
//                               ["Jipapad", "Maslog"],
//                                ["Balangkayan", "Llorente"],
//                                 ["Mercedes", "Guiuan"],
//                                  ["Taft", "Sulat"],
//                                   ["Sulat", "San Julian"],
//                                    ["Arteche", "San Policarpo"],
//                                     ["Oras", "Dolores"],
//                                      ["Dolores", "Can-avid"],
//                                       ["Can-avid", "Taft"],
//                                        ["San Julian", "Borongan"],
//                                         ["Maydolong", "Balangkayan"],
//                                          ["Llorente", "Hernani"],
//                                           ["Hernani", "General MacArthur"],
//                                            ["General MacArthur", "Giporlos"],
//                                             ["Giporlos", "Balangiga"],
//                                              ["Lawaan", "Salcedo"]
//                                              , ["Salcedo", "Mercedes"],
//                                               ["Maslog", "Arteche"]]);
//   Test.assertEquals(routes8, "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan");
//   });