export const metadata = {
  title: 'Trust Me',
}

export default function LaloLayout({ children }) {
    return (
        <html>
            <body style={{ margin: 0, padding: 0 }}>
                {children}
            </body>
        </html>
    )
}