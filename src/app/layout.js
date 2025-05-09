import ReactQueryProvider from "@/app/components/ReactQueryProvider";
export default function RootLayout({ children, pageProps }) {
	return (
		<html data-theme='synthwave' lang='en'>
			<body>
			<ReactQueryProvider>
				{children}
			</ReactQueryProvider>
			</body>
		</html>
	);
}
