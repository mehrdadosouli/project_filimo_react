let flag=false;
export const searchHandler = () => {
    if(!flag){
        document.querySelector("#searchInput").style.display = "block";
        flag=true
    }else{
        document.querySelector("#searchInput").style.display = "none";
        flag=false
    }
};
