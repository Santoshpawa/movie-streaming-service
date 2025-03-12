const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  


let goodMovies=movies.filter((ele)=> ele.rating>7.5).map((ele)=>({
    Title: ele.title,
    Watch_Time: (ele.watchTime/60).toFixed(2)+"Hr"
}))

let totalTime=movies.filter((ele)=> ele.rating>7.5).reduce((acc,curr)=>{
    acc=acc+curr.watchTime;
    return acc
},0)

console.log(goodMovies)

console.log((totalTime/60).toFixed(2)+"Hr")