import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'


const SingleMovie = ({ movie: { _id, genres: {name}, status, title, overview, homepage, vote_average } }) => (
	<Row>
		<Card>
			<Card.Body>
				<Card.Title tag="h5">
					<p className='post-title'>{title}</p>
				</Card.Title>
          		<Card.Subtitle tag="h6" className="mb-2 text-muted">
					<p><span className='title'>Thể loại</span>{name}</p>
		  		</Card.Subtitle>
				<Card.Text>
					<Col className='post-content'>
						<p><span className='title'>Tình trạng phát hành: </span>{status}</p>
						<p><span className='title'>Đánh giá: </span>{vote_average}</p> 
						<p><span className='title'>Nội dung: </span>{overview}</p> 
					</Col>
				</Card.Text> 
				<form action={homepage}>
					<button class="csw-btn-button" type="submit">Xem phim</button>
				</form>   				
			</Card.Body>
      	</Card>
	</Row>
)

export default SingleMovie