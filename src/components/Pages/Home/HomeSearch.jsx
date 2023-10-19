import { ImLocation } from "react-icons/im";
const HomeSearch = () => {
  return (
    <div className="absolute bg-white px-8 py-3 shadow-lg z-[2] bottom-32 rounded-xl hidden md:block  ">
      {/* navbar to search items */}

      <div className="navbar bg-base-100 w-[1100px]  ">
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 space-x-20">
            <li tabIndex={0}>
              <details>
                <summary>
                  <ImLocation />
                  Choose a location
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <ImLocation />
                  Choose a location
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>
                  <ImLocation />
                  Choose a location
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-12 py-5 rounded-lg text-white bg-[#2B1B9A]">
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
