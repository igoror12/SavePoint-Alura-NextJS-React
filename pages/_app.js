import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV3K4XXSJK"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-DV3K4XXSJK');
                        `
                    }}        
                />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true.toString()} />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
