import { useState, useEffect } from 'react';
import axios from 'axios';

const booksUrl = 'https://gutendex.com/books/?search=berlin';

// interface
const book = {
	title: 'ttt',
	author: 'aaa',
	readUrl: 'uuu',
	imageUrl: 'uuu',
};

export const PageBooks = () => {
	const [books, setBooks] = useState([]);

	const buildBooksArray = (bookData) => {
		const _books = [];
		// forEach
		_books.push(
			{
				title: "Book #1"
			},
			{
				title: "Book #2"
			}
		);
		setBooks(_books);
	}

	useEffect(() => {
		(async () => {
			const bookData = (await axios.get(booksUrl)).data;
			buildBooksArray(bookData);
		})();
	}, []);

	return (
		<>
			<h2>Books</h2>
			<p>There are {books.length} books yet.</p>

			<div className="books">
				{books.map((book, index) => {
					return (
						<div className="book">
							<div className="title">{book.title}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
