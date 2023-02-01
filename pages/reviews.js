import Head from "next/head";

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      <Head>
        <title>Fat burgers | Customer Reviews</title>
        <meta name="title" content="Fat burgers" />
      </Head>

      <div>
        <h1>Customer Reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 30).map((response) => {
              return (
                <div className="review" key={response.id}>
                  {response.id}. {`${response.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 100),
    },
  };
}

export default Reviews;
