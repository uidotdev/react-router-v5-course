import * as React from 'react'

export default function Loading ({ text = 'Loading'}) {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...`
          ? text
          : `${content}.`
      })
    }, 300)

    return () => window.clearInterval(id)
  }, [text])

  return (
    <div className='container'>
      <p className='text-center'>
        {content}
      </p>
    </div>
  )
}