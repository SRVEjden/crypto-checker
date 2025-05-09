import { BeatLoader } from 'react-spinners';

export default function Loader() {
	return (
		<div>
			<div className='flex w-screen justify-center items-center h-screen'>
				<BeatLoader color='#36d7b7' />
			</div>
		</div>
	);
}
