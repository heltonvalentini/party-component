import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { PartyComponent } from 'party-component';

const locale = 'en';

/*eslint-disable*/
export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div>
          <p>Some content in same parent div as</p>
          <PartyComponent
            ourFriends={[
               {name: "electrode", img: "//goo.gl/CZ4wAF", size: 12},
               {name: "hapi", img: "//goo.gl/q9uIFW", size: 12},
               {name: "React", img: "//goo.gl/dL5MXT", size: 12}
              ]}

              invitees={[
               {name: "electrode", invited: true},
               {name: "hapi", invited: true},
               {name: "React", invited: true}
              ]}

              toggleGuest={(invitee) =>
                alert("Edit invitees array in playground to invite a guest!")
              }

              message={(c) => (
                <div className={c}>
                  Change key "invited" to true in "invitees" array in the playground above to invite guests!
                </div>
              )}
            />
        </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
/*eslint-enable*/
