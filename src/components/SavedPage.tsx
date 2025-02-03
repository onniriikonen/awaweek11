import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useJokes from "../hooks/useJokes"


const SavedPage: React.FC = () => {
  const { savedJokes } = useJokes()

  return (
    <div>
      <Typography variant="h4">
        Saved Jokes
      </Typography>
      {savedJokes.length === 0 ? (
        <Typography>No saved jokes yet.</Typography>
      ) : (
        savedJokes.map((joke) => (
          <Card key={joke.id} variant="outlined">
            <CardContent>
              <Typography variant="h6">{joke.setup}</Typography>
              <Typography variant="h4">{joke.punchline}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default SavedPage
