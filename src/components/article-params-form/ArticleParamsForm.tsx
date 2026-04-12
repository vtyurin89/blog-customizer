import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

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
		setFont(fontOptions[0]);
		setFontSize(fontSizeOptions[0]);
		setFontColor(fontColorOptions[0]);
		setBackgroundColor(backgroundColorOptions[0]);
		setContentWidth(contentWidthOptions[0]);
	};

	const fontOptions = [
		{ title: 'Open Sans', value: 'Open_Sans', className: '' },
		{ title: 'Cormorant Garamond', value: 'Cormorant_Garamond', className: '' },
		{ title: 'Merriweather', value: 'Merriweather', className: '' },
		{ title: 'Days One', value: 'Days_One', className: '' },
		{ title: 'Ubuntu', value: 'Ubuntu', className: '' },
	];
	const [fontSelected, setFont] = useState(fontOptions[0]);

	const fontSizeOptions = [
		{ title: '18 PX', value: '18 PX', className: '' },
		{ title: '25 PX', value: '25 PX', className: '' },
		{ title: '38 PX', value: '38 PX', className: '' },
	];
	const [fontSizeSelected, setFontSize] = useState(fontSizeOptions[0]);

	const fontColorOptions = [
		{ title: 'Черный', value: 'black', className: '' },
		{ title: 'Белый', value: 'white', className: '' },
		{ title: 'Серый', value: 'grey', className: '' },
		{ title: 'Розовый', value: 'pink', className: '' },
		{ title: 'Ярко-розовый', value: 'flamingo', className: '' },
		{ title: 'Жёлый', value: 'yellow', className: '' },
		{ title: 'Зелёный', value: 'green', className: '' },
		{ title: 'Голубой', value: 'blue', className: '' },
		{ title: 'Фиолетовый', value: 'violet', className: '' },
	];
	const [fontColorSelected, setFontColor] = useState(fontColorOptions[0]);

	const backgroundColorOptions = [
		{ title: 'Белый', value: 'white', className: '' },
		{ title: 'Черный', value: 'black', className: '' },
		{ title: 'Серый', value: 'grey', className: '' },
		{ title: 'Розовый', value: 'pink', className: '' },
		{ title: 'Ярко-розовый', value: 'flamingo', className: '' },
		{ title: 'Жёлый', value: 'yellow', className: '' },
		{ title: 'Зелёный', value: 'green', className: '' },
		{ title: 'Голубой', value: 'blue', className: '' },
		{ title: 'Фиолетовый', value: 'violet', className: '' },
	];
	const [backgoundColorSelected, setBackgroundColor] = useState(
		backgroundColorOptions[0]
	);

	const contentWidthOptions = [
		{ title: 'Широкий', value: 'wide', className: '' },
		{ title: 'Узкий', value: 'thin', className: '' },
	];
	const [contentWidthSelected, setContentWidth] = useState(
		contentWidthOptions[0]
	);

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
						options={fontOptions}
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
						options={fontColorOptions}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgoundColorSelected}
						onChange={setBackgroundColor}
						options={fontColorOptions}
						title='Цвет фона'
					/>
					<Select
						selected={contentWidthSelected}
						onChange={setContentWidth}
						options={contentWidthOptions}
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
