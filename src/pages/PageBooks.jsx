import { useState, useEffect } from 'react';
import axios from 'axios';

const booksUrl = 'https://gutendex.com/books/?search=paris';

export const PageBooks = () => {
	const [books, setBooks] = useState([]);
	const [searchText, setSearchText] = useState('');

	const buildBooksArray = (bookData) => {
		const _books = [];

		const getReadUrl = (rawBook) => {
			let r = '';
			Object.entries(rawBook.formats).forEach((entry) => {
				const key = entry[0];
				const url = entry[1];
				if (key === 'text/html') {
					r = url;
				}
			});
			return r;
		};

		const getImageUrl = (rawBook) => {
			let r = '';
			Object.entries(rawBook.formats).forEach((entry) => {
				const key = entry[0];
				const url = entry[1];
				if (key === 'image/jpeg') {
					r = url;
				}
			});
			return r;
		};

		bookData.results.forEach((rawBook) => {
			_books.push({
				title: rawBook.title,
				author: rawBook.authors[0] ? rawBook.authors[0].name : '',
				readUrl: getReadUrl(rawBook),
				imageUrl: getImageUrl(rawBook)
			});
		});
		setBooks(_books);
	};

	useEffect(() => {
		(async () => {
			const bookData = (await axios.get(booksUrl)).data;
			buildBooksArray(bookData);
		})();
	}, []);

	const handleSearch = () => {
		alert('handlesearch');
	}

	return (
		<>
			<h2>Books</h2>
			<div className="searchArea">
				<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" /> <button onClick={handleSearch}>Search</button>
			</div>
			<p>There are {books.length} books yet.</p>

			<div className="books">
				{books.map((book, index) => {
					return (
						<div key={index} className="book">
							<div className="image">
								<img src={book.imageUrl} alt="book" />
							</div>
							<div className="info">
								<div className="title">
									{book.readUrl !== '' ? (
										<a href={book.readUrl} target="_blank">
											{book.title}
										</a>
									) : (
										<>{book.title}</>
									)}
								</div>
								{book.author !== '' ? (
									<div className="author">{book.author}</div>
								) : (
									<div className="authorNotFound">
										(Autor nicht bekannt)
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
