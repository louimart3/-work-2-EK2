
import {
  PersonsList
} from '../components';

class TeamPage {
  

  async render() {
    return `
      <div class="page page--team">
        <div class="container">
          <h1>Team</h1>
          <h3>Meet the team!</h3>
          <div class="row ">
            <div class="col-6 col-sm-4">
              <div class="box">
                <img class="" src="https://dl.airtable.com/.attachmentThumbnails/638a5a7c5e9ca65cf834081e0fc54f29/7800f87f" alt="">
                <div class="box-text">
                  <p>titel hierzo</p>
                  <p>nog wa tekst hier kende het</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4">
              <div class="box">
                <img class="" src="https://dl.airtable.com/.attachmentThumbnails/5f1fa62c40e63d2723039fa954794a55/6705d158" alt="">
                <div class="box-text">
                  <p>titel hierzo</p>
                  <p>nog wa tekst hier kende het</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4">
              <div class="box">
                <img class="" src="https://dl.airtable.com/.attachmentThumbnails/7c69cf65f10a2ca13d84b1a84f434a31/4fb07f4c" alt="">
                <div class="box-text">
                  <p>titel hierzo</p>
                  <p>nog wa tekst hier kende het</p>
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