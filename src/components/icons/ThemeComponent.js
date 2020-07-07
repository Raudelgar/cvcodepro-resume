import React, { useContext } from 'react';
import { FaSun } from 'react-icons/fa';
import { MdBrightness4 } from 'react-icons/md';
import TooltipLabel from '../tooltips/TooltipLabel';
import { ThemeContext } from '../../context/ThemeContext';

export default function ThemeComponent({ collapse }) {
	const { theme, handleTheme } = useContext(ThemeContext);
	return (
		<TooltipLabel label='Theme' collapse={collapse}>
			<div className={`${theme}-content-icon`} onClick={handleTheme}>
				{theme === 'light' ? (
					<MdBrightness4 size={25} className={`${theme}-icon`} />
				) : (
					<FaSun size={25} className={`${theme}-icon`} />
				)}
			</div>
		</TooltipLabel>
	);
}
