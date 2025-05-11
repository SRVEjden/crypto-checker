'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
	const router = useRouter();
	const clickHandler = () => {
		router.back();
	};
	return (
		<button onClick={clickHandler} aria-label='Вернуться назад'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M19 12H5M12 19l-7-7 7-7' />
			</svg>
		</button>
	);
}
