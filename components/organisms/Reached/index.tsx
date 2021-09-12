import CountItem from './countItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div
          className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4"
          data-aos="fade-up"
        >
          <CountItem numberCount="290M+" title="Players Top Up" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <CountItem numberCount="12.500" title="Games Available" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <CountItem numberCount="99%" title="Happy Players" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
          <CountItem numberCount="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
