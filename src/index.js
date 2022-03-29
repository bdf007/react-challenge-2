import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>
    <div>
      <div>
        <h3>christophe</h3>
        <h4>⸭ chris@tophe.com</h4>
        <h4>📞 0606060606</h4>
        <button>Suppression</button>
        {/* // add at least 5 people contact info (name, phone, email and a delete */}
      </div>
      <div>
        <h3>vincent</h3>
        <h4>⸭ vinc@ent.fr</h4>
        <h4>📞 0607060706</h4>
        <button>Suppression</button>
      </div>
      <div>
        <h3>xavier</h3>
        <h4>⸭ xav@ier.net</h4>
        <h4>📞 0607080910</h4>
        <button>Suppression</button>
      </div>
      <div>
        <h3>ingrid</h3>
        <h4>⸭ ing@rid.us</h4>
        <h4>📞 0607080502</h4>
        <button>Suppression</button>
      </div>
      <div>
        <h3>jerome</h3>
        <h4>⸭ jero@me.me</h4>
        <h4>📞 0645897501</h4>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
