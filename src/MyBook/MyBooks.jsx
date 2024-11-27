
import Navebar from "../componetes/navebar";
import Footer from "../componetes/footer";

function MyBooks() {
  const mybooks = JSON.parse(localStorage.getItem("books"));
  const data = [mybooks];
  return (
    <div>
      <Navebar />
      <div className="min-h-[500px] pt-12">
        <div className="mt-6 my-3 px-3 flex">
          <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white ">
            <figure>
              <img src={mybooks.image} alt={mybooks.title} className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {mybooks.name}
                <div className="badge badge-secondary">{mybooks.category}</div>
              </h2>
              <p>{mybooks.title}</p>
              <div className="card-actions justify-between">
                <div className="badge badge-outline py-3">
                  {mybooks.price} ₹
                </div>
                <div className="badge badge-outline cursor-pointer hover:bg-pink-500 transition-all hover:text-white duration-300 py-3">
                  Buy Now
                </div>
              </div>
            </div>
          </div>

          <div className="mx-10">
            <div className="mx-10 w-full">
      
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyBooks;
