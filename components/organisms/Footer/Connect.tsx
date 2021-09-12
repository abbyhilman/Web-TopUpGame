import Link from 'next/link';

export default function Connect() {
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href="mailto: hi@store.gg">
            <a className="text-lg color-palette-1 text-decoration-none">
              hi@store.gg
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="mailto: team@store.gg">
            <a className="text-lg color-palette-1 text-decoration-none">
              team@store.gg
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="http://maps.google.com/?q=Pasific 12,Jakarta Selatan">
            <a className="text-lg color-palette-1 text-decoration-none">
              Pasific 12, Jakarta Selatan
            </a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="tel: 02111229090">
            <a className="text-lg color-palette-1 text-decoration-none">
              021 - 1122 - 9090
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
