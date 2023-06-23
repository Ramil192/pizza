import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="362" cy="208" r="20" />
    <circle cx="145" cy="123" r="122" />
    <rect x="26" y="267" rx="0" ry="0" width="257" height="20" />
    <rect x="21" y="314" rx="0" ry="0" width="279" height="76" />
    <rect x="20" y="412" rx="0" ry="0" width="289" height="41" />
  </ContentLoader>
);
export default Skeleton;
