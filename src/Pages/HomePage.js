import React from "react";
import Banner from "../components/Banner/Banner";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../components/ErrorBoundary";
const CoinsTable = React.lazy(() => import("../components/CoinsTable"));

const HomePage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={()=>{}}>
      <Suspense fallback={<div>Loading...</div>}>
      <CoinsTable />
      </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
