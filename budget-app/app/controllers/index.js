import Controller from '@ember/controller';

export default Controller.extend({

  testVal: "test value",

  actions: {

    testEcho() {
      alert(`Saving of the following email address is in progress: ${this.get('testVal')}`);
      // console.log("testEcho");
    }
  }
});
