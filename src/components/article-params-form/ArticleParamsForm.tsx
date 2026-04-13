import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useEffect } from 'react';
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
	ArticleStateType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	onApply: (state: ArticleStateType) => void;
	onReset: () => void;
	initialValues: ArticleStateType;
};

export const ArticleParamsForm = ({
	onApply,
	onReset,
	initialValues,
}: ArticleParamsFormProps) => {
	const [formOpened, changeFormState] = useState(false);

	const toggleForm = () => {
		const prevStateForm = formOpened;
		changeFormState(!prevStateForm);
	};

	const [fontSelected, setFontFamily] = useState(fontFamilyOptions[0]);
	const [fontSizeSelected, setFontSize] = useState(fontSizeOptions[0]);
	const [fontColorSelected, setFontColor] = useState(fontColors[0]);
	const [backgoundColorSelected, setBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [contentWidthSelected, setContentWidth] = useState(contentWidthArr[0]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onApply({
			fontFamilyOption: fontSelected,
			fontSizeOption: fontSizeSelected,
			fontColor: fontColorSelected,
			backgroundColor: backgoundColorSelected,
			contentWidth: contentWidthSelected,
		});
	};

	const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onReset();
	};

	useEffect(() => {
		setFontFamily(initialValues.fontFamilyOption);
		setFontSize(initialValues.fontSizeOption);
		setFontColor(initialValues.fontColor);
		setBackgroundColor(initialValues.backgroundColor);
		setContentWidth(initialValues.contentWidth);
	}, [initialValues]);

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
						onChange={setFontFamily}
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
