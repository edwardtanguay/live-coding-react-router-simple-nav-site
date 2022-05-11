import { useState, useEffect } from 'react';
import axios from 'axios';

const booksUrl = 'https://gutendex.com/books/?search=paris';

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
		bookData.results.forEach((rawBook) => {
			_books.push({
				id: rawBook.id,
				title: rawBook.title,
				author: rawBook.authors[0] ? rawBook.authors[0].name : '',
			});
		});
		console.log(_books);
		setBooks(_books);
	};

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
						<div key={index} className="book">
							<div className="title">
								{book.title} ({book.id})
							</div>
							{book.author !== '' ? (
								<div className="author">{book.author}</div>
							) : (
								<div className="authorNotFound">
									(Autor nicht bekannt)
								</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
