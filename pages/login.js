import Login from "../components/auth/Login";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta:{
        title:"Login Clipper Account | Clipper",
        description:"",
        keywords:"",
        pageUrl:"https://www.joinclipper.com/login",
        featuredImage:process.env.FAV_ICON
      }
    },
  };
}

export default function login() {
  return <Login />;
}
