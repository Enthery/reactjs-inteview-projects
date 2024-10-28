import useFetch from ".";

export default function UseFetchCustomHookTest() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>use Fetch Hook.</h1>
      {pending ? <h3>Pending please wait! </h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
        : null}
    </div>
  );
}
