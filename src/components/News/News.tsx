import n1 from "./../../assets/news/01.png";
import n2 from "./../../assets/news/02.png";
import n3 from "./../../assets/news/03.png";
import { IoIosArrowForward } from "react-icons/io";
const News = () => {
  const newsArray = [
    {
      id: 0,
      title: "Let’s Get Solution For Building Construction Work",
      date: "22 June,2024",
      newsImage: n1,
    },
    {
      id: 1,
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "24 June,2024",
      newsImage: n2,
    },
    {
      id: 2,
      title: "Best For Any Office & Business Interior Solution",
      date: "28 June,2024",
      newsImage: n3,
    },
  ];
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20 ">
      <div className="container mx-auto px-8">
        <div className="max-w-[810px] mx-auto text-center mb-[52px]">
          <h1 className="h1 mb-3">Articles & News</h1>
          <p className="max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          {newsArray.map((i, index) => (
            <div
              key={index}
              className="w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[28px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 "
            >
              <img src={i.newsImage} alt={i.title} className="mb-5" />
              <div className="flex flex-col gap-[30px]">
                <h3 className="h3 font-medium">{i.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-base">{i.date}</p>
                  <button className="bg-accent-secondary rounded-full px-6 py-4">
                    <IoIosArrowForward className="font-bold text-2xl" />
                  </button>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
