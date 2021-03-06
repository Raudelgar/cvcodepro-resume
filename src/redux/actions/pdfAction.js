import { GET_PDF, PDF_DONE } from '../types.js';
import { showLoader, hideLoader } from './loaderAction.js';
import { generatePdf } from 'api/services';

export function getPdf(profile, skills, experience, education, projects) {
	return (dispatch) => {
		dispatch(showLoader('pdf-btn'));
		//Disable PDF Btn
		dispatch(disbalePdfBtn());
		//Request PDF from API
		// requestPdf(profile.id)
		generatePdf(profile, skills, experience, education, projects)
			.then((res) => res)
			.catch((error) => console.log(error))
			.then(() => {
				dispatch(enablePdfBtn());
				dispatch(hideLoader());
			});
		// setTimeout(() => {
		// 	//Once PDF is done,
		// 	dispatch(enablePdfBtn());
		// 	dispatch(hideLoader());
		// }, 3000);
	};
}

function disbalePdfBtn() {
	return {
		type: GET_PDF,
		isDisable: true,
	};
}

function enablePdfBtn() {
	return {
		type: PDF_DONE,
		isDisable: false,
	};
}
