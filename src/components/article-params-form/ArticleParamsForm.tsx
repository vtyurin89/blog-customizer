import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [formOpened, changeFormState] = useState(false);

	const toggleForm = () => {
		const prevStateForm = formOpened;
		changeFormState(!prevStateForm);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('SUBMITTING!');
	};

	const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('RESETING!');
	};

	return (
		<>
			<ArrowButton isOpen={formOpened} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: formOpened,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
