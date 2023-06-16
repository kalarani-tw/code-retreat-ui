import { NavLink } from 'react-router-dom';
import GithubLogo from '../../assets/images/github.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-wave-blue p-6">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink className="flex items-center text-white" to="/">
          <span className="font-semibold text-xl">Code Retreat</span>
        </NavLink>
        <NavLink className="text-white hover:opacity-80" to="https://github.com/">
          <img src={GithubLogo} alt="github" className="h-8 w-8" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
