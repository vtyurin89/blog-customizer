import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [formOpened, changeFormState] = useState(false);

	const toggleForm = () => {
		const prevStateForm = formOpened;
		changeFormState(!prevStateForm);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO
		console.log('SUBMITTING!');
	};

	const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		resetFormOptions();
	};

	const resetFormOptions = () => {
		setFont(fontFamilyOptions[0]);
		setFontSize(fontSizeOptions[0]);
		setFontColor(fontColors[0]);
		setBackgroundColor(backgroundColors[0]);
		setContentWidth(contentWidthArr[0]);
	};

	const [fontSelected, setFont] = useState(fontFamilyOptions[0]);
	const [fontSizeSelected, setFontSize] = useState(fontSizeOptions[0]);
	const [fontColorSelected, setFontColor] = useState(fontColors[0]);
	const [backgoundColorSelected, setBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [contentWidthSelected, setContentWidth] = useState(contentWidthArr[0]);

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
					<h2 className={styles.formTitle}>Задайте параметры</h2>
					<Select
						selected={fontSelected}
						onChange={setFont}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						selected={fontSizeSelected}
						name='radio'
						onChange={setFontSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={fontColorSelected}
						onChange={setFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgoundColorSelected}
						onChange={setBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={contentWidthSelected}
						onChange={setContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
