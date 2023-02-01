import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>NotFound Page</h1>
      <h2>There is no such page!</h2>
      <p>
        I turn to <Link href="/">Home Page</Link> in three seconds...
      </p>
    </div>
  );
};

export default NotFoundPage;
