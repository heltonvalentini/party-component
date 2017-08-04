/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import PartyComponent from "src/components/party-component";

describe("components/party-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<PartyComponent />);
      expect(component).to.not.be.null;
    });

  });

});
