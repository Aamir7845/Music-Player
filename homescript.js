

let songtypes=Array.from(document.getElementsByClassName('songtype'));
 let songs = [
     {songName:"Most Played: Hindi",catigary:"All",coverPath:"covers/1.jpg"},
     {songName:"Most Played: International",catigary:"All",coverPath:"covers/6.jpg"},
     {songName:"Most Played: Bhojpuri",catigary:"All",coverPath:"covers/7.jpg"},
     {songName:"Most Played: Panjabi",catigary:"All",coverPath:"covers/4.jpg"},
     {songName:"Most Played: India",catigary:"All",coverPath:"covers/5.jpg"},

     {songName:"Best of Arjit Singh",catigary:"Playlist",coverPath:"covers/9.jpg"},
     {songName:"Desi Vibes",catigary:"Playlist",coverPath:"covers/18.jpg"},
     {songName:"Workout",catigary:"Playlist",coverPath:"covers/19.jpg"},
     {songName:"Party",catigary:"Playlist",coverPath:"covers/20.jpg"},
     {songName:"Travel",catigary:"Playlist",coverPath:"covers/21.jpg"},

     {songName:"Arjit Singh",catigary:"Artists",coverPath:"covers/8.jpg"},
     {songName:"kk",catigary:"Artists",coverPath:"covers/10.jpg"},
     {songName:"Honey Singh",catigary:"Artists",coverPath:"covers/4.jpg"},
     {songName:"Shreya Ghoshal",catigary:"Artists",coverPath:"covers/11.jpg"},
     {songName:"Snou Nigam",catigary:"Artists",coverPath:"covers/12.jpg"},

     {songName:"Aashiqui2",catigary:"Albums",coverPath:"covers/13.jpg"},
     {songName:"kabir Singh",catigary:"Albums",coverPath:"covers/14.jpg"},
     {songName:"Ae dil hai Mushkil",catigary:"Albums",coverPath:"covers/15.jpg"},
     {songName:"Jawan",catigary:"Albums",coverPath:"covers/16.jpg"},
     {songName:"KGf",catigary:"Albums",coverPath:"covers/17.jpg"},
     
    
    ]

    songtypes.forEach((element,i) => {
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    })


    let searchBox = document.getElementById('searchBox');

    searchBox.addEventListener('input', function () {
    let searchText = searchBox.value.toLowerCase(); 
    let filteredSongs = songs.filter(song => song.songName.toLowerCase().includes(searchText));

   
    songtypes.forEach(item => item.style.display = 'none');

    
    filteredSongs.forEach(song => {
        let index = songs.indexOf(song);
        songtypes[index].style.display = '';
    });

    
    if (filteredSongs.length === 0) {
        document.getElementById("demo").innerHTML = "No Data Found!";
    }else{
        document.getElementById("demo").innerHTML = "";
    }
    
});



function filterSelection(c) {


    
        let searchText = c.toLowerCase(); 
        let filteredSongs = songs.filter(song => song.catigary.toLowerCase().includes(searchText));
    
       
        songtypes.forEach(item => item.style.display = 'none');
    
        
        filteredSongs.forEach(song => {
            let index = songs.indexOf(song);
            songtypes[index].style.display = '';
        });
}

