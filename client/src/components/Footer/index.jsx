import React from "react";
// router
import { Link } from 'react-router';

function Footer() {
  return (
    <div className="w-full bg-slate-900 p-4">
      <div className="max-w-7xl mx-auto text-slate-300 text-sm flex items-center justify-between">
        <div>Copyright</div>
        <Link to={'https://github.com/kemalgundogdu'} target="_blank">Kemal Gundogdu</Link>
      </div>
    </div>
  );
}

export default Footer;
