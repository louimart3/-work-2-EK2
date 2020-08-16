
import {
  PersonsList
} from '../components';

class TeamPage {
  constructor() {
    this.compPersonsList = new PersonsList(3);
  }

  async render() {
    return `
      <div class="page page--team">
        <div class="container">
          <h1>Team</h1>
          <h3>Meet the team!</h3>
          <div class="row">
          ${await this.compPersonsList.render()}
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Connect the listeners
    return this;
  }

  async mount() {
    // Before the rendering of the page
    return this;
  }

  async unmount() {
    // After leaving the page
    return this;
  }
}

export default TeamPage;