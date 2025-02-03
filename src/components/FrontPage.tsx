import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useFetch from './useFetch'

interface IJoke {
    id: number
    type: string
    setup: string
    punchline: string
}

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => boolean
  }

const FrontPage: React.FC<FrontPageProps> = ({ saveJoke }) => {
    const url: string = "https://official-joke-api.appspot.com/random_joke"
    const {data, loading, error} = useFetch(url)
    const joke = data as IJoke

    return (
        <>
            <h2>Joke</h2>
            {loading && <Typography>Loading a joke...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {joke && (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">{joke.setup}</Typography>
                        <Typography variant="h4">{joke.punchline}</Typography>
                    </CardContent>
                </Card>
            )}
            <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                Get Joke
            </Button>
            {joke && saveJoke && (
            <Button variant="contained" color="secondary" onClick={() => saveJoke(joke)}>
            Save Joke
            </Button>
      )}

        </>
    )
}

export default FrontPage





