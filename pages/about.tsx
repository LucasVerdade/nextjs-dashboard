import BaseLayout from "@/components/layouts/base/BaseLayout";
import NavbarLayout from '@/components/layouts/navbar/NavbarLayout';
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (<>About</>);
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
