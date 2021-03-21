

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton';
import { Link } from 'react-router-dom';
import classes from './ArticleListItem.module.css';

const ArticleListItem = (props) => {
	const [ itemState, setItemState ] = useState({
		buttonText: 'Show more',
		showDetails: true,
		details: null
	});
	const toggleButtonHandler = () => {
		if (itemState.showDetails) {
			setItemState({
				details: (
					<div>
						<time className={classes.time} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
						<p>{props.article.shortText}</p>
					</div>
				),
				buttonText: 'Show less',
				showDetails: !itemState.showDetails
			});
		} else {
			setItemState({
				details: null,
				buttonText: 'Show more',
				showDetails: !itemState.showDetails
			});
		}
	};

	return (
		<li className={classes.li}>
			<article>
				<h2>
					<Link className={classes.link} to={'/articlelist/' + props.article.slug}>{props.article.title}</Link>
				</h2>
				{itemState.details}
				<ArticleTextToggleButton clicked={toggleButtonHandler} buttonText={itemState.buttonText} />
			</article>
		</li>
	);
};

ArticleListItem.propTypes = {
	article: PropTypes.object.isRequired
};
export default ArticleListItem;
