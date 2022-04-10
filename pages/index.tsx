import BaseLayout from '@/components/layouts/base/BaseLayout';
import NavbarLayout from '@/components/layouts/navbar/NavbarLayout';
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (<>Welcome</>);
};

export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <NavbarLayout />
      <BaseLayout title="Home">
        {page}
      </BaseLayout>
    </>
  );
};
