
// getElementById
// const listDemo = document.getElementById('listDemo');





const searchBar = document.getElementById('searchBar');
const header = document.getElementById('header');
var arrDemo  = [
    {id:1, 
    name :'long1', 
    img:'../image/long-2.jpg',
    },
    {id:2, 
    name :'long2', 
    img:'../image/long-2.jpg',
    },
    {id:3, 
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3, 
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
        name :'long3',  
        img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },
    {id:3,
    name :'long3',  
    img:"../image/long-2.jpg",
    },

    
];

const displayEle = (arrDemo)=>{
    var htmldisplay = arrDemo.map((item)=>{
        console.log('item', item.img);
        return`
        <a href="" class="characters-item">
                <div class="characters-wrapper">
                    <img src="${item.img}" alt="">
                </div>
                <div class="characters-name">${item.name}</div>
        </a>
        `
    })
    listDemo.innerHTML = htmldisplay;
};

displayEle(arrDemo);



































// searchBar.addEventListener('keyup',(e)=>{
//     var searchBartext = e.target.value;
//     console.log('e',e);
//     console.log('searchBartext', searchBartext);
//     const fitertext = arrDemo.filter((item)=>{
//         return (
//             item.name.includes(searchBartext)
//         );
//     });
//     displayEle(fitertext);
// });
// var menuArr = ['home', 'contact', 'detail']
// const displayHeader=()=>{
//     var htmldisplayheader = menuArr.map((item)=>{
//         return`
//         <div class="menuitem">${item}</div>
//         `
//     });
//     header.innerHTML = htmldisplayheader;

// }
// displayHeader();



