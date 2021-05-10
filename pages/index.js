import Head from 'next/head';


export default function Home() {
  return (
    <div >
     <Head>
       <title>Webdev Newz</title>
       <meta name="keywords" content="web development"/>
     </Head>
      <h1>krishna is trying nextjs</h1>
    </div>
  )
}
export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
const articles = await res.json()
return {
  props:{
    articles
  }
}
}