import LoopLogo from '../../shared/images/desktop/image-interactive.jpg';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Main = () => {
  return (
    <div className="main">
      <SectionOne logo={LoopLogo} />
      <SectionTwo />
    </div>
  );
};

export default Main;
