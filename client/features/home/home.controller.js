export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }

  addProfile() {
    console.log("addprofile clicked")
  }
}

HomeController.$inject = ['randomNames'];