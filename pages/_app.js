import 'tailwindcss/tailwind.css';
import Layout from '@components/Layout/Layout';
import '../style/Global.scss';

function MyApp ( { Component, pageProps } )
{
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> );
}

export default MyApp;
