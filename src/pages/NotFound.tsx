import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-headline font-extrabold text-primary mb-4">
            404
          </h1>
          <p className="text-xl text-on-surface-variant mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold inline-block hover:shadow-lg transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
