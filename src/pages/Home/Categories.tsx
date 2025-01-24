const Categories = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto px-4 py-20">
        {/*  Search Bar  */}
        <div className="flex justify-center pb-20">
          <input
            className="w-full p-2 px-5 border border-gray-300 rounded-l-md"
            placeholder="Search for a place"
            type="text"
          />
          <button className="w-[243px] h-[50px] bg-orange-500 text-white text-xl px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
        {/*  Browse by Category  */}
        <div className="flex flex-col md:flex-row gap-x-[120px]">
          {/*  Categories  */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-[28px] font-bold mb-4 font-libre">
              Browse by Category:
            </h2>
            <p className="mb-4 text-lg">
              Pick a category to filter your search!
            </p>
            <div className="space-y-4">
              <div className="h-[200px] p-4 rounded-md relative">
                <span className="text-2xl text-white font-libre relative z-10 font-bold">
                  All Posts
                </span>
                <img
                  alt="Dog with sunglasses"
                  className="w-full h-full object-cover absolute top-0 right-0"
                  height="50"
                  src="/src/assets/images/AllPost.png"
                  width="50"
                />
              </div>
              <div className="h-[200px] p-4 rounded-md relative">
                <span className="text-2xl text-white font-libre relative z-10 font-bold">
                  Educational
                </span>
                <img
                  alt="Dog with glasses"
                  className="w-full h-full object-cover absolute top-0 right-0"
                  height="50"
                  src="/src/assets/images/Educational.png"
                  width="50"
                />
              </div>
              <div className="h-[200px] p-4 rounded-md relative">
                <img
                  alt="Dog reading newspaper"
                  className="w-full h-full object-cover absolute top-0 right-0"
                  height="50"
                  src="/src/assets/images/News.png"
                  width="50"
                />
                <span className="text-2xl text-white font-libre relative z-10 font-bold">
                  News
                </span>
              </div>
              <div className="h-[200px] p-4 rounded-md relative">
                <img
                  alt="Dog with sunglasses and headphones"
                  className="w-full h-full object-cover absolute top-0 right-0"
                  height="50"
                  src="/src/assets/images/Stories.png"
                  width="50"
                />
                <span className="text-2xl text-white font-libre relative z-10 font-bold">
                  Stories
                </span>
              </div>
            </div>
          </div>
          {/*  Posts  */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/*  Post 1  */}
            {["Educational", "News", "Stories", "News", "Stories"].map((i) => {
              return (
                <div
                  key={i}
                  className="h-[400px] bg-white rounded-lg shadow-md overflow-hidden relative"
                >
                  <img
                    alt="Dog on the beach"
                    className="w-full h-full object-cover absolute top-0 left-0"
                    height="400"
                    src="https://storage.googleapis.com/a1aa/image/TDCJJMU2e9V2Dq4UgsYtvFR8PTKt7SynWedGBoR467EPKYIUA.jpg"
                    width="600"
                  />
                  <div className="lg:p-7 relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <span
                        className={`${
                          i === "Educational"
                            ? "bg-[#E9BB32]"
                            : i === "News"
                            ? "bg-[#1EA7C4]"
                            : "bg-[#7D3DE5]"
                        }
                            text-white px-2 py-1 rounded-md text-sm`}
                      >
                        {i}
                      </span>
                    </div>
                    <div className="text-white">
                      <h3 className="mt-2 text-2xl font-bold ">
                        5 Essential Training Tips Every Dog Owner Should Know
                      </h3>
                      <div className="flex items-center gap-2.5 text-gray-500 text-sm mt-2">
                        <img
                          className="w-[25px] h-[25px]"
                          src="/src/assets/icons/clock 1.svg"
                          alt=""
                        />
                        <span className="text-white">4 minute read</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
