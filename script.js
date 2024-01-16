
 let songIndex=0;
 let audioElement= new Audio('songs/1.mp3');
 let masterplay= document.getElementById('masterPlay');
 let myProgressBar= document.getElementById('myProgressBar');
 let myProgressBars= document.getElementById('myProgressBars');
 let gif= document.getElementById('gif');
 let gifs= document.getElementById('gifs');
 let mastersongName= document.getElementById('mastersongName');
 let songItems=Array.from(document.getElementsByClassName('songItem'));
 let songs = [
     {songName:"Not-Ramaiya-Vasta..",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
     {songName:"Zinda-Banda",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
     {songName:"Chaliya",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
     {songName:"Desi-Kalakaar-2",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
     {songName:"Heeriye-Heeriye-Aa",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    
    ]


    let searchBox = document.getElementById('searchBox');

    searchBox.addEventListener('input', function () {
    let searchText = searchBox.value.toLowerCase(); 
    let filteredSongs = songs.filter(song => song.songName.toLowerCase().includes(searchText));
   
    songItems.forEach(item => item.style.display = 'none');

    
    filteredSongs.forEach(song => {
        let index = songs.indexOf(song);
        songItems[index].style.display = '';
    });

    
    if (filteredSongs.length === 0) {
        document.getElementById("demo").innerHTML = "No Data Found!";
    }else{
        document.getElementById("demo").innerHTML = "";
    }
    
});



    songItems.forEach((element,i) => {
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    })
 
   
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
            gifs.style.opacity=1;
            mastersongName.innerText=songs[songIndex].songName;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
            gifs.style.opacity=0;
            makeAllPlay();
        }
    })
  
   audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
   })
    myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
    })

    
    audioElement.addEventListener('volumechange',()=>{
    
        progress=parseInt(audioElement.volume*100);
        console.log(progress);
        myProgressBars.value=progress;
    })
    myProgressBars.addEventListener('change',()=>{
         audioElement.volume= myProgressBars.value/100;
    })


    const makeAllPlay = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
              element.classList.remove('fa-pause-circle');
              element.classList.add('fa-play-circle'); 
        })
    }
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
          console.log(e.target);
        //   if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlay();
          songIndex = parseInt(e.target.id);
          e.target.classList.remove('fa-play-circle');
          e.target.classList.add('fa-pause-circle'); 
          audioElement.src = `songs/${songIndex+1}.mp3`;
          mastersongName.innerText=songs[songIndex].songName;
          audioElement.currentTime=0;
          audioElement.play();
          gif.style.opacity=1;
          gifs.style.opacity=1;
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
        })
    })

    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=4){
            songIndex=0
        }
        else{
            songIndex+=1
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=4
        }
        else{
            songIndex-=1
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
