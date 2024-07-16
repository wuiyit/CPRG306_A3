import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/movies", {cache: "no-store"});
  if(!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
}

const Home = async () => {
  const movies = await getData()
  return (    
    <main className="flex min-h-screen flex-col justify-between p-12 mt-10">
    <MovieList movie={movies}/>
    </main>
  );
}
export default Home;