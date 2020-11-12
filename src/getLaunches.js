import React from "react";
import { gql, useQuery } from "@apollo/client";

const launches = gql`
  query GetLauchesRocket {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      details
      links {
        video_link
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(launches);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(
    ({ launch_date_utc, launch_success, rocket, links, details }) => (
      <div key={launch_success}>
        <h1>{rocket.rocket_name}</h1>
        <p>{launch_date_utc}</p>
        <a href={links.video_link}>Show This !</a>
        <p>{details}</p>
        <p>Success: {launch_success.toString()}</p>
      </div>
    )
  );
}

export default ExchangeRates;
