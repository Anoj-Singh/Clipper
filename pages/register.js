import Register from "../components/auth/Register";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta:{
        title:"Register Clipper Account | Clipper",
        description:"",
        keywords:"",
        pageUrl:"https://www.joinclipper.com/register",
        featuredImage:process.env.FAV_ICON
      }
    },
  };
}

export default function register() {
  return <Register />;
}
