import { MovieContext } from '../contexts/MovieContext.js'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SingleMovie from '../components/movies/SingleMovie'


const Movie = () => {
	// Contexts

	const { 
		movieState: { movies, moviesLoading },
		getMovies
	} = useContext(MovieContext)

	// Start: Get all Movies
	// eslint-disable-next-line
	useEffect(() => getMovies(), [])

	let body = null

	if (moviesLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} else if (movies.length === 0) {
		body = (
			<>
				<Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>Ui chao! Chưa có phim nào hết</Card.Header>
				</Card>
			</>
		)
	} else {
		body = (
			<>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{movies.map(movie => (
						<Col key={movie._id} className='my-2'>
							<SingleMovie movie={movie}/>
						</Col>
					))}
				</Row>				
				<p>up thêm phim cho web nào!</p>
			</>
		)
	}


	return (
		<>
			{body}
		</>
	)
}

export default Movie