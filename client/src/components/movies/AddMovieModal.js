import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { MovieContext } from '../../contexts/MovieContext'

const AddMovieModal = () => {
	// Contexts
	const {
		showAddMovieModal,
		setShowAddMovieModal,
		addMovie,
		setShowToast
	} = useContext(MovieContext)

	// State
	const [newMovie, setNewMovie] = useState({
		title: '',
		genres: '',
		homepage: '',
        overview: '',
        status: 'Releasing'
	})

	const { title, genres, homepage, overview} = newMovie

	const onChangeNewMovieForm = event =>
		setNewMovie({ ...newMovie, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddMovieData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addMovie(newMovie)
		resetAddMovieData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddMovieData = () => {
        setNewMovie({title: '', genres: '', homepage: '', overview: '', status: 'Releasing'})
		setShowAddMovieModal(false)
	}

	return (
		<Modal show={showAddMovieModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>What do you want to learn?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
							aria-describedby='title-help'
							value={title}
							onChange={onChangeNewMovieForm}
						/>
						<Form.Text id='title-help' muted>
							Required
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Nội dung phim'
							name='overview'
							value={overview}
							onChange={onChangeNewMovieForm}
						/>
					</Form.Group>
                    <Form.Group>
						<Form.Control
							type='text'
							placeholder='Thể loại phim'
							name='genres'
							value={genres}
							onChange={onChangeNewMovieForm}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Link phim'
							name='homepage'
							value={homepage}
							onChange={onChangeNewMovieForm}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Create new movie!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddMovieModal