import BaseLayout from "@/components/layouts/base/BaseLayout";
import NavbarLayout from '@/components/layouts/navbar/NavbarLayout';
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (<>
  <h1>About page</h1>
  <p>Placeholder</p>
  </>);
};

export default About;

About.getLayout = (page) => {
  return (
    <>
      <NavbarLayout />
      <BaseLayout title="About">
        {page}
      </BaseLayout>
    </>
  );
};
