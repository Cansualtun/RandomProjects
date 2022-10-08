import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const ArtistsList = () => {
  const { artists, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (artists.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div>
      <h2>ArtistsList</h2>
    </div>
  );
};

export default ArtistsList;
