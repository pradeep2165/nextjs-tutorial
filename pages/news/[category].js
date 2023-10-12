export default function ArticleListByCcategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((articles) => {
        return (
          <div key={articles}>
            <h2>
              {articles.id} {articles.title}
            </h2>
            <p>{articles.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
