import React from 'react';

import config from '../config/index.json';
import Plausible from 'plausible-tracker'

const { company, about } = config;
const { logo, name: companyName } = company;
const { socialMedia } = about;


class About extends React.Component {

  componentDidMount() {
    document.title = "xbridge - a unified ecosystem of tools and services for ark based blockchains"
    const { enableAutoPageviews } = Plausible()
    
    // This tracks the current page view and all future ones as well
    enableAutoPageviews()
  }

  render() {
    return (
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={logo} alt={companyName} className="w-22 h-10" />
          </div>
          <div className="flex items-center gap-x-8 mt-6 h-8">
            <a
              aria-label="github"
              href={socialMedia.github}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              aria-label="linkedin"
              href={socialMedia.discord}
              target="_blank"
              rel="noreferrer"
            >
              <svg
     enable-background="new 0 0 512 512"
     className="fill-current text-gray-800 dark:text-white hover:text-primary"
     id="Layer_1"
     version="1.1"
     viewBox="0 0 24 24"
     width="24"
     height="24"
     xmlns="http://www.w3.org/2000/svg"><defs
       id="defs7" /><circle
       cx="12"
       cy="12"
       id="ellipse"
       r="11.89142"/><path
       d="m 17.39759,7.9471593 c 0,0 -1.546816,-1.2123691 -3.376981,-1.3517182 l -0.162573,0.329804 c 1.653648,0.4041179 2.410801,0.9847534 3.205107,1.6954517 -1.365655,-0.6967611 -2.717374,-1.3517182 -5.06779,-1.3517182 -2.3504086,0 -3.7021345,0.6549571 -5.0677899,1.3517182 C 7.7218771,7.9099985 8.6230225,7.2643354 10.132678,6.9252451 L 9.9700975,6.5954411 C 8.0516734,6.7766019 6.5931237,7.9471593 6.5931237,7.9471593 c 0,0 -1.7279771,2.5083457 -2.0252635,7.4321357 1.7419066,2.011327 4.3896095,2.025264 4.3896095,2.025264 L 9.5102308,16.665986 C 8.5719245,16.340833 7.5081987,15.755554 6.5931237,14.701115 c 1.0915926,0.826824 2.7452403,1.690816 5.4068723,1.690816 2.66164,0 4.310645,-0.859342 5.406881,-1.690816 -0.915075,1.054439 -1.978801,1.639718 -2.917108,1.964871 l 0.552762,0.738573 c 0,0 2.647702,-0.01394 4.389609,-2.025264 -0.30658,-4.92379 -2.03455,-7.4321357 -2.03455,-7.4321357 z M 9.7935876,14.027577 c -0.6549571,0 -1.1845023,-0.603859 -1.1845023,-1.351718 0,-0.747859 0.5295452,-1.351718 1.1845023,-1.351718 0.6549574,0 1.1844944,0.603859 1.1844944,1.351718 0,0.747859 -0.529537,1.351718 -1.1844944,1.351718 z m 4.3942444,0 c -0.654957,0 -1.184494,-0.603859 -1.184494,-1.351718 0,-0.747859 0.529537,-1.351718 1.184494,-1.351718 0.654957,0 1.184503,0.603859 1.184503,1.351718 0,0.747859 -0.534189,1.351718 -1.184503,1.351718 z"
       fill="#ffffff"
       id="logo" /></svg>
            </a>
            <a
              aria-label="twitter"
              href={socialMedia.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-800 dark:text-white hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center mt-6">
            <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
              🄯 {new Date().getFullYear()}{' '}
              <a href="https://github.com/xbridge-sh" rel="nofollow">
                xbridge
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
};
export default About;
