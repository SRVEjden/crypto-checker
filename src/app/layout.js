export default function DashboardLayout({ children }) {
	return (
		<html data-theme='synthwave' lang='en'>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
