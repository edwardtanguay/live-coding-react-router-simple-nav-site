import { useState, useEffect } from 'react';
import axios from 'axios';

const booksUrl = 'https://gutendex.com/books/?search=berlin';

export const PageBooks = () => {
	const [bookData, setBookData] = useState({count: 0, results: []});

	useEffect(() => {
		(async () => {
			setBookData((await axios.get(booksUrl)).data);	
		})();
	}, []);

	return (
		<>
		<h2>Books</h2>	
		<p>There are {bookData.count} books yet.</p>

			{bookData.results.map((book, index) => {
				return (
					<div className="book">
						<div className="title">{book.title}</div>
					</div>
				)
		})}
		</>
	)
}