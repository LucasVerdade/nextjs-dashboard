import BaseLayout from "@/components/layouts/base/BaseLayout";
import NavbarLayout from "@/components/layouts/navbar/NavbarLayout";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./page";
const LineChartExample = dynamic(()=> import ('../components/charts/ResponsiveLineChartExample'), {ssr:false})
const PieChartExample = dynamic(()=> import ('../components/charts/PieChartExample'), {ssr:false})
import { Col, Row } from "react-bootstrap";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Row>
        <Col>
          <div style={{height: 218, width: 788}}>
            <LineChartExample/>
          </div>
        </Col>
        <Col>
          <div style={{height: 330, width: 330 }}>
            <PieChartExample/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{height: 512, width: 512}}>
            <PieChartExample/>
          </div>
        </Col>
        <Col>
          <div style={{height: 512, width: 512}}>
            <LineChartExample/>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <>
      <NavbarLayout />
      <BaseLayout title="Home">{page}</BaseLayout>
    </>
  );
};
