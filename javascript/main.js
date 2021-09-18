searchBar.addEventListener("keyup",(e)=>{  //nhận các kí tự được gõ trên thanh search
    var searchBartext = e.target.value;    //target các kí tự đó làm 1 biến
    const filtertext = arrDemo.filter((item)=>{
        return(
            item.name.includes(searchBartext)     //hiển thị các giá trị trùng kí tự với phần đã gõ trên thanh search
        );
    
    });
    displayEle(filtertext)
})