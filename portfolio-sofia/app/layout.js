import '../styles/globals.css'

export const metadata = {
  title: 'Portfólio Sofia'
}

export default function RootLayout({
  children
}) {

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}